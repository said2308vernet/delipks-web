import Link from "next/link";

export const metadata = {
  title: "Aviso de Privacidad — Delipks",
  description: "Aviso de privacidad de Delipks conforme a la LFPDPPP.",
};

export default function AvisoPrivacidad() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-14">
      <div className="mb-4">
        <Link href="/" className="text-[13px] text-muted transition-opacity hover:opacity-70">
          ← Volver al inicio
        </Link>
      </div>

      <h1 className="mb-2 font-display text-3xl font-semibold text-ink lg:text-4xl">
        Aviso de Privacidad
      </h1>
      <p className="mb-8 text-xs text-muted">Última actualización: 24 de junio de 2026</p>

      <div className="space-y-6 text-[15px] leading-relaxed text-muted">
        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">1. Identidad del responsable</h2>
          <p>
            Delipks, con domicilio en Puebla, Puebla, México (en adelante &quot;Delipks&quot;, &quot;nosotros&quot; o &quot;la empresa&quot;), es responsable del tratamiento de los datos personales que nos proporcione, de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">2. Datos personales que recabamos</h2>
          <p className="mb-2">Para las finalidades señaladas en el presente aviso, podemos recabar las siguientes categorías de datos personales:</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>Nombre completo</li>
            <li>Número de teléfono y/o WhatsApp</li>
            <li>Dirección de entrega</li>
            <li>Correo electrónico (en caso de proporcionarlo)</li>
            <li>Información de pedidos y preferencias alimentarias</li>
            <li>Datos de facturación (RFC, domicilio fiscal), cuando el cliente lo solicite</li>
          </ul>
          <p className="mt-2">
            No recabamos datos personales sensibles. En caso de que nos proporciones información sobre alergias o restricciones alimentarias, esta será tratada con las medidas de seguridad correspondientes.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">3. Finalidades del tratamiento</h2>
          <p className="mb-2"><strong className="text-ink">Finalidades primarias (necesarias):</strong></p>
          <ul className="ml-5 list-disc space-y-1">
            <li>Procesar y gestionar tus pedidos de comida preparada</li>
            <li>Coordinar la entrega de alimentos en tu domicilio</li>
            <li>Administrar tu cuenta y suscripción, en su caso</li>
            <li>Atender solicitudes, quejas y aclaraciones</li>
            <li>Emitir facturas y comprobantes fiscales</li>
            <li>Dar cumplimiento a obligaciones legales</li>
          </ul>
          <p className="mt-3 mb-2"><strong className="text-ink">Finalidades secundarias (no necesarias):</strong></p>
          <ul className="ml-5 list-disc space-y-1">
            <li>Enviar promociones, novedades y contenido sobre alimentación saludable</li>
            <li>Realizar encuestas de satisfacción y mejora del servicio</li>
            <li>Elaborar estadísticas internas (de forma anonimizada)</li>
          </ul>
          <p className="mt-2">
            Si no deseas que tus datos sean tratados para finalidades secundarias, puedes comunicarlo al correo indicado en la sección de contacto. La negativa no afectará tu relación con Delipks.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">4. Medios de obtención de datos</h2>
          <p>
            Recabamos tus datos personales de forma directa cuando nos los proporcionas a través de: mensajes de WhatsApp, nuestro sitio web, formularios de contacto, correo electrónico o de manera presencial al momento de la entrega.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">5. Transferencia de datos</h2>
          <p>
            Delipks no vende, alquila ni comparte tus datos personales con terceros para fines propios. Únicamente podremos compartir tu información con: servicios de mensajería y entrega para completar tu pedido, autoridades competentes cuando sea requerido por ley, y prestadores de servicios que actúen en nuestro nombre bajo acuerdos de confidencialidad.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">6. Derechos ARCO</h2>
          <p>
            Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos personales (derechos ARCO), así como a revocar tu consentimiento conforme a la LFPDPPP. Para ejercer estos derechos, envía tu solicitud al correo electrónico indicado en la sección de contacto, incluyendo: tu nombre completo, descripción clara de los datos y el derecho que deseas ejercer, y algún documento que acredite tu identidad.
          </p>
          <p className="mt-2">
            Daremos respuesta a tu solicitud en un plazo máximo de 20 días hábiles contados a partir de la recepción de la misma, conforme a lo establecido en la ley.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">7. Uso de cookies y tecnologías de rastreo</h2>
          <p>
            Nuestro sitio web puede utilizar cookies y tecnologías similares con fines analíticos y de mejora de experiencia de navegación. Estas tecnologías no recaban datos personales identificables de forma directa. Puedes deshabilitar las cookies desde la configuración de tu navegador.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">8. Medidas de seguridad</h2>
          <p>
            Delipks implementa medidas de seguridad administrativas, técnicas y físicas para proteger tus datos personales contra daño, pérdida, alteración, destrucción, uso, acceso o tratamiento no autorizado, de conformidad con la LFPDPPP y las disposiciones aplicables.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">9. Cambios al aviso de privacidad</h2>
          <p>
            Delipks se reserva el derecho de modificar el presente aviso de privacidad en cualquier momento. Las modificaciones serán publicadas en esta misma página web. Te recomendamos revisarlo periódicamente.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">10. Contacto</h2>
          <p>
            Para cualquier asunto relacionado con el tratamiento de tus datos personales, puedes contactarnos a través de WhatsApp o al correo electrónico que pondremos a tu disposición. Si consideras que tu derecho a la protección de datos personales ha sido vulnerado, puedes acudir al Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI) — <span className="text-ink">www.inai.org.mx</span>.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">Marco legal</h2>
          <p>
            Este aviso de privacidad se emite en cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), publicada en el Diario Oficial de la Federación el 5 de julio de 2010, su Reglamento y los Lineamientos del Aviso de Privacidad publicados por la Secretaría de Economía.
          </p>
        </section>
      </div>
    </main>
  );
}
