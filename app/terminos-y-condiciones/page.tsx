import Link from "next/link";

export const metadata = {
  title: "Términos y Condiciones — Delipks",
  description: "Términos y condiciones de uso del servicio Delipks.",
};

export default function TerminosCondiciones() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-14">
      <div className="mb-4">
        <Link href="/" className="text-[13px] text-muted transition-opacity hover:opacity-70">
          ← Volver al inicio
        </Link>
      </div>

      <h1 className="mb-2 font-display text-3xl font-semibold text-ink lg:text-4xl">
        Términos y Condiciones
      </h1>
      <p className="mb-8 text-xs text-muted">Última actualización: 24 de junio de 2026</p>

      <div className="space-y-6 text-[15px] leading-relaxed text-muted">
        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">1. Aceptación de los términos</h2>
          <p>
            Al utilizar el sitio web de Delipks, realizar un pedido o contratar cualquiera de nuestros servicios, aceptas los presentes Términos y Condiciones en su totalidad. Si no estás de acuerdo con alguno de ellos, te pedimos no utilizar nuestros servicios. Estos términos se rigen por la legislación vigente en los Estados Unidos Mexicanos, en particular la Ley Federal de Protección al Consumidor y el Código de Comercio.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">2. Descripción del servicio</h2>
          <p>
            Delipks, operado por Antonio Said Ramírez Vernet (RFC: RAVA890825350), es un servicio de preparación y entrega de alimentos saludables (&quot;meal prep&quot;) que opera en Puebla y Cholula, México. Ofrecemos planes semanales de alimentación que incluyen desayunos, comidas y/o cenas, según el plan seleccionado, entregados directamente en el domicilio del cliente.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">3. Requisitos para contratar</h2>
          <ul className="ml-5 list-disc space-y-1">
            <li>Ser mayor de 18 años o contar con autorización de un tutor legal</li>
            <li>Proporcionar datos verídicos y actualizados para la entrega</li>
            <li>Contar con un domicilio de entrega dentro de nuestras zonas de cobertura (Puebla y Cholula)</li>
            <li>Contar con un número de WhatsApp activo para la comunicación del pedido</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">4. Pedidos y confirmación</h2>
          <p>
            Los pedidos se realizan a través de nuestro sitio web y se confirman vía WhatsApp. Un pedido se considera confirmado únicamente cuando Delipks envía una confirmación explícita por WhatsApp y se ha recibido el pago correspondiente. Delipks se reserva el derecho de rechazar o cancelar pedidos en caso de información incorrecta, falta de disponibilidad o circunstancias fuera de nuestro control.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">5. Precios y formas de pago</h2>
          <p>
            Los precios publicados en el sitio web son de referencia y están expresados en pesos mexicanos (MXN). Los precios definitivos son los confirmados al momento de la compra vía WhatsApp. Los precios incluyen IVA cuando aplique. Delipks se reserva el derecho de modificar precios sin previo aviso; los cambios no afectarán pedidos ya confirmados y pagados. Las formas de pago aceptadas serán comunicadas al momento de la confirmación del pedido.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">6. Suscripciones</h2>
          <p>
            Los planes de suscripción se renuevan semanalmente de forma automática hasta que el cliente solicite su cancelación. Para cancelar o pausar una suscripción, el cliente debe notificarlo por WhatsApp con al menos 48 horas de anticipación a la fecha de preparación del siguiente pedido. No se generarán cargos por cancelación. Los pagos realizados por semanas ya preparadas o en proceso de preparación no son reembolsables.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">7. Entregas</h2>
          <p>
            Las entregas se realizan en los días y horarios acordados al momento de la confirmación del pedido, dentro de las zonas de cobertura establecidas (Puebla y Cholula). El cliente es responsable de proporcionar una dirección correcta y estar disponible para recibir el pedido en el horario acordado. Si el cliente no se encuentra disponible, Delipks intentará contactarlo vía WhatsApp. Delipks no se hace responsable por retrasos ocasionados por causas de fuerza mayor (clima, tráfico, contingencias).
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">8. Alergias y restricciones alimentarias</h2>
          <p>
            Es responsabilidad del cliente informar a Delipks sobre cualquier alergia, intolerancia o restricción alimentaria antes de confirmar su pedido. Delipks hará su mejor esfuerzo por atender estas necesidades, pero no puede garantizar la ausencia total de trazas de alérgenos dado que nuestros alimentos se preparan en una cocina compartida. Al confirmar tu pedido, aceptas esta condición.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">9. Calidad y manejo de alimentos</h2>
          <p>
            Delipks se compromete a preparar alimentos frescos, con ingredientes de calidad y bajo estándares de higiene. Nuestros procesos buscan cumplir con las disposiciones aplicables de la Norma Oficial Mexicana NOM-251-SSA1-2009 en materia de prácticas de higiene para el proceso de alimentos. Una vez entregados, la correcta conservación de los alimentos es responsabilidad del cliente. Se recomienda refrigerar inmediatamente y consumir dentro del periodo indicado en el empaque.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">10. Programa Delipks Reconoce</h2>
          <p>
            El descuento del 15% para personal de emergencias, policías, bomberos, militares y personal de la salud está sujeto a verificación de credencial. El descuento es permanente una vez aprobado, no acumulable con otras promociones y aplica únicamente a pedidos a nombre del titular verificado. Delipks se reserva el derecho de solicitar verificación adicional y de suspender el beneficio en caso de uso indebido.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">11. Propiedad intelectual</h2>
          <p>
            Todo el contenido del sitio web de Delipks — incluyendo textos, imágenes, logotipos, diseño, código y marca — es propiedad de Delipks o se utiliza con autorización. Queda prohibida su reproducción, distribución o uso comercial sin autorización previa por escrito, conforme a la Ley Federal del Derecho de Autor y la Ley de la Propiedad Industrial vigentes en México.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">12. Limitación de responsabilidad</h2>
          <p>
            Delipks no será responsable por daños indirectos, incidentales o consecuentes derivados del uso de nuestros servicios. Nuestra responsabilidad máxima se limita al monto pagado por el pedido o servicio en cuestión. Esta limitación no aplica en casos donde la ley mexicana prohíba expresamente dicha limitación.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">13. Cancelaciones y reembolsos</h2>
          <p>
            Las cancelaciones de pedidos puntuales deben solicitarse por WhatsApp antes de que inicie la preparación del pedido. Una vez iniciada la preparación, no se aceptan cancelaciones ni reembolsos. En caso de que el producto entregado presente un defecto de calidad comprobable, Delipks ofrecerá la reposición del producto o un crédito equivalente, a su elección. Las reclamaciones deben realizarse dentro de las 12 horas posteriores a la entrega, acompañadas de evidencia fotográfica.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">14. Modificaciones</h2>
          <p>
            Delipks se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Las modificaciones entrarán en vigor al ser publicadas en esta página. El uso continuado del servicio después de la publicación de cambios constituye la aceptación de los mismos.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">15. Legislación aplicable y jurisdicción</h2>
          <p>
            Los presentes Términos y Condiciones se rigen por las leyes vigentes en los Estados Unidos Mexicanos. Para la resolución de cualquier controversia derivada de estos términos, las partes se someten a la jurisdicción de los tribunales competentes de la ciudad de Puebla, Puebla, renunciando a cualquier otro fuero que pudiera corresponderles por razón de domicilio presente o futuro.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">16. Contacto</h2>
          <p>
            Para cualquier duda, queja o aclaración sobre estos términos, contáctanos por WhatsApp o al correo <span className="text-ink">hola@delipks.com</span>. Conforme a la Ley Federal de Protección al Consumidor, también puedes acudir a la Procuraduría Federal del Consumidor (PROFECO) — <span className="text-ink">www.gob.mx/profeco</span>.
          </p>
        </section>
      </div>
    </main>
  );
}
