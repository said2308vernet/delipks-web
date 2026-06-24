import { steps } from "@/lib/content";

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
        <div className="absolute left-[12.5%] right-[12.5%] top-5 h-px bg-border" />
        {steps.map((step) => (
          <div key={step.number} className="relative z-10 text-center">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-bg">
              {step.number}
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
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-bg">
                {step.number}
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
