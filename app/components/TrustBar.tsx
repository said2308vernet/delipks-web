import { trustItems } from "@/lib/content";

const icons: Record<string, React.ReactNode> = {
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 5 20 3c0 8.5-2.5 12.7-8 14a4.5 4.5 0 0 1-1 3Z" />
      <path d="M2 21c0-9 4-13 8-15" />
    </svg>
  ),
  stethoscope: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
      <path d="M4.5 3v6a4.5 4.5 0 0 0 9 0V3" />
      <path d="M9 9v8a4 4 0 0 0 8 0v-2" />
      <circle cx="19" cy="13" r="2" />
      <path d="M4.5 3h-2M11.5 3h2" />
    </svg>
  ),
  box: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
      <path d="M21 8 12 3 3 8l9 5 9-5Z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </svg>
  ),
  pin: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5">
      <path d="M12 21s7-7.2 7-12a7 7 0 1 0-14 0c0 4.8 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  ),
};

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-white py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        {trustItems.map((item) => (
          <div key={item.title} className="flex items-start gap-3.5">
            <span className="mt-0.5 shrink-0 text-primary">{icons[item.icon]}</span>
            <div>
              <p className="text-sm font-medium text-ink">{item.title}</p>
              <p className="mt-0.5 text-[13px] leading-snug text-muted">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
