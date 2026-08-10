import { plans } from "@/lib/content";
import { createPaypalOrder } from "@/lib/paypal";
import { sql } from "@/lib/db";

type Billing = "subscription" | "oneTime";

export async function POST(request: Request) {
  const body = await request.json();
  const planId = String(body.planId || "");
  const billing: Billing = body.billing === "subscription" ? "subscription" : "oneTime";
  const nombre = typeof body.nombre === "string" ? body.nombre.slice(0, 200) : "";
  const correo = typeof body.correo === "string" ? body.correo.slice(0, 200) : "";
  const nota = typeof body.nota === "string" ? body.nota.slice(0, 1000) : "";

  const plan = plans.find((p) => p.id === planId);
  if (!plan) {
    return Response.json({ error: "Plan inválido." }, { status: 400 });
  }

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
    insert into pedidos_paypal (plan_id, billing, semanas, monto, moneda, nombre, correo, nota, paypal_order_id, estado, paypal_payload)
    values (${planId}, ${billing}, ${semanas}, ${monto}, 'MXN', ${nombre || null}, ${correo || null}, ${nota || null}, ${order.id}, 'creado', ${JSON.stringify(order)})
  `;

  return Response.json({ id: order.id });
}
