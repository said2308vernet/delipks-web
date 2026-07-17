const truckIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" />
    <rect x="9" y="11" width="14" height="10" rx="1" />
    <circle cx="12" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
  </svg>
);

const calendarIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4M8 2v4M3 10h18" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
  </svg>
);

const checkIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export default function DeliverySystem() {
  return (
    <section className="bg-[#F0FAF3] border-y border-[#d4edda]">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:px-10 lg:py-16">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block rounded-full bg-white px-3 py-1.5 text-xs font-medium text-[#3B6D11] ring-1 ring-[#c3e6cb]">
            El sistema
          </span>
          <h2 className="font-display text-2xl font-semibold text-ink lg:text-3xl">
            Cómo funciona la entrega
          </h2>
          <p className="mt-2 text-sm text-muted">Todo organizado para que nunca te quedes sin comida</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-[#c8e6c9]">
          {/* Entregas */}
          <div
            data-reveal=""
            style={{ transitionDelay: "0ms" }}
            className="flex flex-col gap-5 lg:pr-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-bg shadow-sm">
              {truckIcon}
            </div>
            <h3 className="font-display text-lg font-semibold text-ink">Entregas</h3>
            <div className="space-y-3 text-sm">
              <p className="text-muted">
                Operamos con{" "}
                <span className="font-semibold text-primary">2 días fijos de entrega</span>:{" "}
                <span className="font-semibold text-primary">domingo y miércoles</span>.
              </p>
              <p className="text-muted">
                El horario estimado es de{" "}
                <span className="font-semibold text-primary">10am – 2pm</span>.
              </p>
              <p className="text-[13px] italic text-muted/75">
                El horario puede variar según la ruta del día. Siempre te avisamos la hora exacta por WhatsApp el día anterior.
              </p>
            </div>
          </div>

          {/* Pedidos */}
          <div
            data-reveal=""
            style={{ transitionDelay: "120ms" }}
            className="flex flex-col gap-5 lg:px-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-bg shadow-sm">
              {calendarIcon}
            </div>
            <h3 className="font-display text-lg font-semibold text-ink">Pedidos</h3>
            <div className="space-y-3 text-sm">
              <p className="text-muted">
                El cierre de pedidos es cada{" "}
                <span className="font-semibold text-primary">viernes a las 8pm</span>{" "}
                para la semana siguiente.
              </p>
              <p className="text-muted">
                Confirmas directamente por WhatsApp: tu plan, días y domicilio.
              </p>
              <p className="text-[13px] italic text-muted/75">
                Te mandamos un recordatorio antes del cierre para que no te quedes sin tu semana.
              </p>
            </div>
          </div>

          {/* Ventajas */}
          <div
            data-reveal=""
            style={{ transitionDelay: "240ms" }}
            className="flex flex-col gap-5 lg:pl-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-bg shadow-sm">
              {checkIcon}
            </div>
            <h3 className="font-display text-lg font-semibold text-ink">Ventajas</h3>
            <ul className="space-y-2 text-sm text-muted">
              {[
                "Sin ir al súper ni planear el menú",
                "Comida fresca los 5 días de la semana",
                "Empaque que conserva hasta 5 días en refrigeración",
                "Horarios claros — siempre sabes cuándo llega",
                "Cancela cuando quieras, sin penalizaciones",
                "Atención directa y personalizada por WhatsApp",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 shrink-0 font-semibold text-primary">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
