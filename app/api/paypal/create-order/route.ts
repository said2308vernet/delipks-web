import { plans } from "@/lib/content";
import { createPaypalOrder } from "@/lib/paypal";
import { checkCoverageDb } from "@/lib/coverage-db";
import { sql } from "@/lib/db";

type Billing = "subscription" | "oneTime";

function texto(valor: unknown, max: number): string {
  return typeof valor === "string" ? valor.slice(0, max) : "";
}

export async function POST(request: Request) {
  const body = await request.json();
  const planId = String(body.planId || "");
  const billing: Billing = body.billing === "subscription" ? "subscription" : "oneTime";
  const nombre = texto(body.nombre, 200);
  const correo = texto(body.correo, 200);
  const telefono = texto(body.telefono, 30);
  const calle = texto(body.calle, 200);
  const numero = texto(body.numero, 30);
  const colonia = texto(body.colonia, 150);
  const codigoPostal = texto(body.codigoPostal, 5);
  const referencia = texto(body.referencia, 300);
  const nota = texto(body.nota, 1000);

  const plan = plans.find((p) => p.id === planId);
  if (!plan) {
    return Response.json({ error: "Plan inválido." }, { status: 400 });
  }

  // La cobertura se re-verifica en el servidor -- nunca se confía en lo que
  // el cliente reporte, solo se guarda para que el staff sepa si hace falta
  // confirmar la zona antes de la primera entrega.
  const cobertura = await checkCoverageDb(codigoPostal);

  // Monto siempre calculado en el servidor, nunca confiar en lo que mande el cliente.
  // "subscription" = paquete de 4 semanas pagado por adelantado (pago único, no recurrente).
  const semanas = billing === "subscription" ? 4 : 1;
  const precioSemanal = billing === "subscription" ? plan.priceSubscription : plan.priceOneTime;
  const monto = (precioSemanal * semanas).toFixed(2);

  const order = await createPaypalOrder({
    amount: monto,
    currency: "MXN",
    description: `Delipks — ${plan.label} · ${semanas === 4 ? "paquete 4 semanas" : "1 semana"}`,
  });

  await sql`
    insert into pedidos_paypal (
      plan_id, billing, semanas, monto, moneda, nombre, correo, telefono,
      calle, numero, colonia, codigo_postal, referencia, cobertura,
      nota, paypal_order_id, estado, paypal_payload
    )
    values (
      ${planId}, ${billing}, ${semanas}, ${monto}, 'MXN', ${nombre || null}, ${correo || null}, ${telefono || null},
      ${calle || null}, ${numero || null}, ${colonia || null}, ${codigoPostal || null}, ${referencia || null}, ${cobertura},
      ${nota || null}, ${order.id}, 'creado', ${JSON.stringify(order)}
    )
  `;

  return Response.json({ id: order.id });
}
