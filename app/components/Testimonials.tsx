export default function Testimonials() {
  return (
    <section id="testimonios" className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-14">
      <div className="mb-9 text-center">
        <span className="mb-4 inline-block rounded-full bg-secondary-light px-3 py-1.5 text-xs font-medium text-[#3B6D11]">
          Testimonios
        </span>
        <h2 className="mb-2 font-display text-2xl font-semibold text-ink lg:text-3xl">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-sm text-muted">Historias reales de personas que ya resolvieron su semana</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex flex-col gap-4 rounded-2xl border border-dashed border-border bg-bg-alt p-7"
          >
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map((s) => (
                <svg key={s} viewBox="0 0 24 24" fill="#D1D5DB" className="h-4 w-4">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              ))}
            </div>
            <div className="space-y-2">
              <div className="h-3.5 w-full rounded-full bg-border" />
              <div className="h-3.5 w-4/5 rounded-full bg-border" />
              <div className="h-3.5 w-2/3 rounded-full bg-border" />
            </div>
            <div className="mt-auto flex items-center gap-3 pt-2">
              <div className="h-10 w-10 shrink-0 rounded-full bg-border" />
              <div className="space-y-1.5">
                <div className="h-3 w-24 rounded-full bg-border" />
                <div className="h-3 w-16 rounded-full bg-border/60" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
