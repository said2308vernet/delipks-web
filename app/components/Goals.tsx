import { goals } from "@/lib/content";

const icons: Record<string, React.ReactNode> = {
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-6 w-6">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 5 20 3c0 8.5-2.5 12.7-8 14a4.5 4.5 0 0 1-1 3Z" />
      <path d="M2 21c0-9 4-13 8-15" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  barbell: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
      <path d="M6 7v10M3 9v6M21 9v6M18 7v10" />
      <path d="M6 12h12" />
    </svg>
  ),
};

export default function Goals() {
  return (
    <section id="objetivos" className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
      <div className="mb-10 text-center">
        <span className="mb-4 inline-block rounded-full bg-secondary-light px-3 py-1.5 text-xs font-medium text-[#3B6D11]">
          Objetivos
        </span>
        <h2 className="mb-2 font-display text-2xl font-semibold text-ink lg:text-3xl">
          Come bien, sin importar tu objetivo
        </h2>
        <p className="text-sm text-muted">Empezamos por lo más importante: tu salud</p>
      </div>

      {/* Categoría protagonista */}
      <div className="mb-5 grid items-center gap-8 rounded-2xl border border-border bg-white p-7 lg:grid-cols-[0.9fr_1fr] lg:p-9">
        <div className="flex aspect-[16/10] items-center justify-center rounded-xl bg-secondary-light">
          <span className="text-xs text-[#3B6D11]">Foto placeholder</span>
        </div>
        <div>
          <span className="mb-3.5 block text-primary">{icons.leaf}</span>
          <h3 className="mb-2.5 font-display text-xl font-semibold text-ink lg:text-2xl">
            {goals.featured.title}
          </h3>
          <p className="mb-5 max-w-md text-sm leading-relaxed text-muted">
            {goals.featured.description}
          </p>
          <a
            href="#planes"
            className="inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-primary-dark"
          >
            Ver planes
          </a>
        </div>
      </div>

      {/* Categorías de soporte */}
      <div className="grid gap-5 sm:grid-cols-2">
        {goals.supporting.map((goal) => (
          <div key={goal.title} className="rounded-2xl border border-border bg-white p-6">
            <span className="mb-3.5 block text-muted">{icons[goal.icon]}</span>
            <h3 className="mb-2 text-base font-semibold text-ink">{goal.title}</h3>
            <p className="mb-4 text-[13.5px] leading-relaxed text-muted">{goal.description}</p>
            <a
              href="#planes"
              className="border-b border-ink pb-0.5 text-[13px] font-medium text-ink transition-opacity hover:opacity-70"
            >
              Ver planes →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
