import { redirect } from "next/navigation";

// Esta ruta ya no se usa — el canal de WhatsApp reemplaza el formulario de suscripción.
// Redirigimos al inicio para no dejar una URL huérfana.
export default function SuscribirsePage() {
  redirect("/");
}
