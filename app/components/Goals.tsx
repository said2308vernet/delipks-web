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

const allGoals = [
  {
    icon: "leaf" as const,
    title: goals.featured.title,
    description: goals.featured.description,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&auto=format&fit=crop",
  },
  {
    icon: "briefcase" as const,
    title: goals.supporting[0].title,
    description: goals.supporting[0].description,
    image: "https://images.unsplash.com/photo-1556911073-52527ac43761?w=600&q=80&auto=format&fit=crop",
  },
  {
    icon: "barbell" as const,
    title: goals.supporting[1].title,
    description: goals.supporting[1].description,
    image: "https://images.unsplash.com/photo-1729280924877-4750c0dba51e?w=600&q=80&auto=format&fit=crop",
  },
];

export default function Goals() {
  return (
    <section id="objetivos" className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-14">
      <div className="mb-10 text-center">
        <span className="mb-4 inline-block rounded-full bg-secondary-light px-3 py-1.5 text-xs font-medium text-[#3B6D11]">
          Objetivos
        </span>
        <h2 className="mb-2 font-display text-2xl font-semibold text-ink lg:text-3xl">
          Come bien, sin importar tu objetivo
        </h2>
        <p className="text-sm text-muted">Empezamos por lo más importante: tu salud</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {allGoals.map((goal) => (
          <div key={goal.title} className="overflow-hidden rounded-2xl border border-border bg-white">
            <div className="aspect-[4/3] overflow-hidden bg-bg-alt">
              <img
                src={goal.image}
                alt={goal.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="mb-3 block text-primary">{icons[goal.icon]}</span>
              <h3 className="mb-2 font-display text-base font-semibold text-ink">{goal.title}</h3>
              <p className="mb-4 text-[13.5px] leading-relaxed text-muted">{goal.description}</p>
              <a
                href="#planes"
                className="inline-block rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-primary-dark"
              >
                Ver planes
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
