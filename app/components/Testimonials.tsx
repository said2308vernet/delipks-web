const testimonials = [
  {
    name: "Sofía M.",
    role: "Diseñadora, Puebla",
    avatar: "https://i.pravatar.cc/80?img=47",
    stars: 5,
    text: "Llevaba años comiendo cualquier cosa entre juntas porque no tenía tiempo de cocinar. Desde que me suscribí al Plan Equilibrado, ya no me preocupo por el desayuno ni la comida. Lo que más noté: llega el lunes y ya tengo todo listo. Vale cada peso.",
  },
  {
    name: "Carlos V.",
    role: "Ingeniero, Cholula",
    avatar: "https://i.pravatar.cc/80?img=68",
    stars: 5,
    text: "Al principio lo probé solo para ver cómo era. Llevámos varias semanas y ya no queremos volver a cocinar entre semana. La comida llega bien organizada, se calienta en minutos y la calidad es constante. Sin sorpresas.",
  },
  {
    name: "Andrea R.",
    role: "Nutrición y deporte, Puebla",
    avatar: "https://i.pravatar.cc/80?img=32",
    stars: 5,
    text: "Empecé con el Plan Básico para probar y en la segunda semana ya me cambié al Equilibrado. Los platillos no saben a 'dieta', se nota que están hechos con cuidado. Y lo mejor: dejé de gastar $200 diarios en comida corrida.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill={i < count ? "#F59E0B" : "#E5E7EB"} className="h-4 w-4">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
}

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
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            data-reveal=""
            style={{ transitionDelay: `${i * 100}ms` }}
            className="flex flex-col gap-4 rounded-2xl border border-border bg-white p-7 transition-shadow duration-300 hover:shadow-md"
          >
            <Stars count={t.stars} />
            <p className="flex-1 text-[14px] leading-relaxed text-ink">"{t.text}"</p>
            <div className="flex items-center gap-3 border-t border-border pt-4">
              <img
                src={t.avatar}
                alt={t.name}
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-ink">{t.name}</p>
                <p className="text-[12px] text-muted">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
