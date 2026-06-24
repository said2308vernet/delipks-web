import { steps } from "@/lib/content";

const stepIcons: Record<number, React.ReactNode> = {
  1: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
      <rect x="9" y="3" width="6" height="4" rx="1" />
      <path d="M9 12h6M9 16h4" />
    </svg>
  ),
  2: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
      <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18a7.96 7.96 0 0 1-4.106-1.138l-.294-.176-2.866.852.852-2.866-.176-.294A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8Z" />
    </svg>
  ),
  3: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" />
      <path d="M3 12h18" />
      <path d="M7.5 7.5c0-1.5.5-3 2-3s1.5 2 3 2 1.5-2.5 3-2.5 2 1.5 2 3" />
    </svg>
  ),
  4: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a4 4 0 0 0-8 0v2" />
      <path d="M12 12v3" />
      <circle cx="12" cy="16" r="1" />
    </svg>
  ),
};

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
      <div className="mb-12 text-center">
        <span className="mb-4 inline-block rounded-full bg-secondary-light px-3 py-1.5 text-xs font-medium text-[#3B6D11]">
          Proceso
        </span>
        <h2 className="font-display text-2xl font-semibold text-ink lg:text-3xl">
          Cómo funciona
        </h2>
      </div>

      {/* Desktop: stepper horizontal con línea conectora */}
      <div className="relative hidden grid-cols-4 gap-6 lg:grid">
        <div className="absolute left-[12.5%] right-[12.5%] top-7 h-px bg-border" />
        {steps.map((step) => (
          <div key={step.number} className="relative z-10 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-bg shadow-md">
              {stepIcons[step.number]}
            </div>
            <p className="mb-1.5 text-[15px] font-medium text-ink">{step.title}</p>
            <p className="text-[13px] leading-relaxed text-muted">{step.description}</p>
          </div>
        ))}
      </div>

      {/* Mobile: stepper vertical con línea conectora */}
      <div className="flex flex-col lg:hidden">
        {steps.map((step, i) => (
          <div key={step.number} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-bg shadow-md">
                {stepIcons[step.number]}
              </div>
              {i < steps.length - 1 && <div className="mt-1 w-px flex-1 bg-border" />}
            </div>
            <div className={i < steps.length - 1 ? "pb-6" : ""}>
              <p className="mb-1 text-sm font-medium text-ink">{step.title}</p>
              <p className="text-[13px] leading-relaxed text-muted">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
