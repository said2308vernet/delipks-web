const benefits = [
  { bold: "Ingredientes frescos", rest: " y reales, preparados a diario" },
  { bold: "Nutriólogos certificados", rest: " diseñan cada menú" },
  { bold: "Macro-balanceadas", rest: ", altas en proteína" },
  { bold: "Listas en menos de 5 min", rest: " — sin cocinar" },
  { bold: "Porciones controladas", rest: " · 400–1,200 kcal según tu plan" },
  { bold: "Ahorra +7 horas", rest: " a la semana" },
];

const logistics = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-primary">
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
        <rect x="9" y="11" width="14" height="10" rx="1" />
        <circle cx="12" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      </svg>
    ),
    label: "Entregas",
    detail: "Domingo · horario 10am–2pm",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 shrink-0 text-primary">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    label: "Pedidos",
    detail: "Cierre cada viernes 8pm para la semana siguiente",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 shrink-0 text-primary">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347ZM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18a7.96 7.96 0 0 1-4.106-1.138l-.294-.176-2.866.852.852-2.866-.176-.294A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8Z" />
      </svg>
    ),
    label: "Confirmación",
    detail: "Todo se coordina por WhatsApp — simple y directo",
  },
];

export default function WhyDelipks() {
  return (
    <section className="border-y border-border bg-white overflow-hidden">
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[45%_55%]">

        {/* Foto — oculta en móvil, visible en desktop */}
        <div
          data-reveal=""
          className="relative hidden lg:block"
        >
          <img
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900&q=80&auto=format&fit=crop"
            alt="Variedad de verduras y proteínas frescas en contenedores listos para tu semana"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/10" />
        </div>

        {/* Contenido */}
        <div
          data-reveal=""
          style={{ transitionDelay: "100ms" }}
          className="px-6 py-12 lg:px-12 lg:py-16"
        >
          {/* Imagen en móvil */}
          <div className="mb-8 aspect-[16/7] overflow-hidden rounded-xl lg:hidden">
            <img
              src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=900&q=80&auto=format&fit=crop"
              alt="Preparación de comida saludable lista para entregar"
              className="h-full w-full object-cover"
            />
          </div>

          <span className="mb-3 inline-block rounded-full bg-secondary-light px-3 py-1.5 text-xs font-medium text-[#3B6D11]">
            Por qué Delipks
          </span>
          <h2 className="mb-6 font-display text-2xl font-semibold text-ink lg:text-3xl">
            Come bien sin esfuerzo
          </h2>

          {/* Beneficios */}
          <ul className="mb-8 space-y-2.5">
            {benefits.map((b) => (
              <li key={b.bold} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 shrink-0 font-bold text-primary">✓</span>
                <span className="text-muted">
                  <strong className="font-semibold text-ink">{b.bold}</strong>
                  {b.rest}
                </span>
              </li>
            ))}
          </ul>

          {/* Separador */}
          <div className="mb-6 h-px bg-border" />

          {/* Logística condensada */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted">
            Cómo funciona la entrega
          </p>
          <ul className="space-y-3">
            {logistics.map((item) => (
              <li key={item.label} className="flex items-start gap-3">
                {item.icon}
                <span className="text-sm text-muted">
                  <strong className="font-medium text-ink">{item.label}:</strong>{" "}
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
