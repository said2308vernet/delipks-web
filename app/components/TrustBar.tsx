const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 5 20 3c0 8.5-2.5 12.7-8 14a4.5 4.5 0 0 1-1 3Z" />
        <path d="M2 21c0-9 4-13 8-15" />
      </svg>
    ),
    text: (
      <>Hechas con <strong className="text-primary font-semibold">ingredientes frescos</strong> y reales</>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <circle cx="12" cy="8" r="4" />
        <path d="M6 20v-1a6 6 0 0 1 12 0v1" />
        <path d="M15 8h4M17 6v4" />
      </svg>
    ),
    text: (
      <>Aprobadas por <strong className="text-primary font-semibold">nutriólogos</strong> certificados</>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M6 7v10M3 9v6M21 9v6M18 7v10" />
        <path d="M6 12h12" />
      </svg>
    ),
    text: (
      <>Macro-balanceadas, <strong className="text-primary font-semibold">altas en proteína</strong></>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M7 7V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2" />
        <path d="M12 12v3M10 14h4" />
      </svg>
    ),
    text: (
      <>Listas en <strong className="text-primary font-semibold">menos de 5 minutos</strong></>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2Z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    text: (
      <>Porciones controladas <strong className="text-primary font-semibold">400–1,200 kcal</strong> según tu plan</>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
        <path d="M12 22V12" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
        <path d="M8 6a4 4 0 0 1 8 0v6H8z" />
      </svg>
    ),
    text: (
      <>Ahorra más de <strong className="text-primary font-semibold">7 horas</strong> a la semana</>
    ),
  },
];

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-[#F8FDF9] py-12 lg:py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="mb-10 text-center text-xs font-semibold uppercase tracking-widest text-muted">
          Te ayudamos a comer mejor sin esfuerzo
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              data-reveal=""
              style={{ transitionDelay: `${i * 80}ms` }}
              className="flex items-center gap-4"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm ring-1 ring-border transition-transform duration-300 hover:scale-110">
                {benefit.icon}
              </span>
              <p className="text-[14px] leading-snug text-ink">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
