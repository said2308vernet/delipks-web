const values = [
  { label: "Salud", icon: "🌿" },
  { label: "Compromiso", icon: "🤝" },
  { label: "Honestidad", icon: "💬" },
  { label: "Calidad", icon: "⭐" },
  { label: "Organización", icon: "📦" },
  { label: "Cercanía", icon: "💚" },
  { label: "Innovación", icon: "✨" },
];

export default function AboutUs() {
  return (
    <section id="nosotros" className="bg-[#F0FAF3]">
      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">

          <div>
            <span className="mb-5 inline-block rounded-full bg-secondary-light px-3 py-1.5 text-xs font-medium text-[#3B6D11]">
              Nuestra historia
            </span>
            <h2 className="mb-5 font-display text-2xl font-semibold leading-snug text-ink lg:text-3xl">
              Nacimos para resolver un problema real
            </h2>
            <p className="mb-5 text-[15px] leading-relaxed text-muted">
              Delipks nació de una observación simple pero poderosa: millones de personas quieren
              comer bien, pero no tienen tiempo para planificarlo, comprarlo ni prepararlo. El ritmo
              de vida moderno convirtió la alimentación en una fuente de estrés diario.
            </p>
            <p className="mb-5 text-[15px] leading-relaxed text-muted">
              La idea evolucionó de entregar comida preparada a construir un sistema completo de
              alimentación semanal: organizado, etiquetado por día, entregado dos veces a la semana
              y listo para consumir. Delipks no resuelve solo el hambre del momento — resuelve la
              semana completa.
            </p>
            <div className="rounded-xl border-l-4 border-primary bg-white py-4 pl-5 pr-6">
              <p className="mb-1 text-[13px] font-semibold uppercase tracking-wide text-primary">
                Nuestra misión
              </p>
              <p className="text-sm leading-relaxed text-ink">
                "Hacer que comer bien sea fácil. Entregamos planes completos de alimentación
                semanales — listos para consumir, organizados por día — para que dediques tu
                tiempo a lo que realmente importa."
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-7">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted">Visión</p>
              <p className="text-[15px] leading-relaxed text-ink">
                Ser la empresa líder de alimentación por suscripción en México, reconocida por
                transformar la relación de las personas con su alimentación diaria.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-muted">
                Nuestros valores
              </p>
              <div className="flex flex-wrap gap-2">
                {values.map((v) => (
                  <span
                    key={v.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-3.5 py-1.5 text-[13px] font-medium text-ink"
                  >
                    <span>{v.icon}</span>
                    {v.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-primary p-7">
              <p className="mb-2 text-sm font-semibold text-white/90">Promesa de marca</p>
              <p className="text-base font-medium leading-relaxed text-white">
                "Delipks resuelve tu alimentación semanal para que puedas vivir sin esa
                preocupación."
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
