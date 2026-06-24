import { whatsappLink } from "@/lib/content";

const reconoceSteps = [
  {
    number: 1,
    title: "Envía tu credencial",
    description:
      'Manda por WhatsApp una foto de tu credencial en modo "Ver una vez". Tapa tu número de placa o folio — solo necesitamos tu nombre e institución.',
  },
  {
    number: 2,
    title: "Aprobación única",
    description:
      "Verificamos una sola vez y el 15% de descuento queda ligado a tu cuenta para siempre.",
  },
  {
    number: 3,
    title: "Confirma en cada entrega",
    description:
      "En cada pedido, confirmamos que esté a tu nombre. Listo, disfruta tu comida.",
  },
];

export default function DelipksImpacta() {
  return (
    <section id="impacto" className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-14">
      {/* Pilar de marca */}
      <div className="mb-10 text-center">
        <span className="mb-4 inline-block rounded-full bg-secondary-light px-3 py-1.5 text-xs font-medium text-[#3B6D11]">
          Delipks Impacta
        </span>
        <h2 className="mb-2 font-display text-2xl font-semibold text-ink lg:text-3xl">
          Más allá de tu mesa
        </h2>
        <p className="mx-auto max-w-lg text-sm leading-relaxed text-muted">
          Cada plan que compras ayuda a generar bienestar más allá de tu mesa.
        </p>
      </div>

      {/* Programa A — Huellas y Sonrisas */}
      <div className="mb-8 rounded-2xl border border-border bg-white p-7 lg:p-9">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
              Programa de impacto social
            </p>
            <h3 className="mb-3 font-display text-xl font-semibold text-ink lg:text-2xl">
              Huellas y Sonrisas
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-muted">
              Una parte de cada venta se destina a nuestro Fondo de Impacto, que apoya directamente
              a organizaciones aliadas en Puebla y Cholula.
            </p>

            <blockquote className="mb-6 border-l-2 border-primary pl-4">
              <p className="text-[15px] italic leading-relaxed text-ink/80">
                "No es solo comida. Es una cadena de bienestar que empieza contigo."
              </p>
            </blockquote>

            {/* Fases */}
            <div className="space-y-3">
              <div className="rounded-xl bg-bg p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-primary">Hoy</p>
                <p className="text-[13px] leading-relaxed text-muted">
                  Programa recién lanzado: primeras organizaciones aliadas en Puebla — 1 refugio de mascotas
                  y 1 casa hogar.
                </p>
              </div>
              <div className="rounded-xl bg-bg p-4">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-accent">Meta 2029</p>
                <p className="text-[13px] leading-relaxed text-muted">
                  Apoyar a 3+ organizaciones aliadas en Puebla y Cholula, sumando un anexo al programa,
                  con una reserva permanente para emergencias locales.
                </p>
              </div>
            </div>
          </div>

          <div className="flex aspect-[4/3] items-center justify-center rounded-xl bg-bg-alt">
            <span className="text-xs text-muted">Foto — Huellas y Sonrisas</span>
          </div>
        </div>
      </div>

      {/* Programa B — Delipks Reconoce */}
      <div className="rounded-2xl border border-border bg-white p-7 lg:p-9">
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
            Programa de agradecimiento
          </p>
          <h3 className="mb-3 font-display text-xl font-semibold text-ink lg:text-2xl">
            Delipks Reconoce
          </h3>
          <p className="max-w-2xl text-sm leading-relaxed text-muted">
            Un agradecimiento genuino al personal de salud — médicos, enfermeras, paramédicos — y
            emergencias — policías, bomberos, Cruz Roja. <strong className="text-ink">15% de descuento
            permanente</strong> en todos nuestros planes, no acumulable con otras promociones.
          </p>
        </div>

        {/* Pasos de verificación */}
        <div className="grid gap-5 sm:grid-cols-3">
          {reconoceSteps.map((step) => (
            <div key={step.number} className="rounded-xl bg-bg p-5">
              <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-bg">
                {step.number}
              </div>
              <p className="mb-1.5 text-sm font-medium text-ink">{step.title}</p>
              <p className="text-[13px] leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href={whatsappLink("Hola, soy personal de salud/emergencias y quiero activar mi descuento Delipks Reconoce")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-primary-dark"
          >
            Activar mi descuento
          </a>
        </div>
      </div>
    </section>
  );
}
