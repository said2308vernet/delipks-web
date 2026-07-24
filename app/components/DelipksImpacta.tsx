import Link from "next/link";
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

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Programa A — Huellas y Sonrisas */}
        <div className="flex flex-col rounded-2xl border border-border bg-white p-6 lg:p-7">
          <div className="mb-5 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
              Programa de impacto social
            </p>
            <h3 className="mb-2 font-display text-xl font-semibold text-ink">
              Huellas y Sonrisas
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              No solo compras comida. También ayudas a generar bienestar. Una parte de cada
              venta se destina a nuestro Fondo de Impacto.
            </p>
          </div>

          <div className="mb-5 aspect-[16/10] overflow-hidden rounded-xl bg-bg-alt">
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80&auto=format&fit=crop"
              alt="Niños sonriendo junto a un perro"
              loading="lazy" className="h-full w-full object-cover"
            />
          </div>

          <p className="mb-5 text-center font-display text-lg font-bold italic leading-snug text-ink">
            "No es solo comida. Es una cadena de bienestar que empieza contigo."
          </p>

          <p className="mb-3 text-center text-sm font-medium text-ink">
            El apoyo es fijo, pero cada mes decidimos dónde generar el mayor impacto:
          </p>
          <div className="mb-6 flex flex-wrap justify-center gap-2">
            {[
              { icon: "👧", label: "Niños" },
              { icon: "🧓", label: "Adultos mayores" },
              { icon: "🐾", label: "Refugios de animales" },
              { icon: "🍎", label: "Bancos de alimentos" },
              { icon: "🤝", label: "Comunidades vulnerables" },
            ].map((item) => (
              <span
                key={item.label}
                className="flex items-center gap-1.5 rounded-full bg-secondary-light px-3 py-1.5 text-xs text-[#3B6D11]"
              >
                <span>{item.icon}</span>
                {item.label}
              </span>
            ))}
          </div>

          <Link
            href="/impacto"
            className="mt-auto inline-block rounded-lg bg-primary px-6 py-3 text-center text-sm font-medium text-bg transition-colors hover:bg-primary-dark"
          >
            Historias de impacto
          </Link>
        </div>

        {/* Programa B — Delipks Reconoce */}
        <div className="flex flex-col rounded-2xl border border-border bg-white p-6 lg:p-7">
          <div className="mb-5 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
              Programa de agradecimiento
            </p>
            <h3 className="mb-2 font-display text-xl font-semibold text-ink">
              Delipks Reconoce
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              A quienes cuidan de nosotros todos los días, nosotros también queremos cuidarlos.
              Si eres <strong className="text-ink">personal de servicios de emergencia, policía,
              bombero, militar o personal de la salud</strong>, tienes un lugar permanente en
              Delipks Reconoce <strong className="text-ink">(15% menos en todos los planes, de
              por vida)</strong>. No acumulable con otras promociones.
            </p>
          </div>

          <div className="mb-5 aspect-[16/10] overflow-hidden rounded-xl bg-bg-alt">
            <img
              src="https://images.unsplash.com/photo-1552828488-282e3da17019?w=800&q=80&auto=format&fit=crop"
              alt="Bomberos combatiendo un incendio en equipo"
              loading="lazy" className="h-full w-full object-cover"
            />
          </div>

          <p className="mb-6 text-center font-display text-lg font-bold italic leading-snug text-ink">
            "Ustedes cuidan de todos. Nosotros queremos cuidar de ustedes."
          </p>

          <a
            href={whatsappLink("Hola, soy profesional de salud/emergencias y quiero solicitar mi lugar en Delipks Reconoce")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block rounded-lg bg-primary px-6 py-3 text-center text-sm font-medium text-bg transition-colors hover:bg-primary-dark"
          >
            Solicitar mi reconocimiento
          </a>
        </div>
      </div>
    </section>
  );
}
