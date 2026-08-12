import "server-only";
import { sql } from "@/lib/db";
import { plans } from "@/lib/content";

// Mismas reglas de semana que delipks-admin (app/(panel)/clientes/semanas.ts):
// cobertura lunes-domingo aunque las comidas sean lunes-viernes.
function lunesDe(fechaStr: string): string {
  const d = new Date(fechaStr + "T00:00:00Z");
  const dia = d.getUTCDay() === 0 ? 7 : d.getUTCDay();
  d.setUTCDate(d.getUTCDate() - (dia - 1));
  return d.toISOString().slice(0, 10);
}

function semanasDesde(inicioLunes: string, cantidad: number): string[] {
  const semanas: string[] = [];
  for (let i = 0; i < cantidad; i++) {
    const d = new Date(inicioLunes + "T00:00:00Z");
    d.setUTCDate(d.getUTCDate() + i * 7);
    semanas.push(d.toISOString().slice(0, 10));
  }
  return semanas;
}

// Cierre de pedidos: viernes 8pm (hora de Puebla) para la semana siguiente
// (ver CLAUDE.md). Puebla es UTC-6 fijo, sin horario de verano desde 2022.
function proximaSemanaInicio(ahoraUTC: Date): string {
  const mxn = new Date(ahoraUTC.getTime() - 6 * 60 * 60 * 1000);
  const diaSemana = mxn.getUTCDay(); // 0=domingo ... 5=viernes, 6=sabado
  const horaMXN = mxn.getUTCHours();
  const cierrePasado = diaSemana === 0 || diaSemana === 6 || (diaSemana === 5 && horaMXN >= 20);

  const lunesActual = lunesDe(mxn.toISOString().slice(0, 10));
  const [, siguiente, subsiguiente] = semanasDesde(lunesActual, 3);
  return cierrePasado ? subsiguiente : siguiente;
}

export type DatosPedidoPago = {
  planId: string;
  semanas: number; // 1 = compra puntual, 4 = paquete de suscripcion
  nombre: string;
  correo: string;
  telefono: string;
  calle: string | null;
  numero: string | null;
  colonia: string | null;
  codigoPostal: string | null;
  referencia: string | null;
  paypalOrderId: string;
};

// Espejo de registrarPedido() en delipks-admin (clientes/actions.ts), pero
// disparado automaticamente al capturar un pago de PayPal en vez de un
// formulario que llena el staff a mano. "zona" se deja sin asignar (catalogo
// que el staff controla) -- no bloquea Planificador/Produccion, que solo
// leen pedidos_semanales, no clientes.zona.
export async function crearClienteYPedidosDesdePago(datos: DatosPedidoPago): Promise<string> {
  const { rows: existentes } = await sql`select id from clientes where email = ${datos.correo} limit 1`;

  let clienteId: string;
  if (existentes.length > 0) {
    clienteId = existentes[0].id as string;
    await sql`
      update clientes
      set nombre = ${datos.nombre},
          telefono = ${datos.telefono},
          calle = coalesce(${datos.calle}, calle),
          numero = coalesce(${datos.numero}, numero),
          colonia = coalesce(${datos.colonia}, colonia),
          codigo_postal = coalesce(${datos.codigoPostal}, codigo_postal),
          referencia = coalesce(${datos.referencia}, referencia),
          activo = true,
          updated_at = now()
      where id = ${clienteId}
    `;
  } else {
    const { rows } = await sql`
      insert into clientes (nombre, telefono, email, calle, numero, colonia, codigo_postal, referencia, activo)
      values (${datos.nombre}, ${datos.telefono}, ${datos.correo}, ${datos.calle}, ${datos.numero}, ${datos.colonia}, ${datos.codigoPostal}, ${datos.referencia}, true)
      returning id
    `;
    clienteId = rows[0].id as string;
  }

  const inicio = proximaSemanaInicio(new Date());
  const notas = `Generado automáticamente desde pago por PayPal (orden ${datos.paypalOrderId})`;

  for (const semana of semanasDesde(inicio, datos.semanas)) {
    await sql`
      insert into pedidos_semanales (cliente_id, semana_inicio, plan, estado, pagado, notas)
      values (${clienteId}, ${semana}, ${datos.planId}, 'confirmado', true, ${notas})
      on conflict (cliente_id, semana_inicio) do update
        set plan = excluded.plan, estado = excluded.estado, pagado = excluded.pagado, notas = excluded.notas
    `;
  }

  await sql`
    update clientes
    set plan_actual = ${datos.planId}, fecha_inicio = coalesce(fecha_inicio, ${inicio})
    where id = ${clienteId}
  `;

  return clienteId;
}

type PedidoPaypalRow = {
  id: string;
  plan_id: string;
  semanas: number;
  monto: string;
  nombre: string | null;
  correo: string | null;
  telefono: string | null;
  calle: string | null;
  numero: string | null;
  colonia: string | null;
  codigo_postal: string | null;
  referencia: string | null;
  paypal_order_id: string;
  cliente_id: string | null;
};

// Se llama tanto desde capture-order (confirmacion directa) como desde el
// webhook (respaldo) -- idempotente por el chequeo de cliente_id, para que
// no importa cual de los dos llegue primero ni si llegan los dos.
export async function procesarPagoCapturado(paypalOrderId: string): Promise<void> {
  const { rows } = await sql`select * from pedidos_paypal where paypal_order_id = ${paypalOrderId} limit 1`;
  const pedido = rows[0] as PedidoPaypalRow | undefined;
  if (!pedido || pedido.cliente_id) return;

  // Ordenes de prueba anteriores a este campo pueden no traer nombre/correo
  // -- sin correo no hay con que identificar/crear el cliente, se omite.
  if (!pedido.nombre || !pedido.correo || !pedido.telefono) return;

  const clienteId = await crearClienteYPedidosDesdePago({
    planId: pedido.plan_id,
    semanas: pedido.semanas,
    nombre: pedido.nombre,
    correo: pedido.correo,
    telefono: pedido.telefono,
    calle: pedido.calle,
    numero: pedido.numero,
    colonia: pedido.colonia,
    codigoPostal: pedido.codigo_postal,
    referencia: pedido.referencia,
    paypalOrderId: pedido.paypal_order_id,
  });

  await sql`update pedidos_paypal set cliente_id = ${clienteId} where id = ${pedido.id}`;

  const plan = plans.find((p) => p.id === pedido.plan_id);
  const categoria = pedido.semanas === 4 ? "Ventas de paquetes (suscripción)" : "Ventas puntuales";
  const concepto = `Pago PayPal — ${plan?.label ?? pedido.plan_id} · ${pedido.semanas === 4 ? "paquete 4 semanas" : "1 semana"}`;
  await sql`
    insert into movimientos_financieros (tipo, concepto, categoria, monto, notas)
    values ('ingreso', ${concepto}, ${categoria}, ${pedido.monto}, ${`Orden PayPal ${pedido.paypal_order_id}`})
  `;
}
