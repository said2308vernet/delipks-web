import Link from "next/link";

export const metadata = {
  title: "Políticas de Servicio — Delipks",
  description: "Políticas de servicio de Delipks: entregas, conservación, suscripciones y más.",
};

export default function PoliticasServicio() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-14">
      <div className="mb-4">
        <Link href="/" className="text-[13px] text-muted transition-opacity hover:opacity-70">
          ← Volver al inicio
        </Link>
      </div>

      <h1 className="mb-2 font-display text-3xl font-semibold text-ink lg:text-4xl">
        Políticas de Servicio
      </h1>
      <p className="mb-8 text-xs text-muted">Última actualización: 24 de junio de 2026</p>

      <div className="space-y-6 text-[15px] leading-relaxed text-muted">
        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">1. Zonas de cobertura</h2>
          <p>
            Delipks, operado por Antonio Said Ramírez Vernet (RFC: RAVA890825350), con correo de contacto <span className="text-ink">hola@delipks.com</span>, actualmente realiza entregas en las zonas metropolitanas de Puebla y Cholula, estado de Puebla, México. Las zonas de cobertura pueden ampliarse o modificarse. Al momento de confirmar tu pedido por WhatsApp, validaremos que tu dirección se encuentre dentro de nuestra área de servicio. Si tu domicilio queda fuera de cobertura, te lo informaremos antes de procesar cualquier cobro.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">2. Horarios de entrega</h2>
          <p>
            Las entregas se programan de lunes a viernes en horarios acordados con el cliente al momento de la confirmación del pedido. Los horarios específicos dependen de la zona y la logística del día. En caso de que Delipks no pueda cumplir con el horario pactado, te notificaremos por WhatsApp con la mayor anticipación posible para reagendar.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">3. Recepción del pedido</h2>
          <p>
            El cliente o una persona autorizada debe estar presente para recibir el pedido en la dirección proporcionada. Si al momento de la entrega no hay nadie disponible, el repartidor intentará comunicarse por WhatsApp y esperará un máximo de 10 minutos. En caso de no lograr contacto, el pedido se considerará como entregado si se deja en un lugar seguro acordado previamente, o como no entregado sin derecho a reembolso si no existe un acuerdo previo.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">4. Conservación de alimentos</h2>
          <p>
            Los alimentos preparados por Delipks deben refrigerarse inmediatamente después de recibirlos a una temperatura de entre 2°C y 4°C, conforme a las recomendaciones de manejo seguro de alimentos. La vida útil aproximada de cada platillo se indica en el empaque. Delipks no se hace responsable por la calidad del producto si no se respetan las condiciones de almacenamiento indicadas. Para recalentar, sigue las instrucciones incluidas en cada empaque.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">5. Planes y suscripciones</h2>
          <p className="mb-2"><strong className="text-ink">Planes disponibles:</strong></p>
          <ul className="ml-5 list-disc space-y-1">
            <li><strong className="text-ink">Plan Básico:</strong> 5 comidas de lunes a viernes</li>
            <li><strong className="text-ink">Plan Equilibrado:</strong> 5 desayunos + 5 comidas de lunes a viernes</li>
            <li><strong className="text-ink">Plan Completo:</strong> 5 desayunos + 5 comidas + 5 cenas de lunes a viernes</li>
          </ul>
          <p className="mt-3">
            Los planes pueden contratarse como compra puntual (una sola semana) o como suscripción semanal recurrente con descuento. Los menús pueden variar cada semana según disponibilidad de ingredientes y temporada.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">6. Cancelación de suscripción</h2>
          <p>
            Puedes cancelar o pausar tu suscripción en cualquier momento, sin penalización, notificándolo por WhatsApp con un mínimo de 48 horas de anticipación a la fecha de preparación del siguiente pedido. Si la notificación se recibe después de este plazo y el pedido ya se encuentra en preparación, el cobro de esa semana no será reembolsable. Al cancelar, tu suscripción se desactiva al finalizar la semana pagada.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">7. Cambios en el pedido</h2>
          <p>
            Los cambios en la selección de platillos, dirección de entrega o cantidad de comidas deben solicitarse por WhatsApp con al menos 48 horas de anticipación a la fecha de preparación. Cambios solicitados fuera de este plazo estarán sujetos a disponibilidad y no se garantiza que puedan procesarse.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">8. Reclamaciones por calidad</h2>
          <p>
            Si recibes un producto que no cumple con los estándares de calidad esperados (alimento en mal estado, empaque dañado, platillo incorrecto), debes reportarlo por WhatsApp dentro de las 12 horas posteriores a la entrega, incluyendo fotografías del producto. Delipks evaluará cada caso y ofrecerá, a su criterio, la reposición del platillo afectado o un crédito equivalente para tu siguiente pedido. Las reclamaciones reportadas fuera del plazo indicado no serán procedentes.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">9. Política de reembolsos</h2>
          <p>
            Los reembolsos aplican únicamente en los siguientes casos: cancelación del pedido antes del inicio de preparación, cobro duplicado o error comprobable por parte de Delipks, o producto con defecto de calidad comprobado dentro del plazo de reclamación. Los reembolsos se procesarán por el mismo medio de pago utilizado en un plazo máximo de 10 días hábiles. No aplican reembolsos por cambio de opinión una vez iniciada la preparación del pedido.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">10. Programa Delipks Reconoce</h2>
          <p className="mb-2">
            El programa Delipks Reconoce otorga un 15% de descuento permanente a personal de servicios de emergencia, policías, bomberos, militares y personal de la salud, sujeto a las siguientes condiciones:
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>El beneficiario debe verificar su identidad profesional enviando una fotografía de su credencial vigente por WhatsApp</li>
            <li>La verificación se realiza una sola vez; el descuento queda vinculado a la cuenta del titular</li>
            <li>El descuento aplica únicamente a pedidos realizados a nombre del titular verificado</li>
            <li>No es acumulable con otras promociones, descuentos o programas</li>
            <li>Delipks se reserva el derecho de suspender el beneficio en caso de uso fraudulento</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">11. Programa Huellas y Sonrisas</h2>
          <p>
            Una parte fija de cada venta se destina al Fondo de Impacto &quot;Huellas y Sonrisas&quot;, que apoya a organizaciones aliadas enfocadas en niños, adultos mayores, refugios de animales, bancos de alimentos y comunidades vulnerables. El destino del fondo se determina mensualmente por Delipks. Este programa no genera obligación contractual con el cliente ni constituye una donación deducible de impuestos.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">12. Fuerza mayor</h2>
          <p>
            Delipks no será responsable por incumplimientos derivados de causas de fuerza mayor o caso fortuito, incluyendo pero no limitado a: desastres naturales, contingencias sanitarias, interrupciones en el suministro de insumos, bloqueos viales o cualquier circunstancia ajena al control razonable de la empresa. En estos casos, Delipks informará oportunamente al cliente y buscará alternativas para cumplir con el servicio o, en su defecto, ofrecerá un reembolso o crédito.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">13. Comunicación</h2>
          <p>
            El canal principal de comunicación entre Delipks y sus clientes es WhatsApp. Las notificaciones sobre pedidos, entregas, cambios en el servicio y atención al cliente se gestionan por este medio. Es responsabilidad del cliente mantener su número de WhatsApp activo y revisar los mensajes relacionados con su pedido.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">14. Normatividad aplicable</h2>
          <p>
            Las presentes políticas se emiten conforme a la legislación vigente en México, incluyendo: la Ley Federal de Protección al Consumidor, la Ley General de Salud, la NOM-251-SSA1-2009 (Prácticas de higiene para el proceso de alimentos, bebidas o suplementos alimenticios), y demás disposiciones sanitarias aplicables a la preparación y distribución de alimentos.
          </p>
        </section>

        <section>
          <h2 className="mb-2 font-display text-lg font-semibold text-ink">15. Contacto y quejas</h2>
          <p>
            Para dudas, quejas o sugerencias sobre nuestro servicio, contáctanos por WhatsApp o al correo <span className="text-ink">hola@delipks.com</span>. Tu opinión nos ayuda a mejorar. Si no logramos resolver tu queja de forma satisfactoria, puedes acudir a la Procuraduría Federal del Consumidor (PROFECO) al teléfono 55 5568 8722 o en <span className="text-ink">www.gob.mx/profeco</span>.
          </p>
        </section>
      </div>
    </main>
  );
}
