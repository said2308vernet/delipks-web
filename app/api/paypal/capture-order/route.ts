import { capturePaypalOrder } from "@/lib/paypal";
import { sql } from "@/lib/db";
import { procesarPagoCapturado } from "@/lib/pedidos";
import { dentroDelLimite, ipDelRequest } from "@/lib/rate-limit";

export async function POST(request: Request) {
  const permitido = await dentroDelLimite(`paypal-capture:ip:${ipDelRequest(request)}`, 20, 10);
  if (!permitido) {
    return Response.json({ error: "Demasiadas solicitudes. Intenta de nuevo en unos minutos." }, { status: 429 });
  }

  const body = await request.json();
  const orderId = String(body.orderID || "");
  if (!orderId) {
    return Response.json({ error: "Falta orderID." }, { status: 400 });
  }

  const capture = await capturePaypalOrder(orderId);
  const capturado = capture.status === "COMPLETED";

  await sql`
    update pedidos_paypal
    set estado = ${capturado ? "capturado" : "fallido"},
        paypal_payload = ${JSON.stringify(capture)},
        capturado_at = ${capturado ? new Date().toISOString() : null}
    where paypal_order_id = ${orderId}
  `;

  if (!capturado) {
    return Response.json({ error: "El pago no se completó.", status: capture.status }, { status: 402 });
  }

  await procesarPagoCapturado(orderId);

  return Response.json({ status: capture.status });
}
