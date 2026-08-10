import { verifyPaypalWebhookSignature } from "@/lib/paypal";
import { sql } from "@/lib/db";
import { procesarPagoCapturado } from "@/lib/pedidos";

// Respaldo de confirmación: si el navegador del cliente se cierra justo
// después de aprobar el pago (antes de que /api/paypal/capture-order
// termine), este webhook igual actualiza pedidos_paypal con lo que PayPal
// reporte. No maneja ciclo de vida de suscripción -- no aplica, ver
// decisión de 2026-08-09 (la "suscripción" es pago único de 4 semanas).
export async function POST(request: Request) {
  const webhookId = process.env.PAYPAL_WEBHOOK_ID;
  const body = await request.json();

  if (webhookId) {
    const valid = await verifyPaypalWebhookSignature({
      headers: request.headers,
      webhookId,
      body,
    });
    if (!valid) {
      return new Response("Firma de webhook inválida.", { status: 400 });
    }
  }

  const eventType = body.event_type as string;
  const resource = body.resource ?? {};

  if (eventType === "CHECKOUT.ORDER.APPROVED") {
    await sql`
      update pedidos_paypal set estado = 'aprobado', paypal_payload = ${JSON.stringify(body)}
      where paypal_order_id = ${resource.id} and estado = 'creado'
    `;
  } else if (eventType === "PAYMENT.CAPTURE.COMPLETED") {
    const orderId = resource.supplementary_data?.related_ids?.order_id;
    if (orderId) {
      await sql`
        update pedidos_paypal
        set estado = 'capturado', paypal_payload = ${JSON.stringify(body)}, capturado_at = now()
        where paypal_order_id = ${orderId} and estado != 'capturado'
      `;
      await procesarPagoCapturado(orderId);
    }
  } else if (eventType === "PAYMENT.CAPTURE.DENIED") {
    const orderId = resource.supplementary_data?.related_ids?.order_id;
    if (orderId) {
      await sql`
        update pedidos_paypal
        set estado = 'fallido', paypal_payload = ${JSON.stringify(body)}
        where paypal_order_id = ${orderId}
      `;
    }
  }

  return new Response("OK", { status: 200 });
}
