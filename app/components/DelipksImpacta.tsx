import { whatsappLink } from "@/lib/content";

export default function DelipksImpacta() {
  return (
    <section id="impacto" className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-14">
      {/* Pilar de marca */}
      <div className="mb-10 text-center">
        <span className="mb-4 inline-block rounded-full bg-secondary-light px-3 py-1.5 text-xs font-medium text-[#3B6D11]">
          Delipks Impacta
        </span>
        <h2 className="font-display text-2xl font-semibold text-ink lg:text-3xl">
          Delipks Impacta
        </h2>
      </div>

      {/* Programa A — Huellas y Sonrisas */}
      <div className="mb-8 rounded-2xl border border-border bg-white p-7 lg:p-9">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
            Programa de impacto social
          </p>
          <h3 className="mb-3 font-display text-xl font-semibold text-ink lg:text-2xl">
            Huellas y Sonrisas
          </h3>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted">
            No solo compras comida. También ayudas a generar bienestar.
            Una parte de cada venta se destina a nuestro Fondo de Impacto.
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <blockquote className="mb-6 border-l-2 border-primary pl-4">
              <p className="text-[15px] italic leading-relaxed text-ink/80">
                "No es solo comida. Es una cadena de bienestar que empieza contigo."
              </p>
            </blockquote>

            <p className="mb-4 text-sm font-medium text-ink">
              El apoyo es fijo, pero cada mes decidimos dónde generar el mayor impacto:
            </p>
            <ul className="space-y-2.5">
              {[
                { icon: "👧", label: "Niños" },
                { icon: "🧓", label: "Adultos mayores" },
                { icon: "🐾", label: "Refugios de animales" },
                { icon: "🍎", label: "Bancos de alimentos" },
                { icon: "🤝", label: "Comunidades vulnerables" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary-light text-base">
                    {item.icon}
                  </span>
                  <span className="text-sm text-muted">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-bg-alt">
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80&auto=format&fit=crop"
              alt="Niños sonriendo junto a un perro"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Programa B — Delipks Reconoce */}
      <div className="rounded-2xl border border-border bg-white p-7 lg:p-9">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
            Programa de agradecimiento
          </p>
          <h3 className="mb-3 font-display text-xl font-semibold text-ink lg:text-2xl">
            Delipks Reconoce
          </h3>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted">
            Un agradecimiento genuino a quienes cuidan de nosotros todos los días.{" "}
            <strong className="text-ink">15% de descuento permanente</strong> en todos nuestros
            planes para personal de servicios de emergencia, policías, bomberos, militares
            y personal de la salud. No acumulable con otras promociones.
          </p>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="aspect-[4/3] overflow-hidden rounded-xl bg-bg-alt">
            <img
              src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800&q=80&auto=format&fit=crop"
              alt="Equipo de rescatistas y bomberos en acción"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="text-center lg:text-left">
            <blockquote className="mb-6 border-l-2 border-primary pl-4 text-left">
              <p className="text-[15px] italic leading-relaxed text-ink/80">
                "Ustedes cuidan de todos. Nosotros queremos cuidar de ustedes."
              </p>
            </blockquote>

            <a
              href={whatsappLink("Hola, soy profesional de salud/emergencias y quiero activar mi descuento Delipks Reconoce")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-primary-dark"
            >
              Activar mi descuento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
