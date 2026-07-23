import { featuredDishes } from "@/lib/content";

export default function FeaturedCatalog() {
  return (
    <section id="catalogo" className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-14">
      <div className="mb-9 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="mb-4 inline-block rounded-full bg-secondary-light px-3 py-1.5 text-xs font-medium text-[#3B6D11]">
            Catálogo
          </span>
          <h2 className="font-display text-2xl font-semibold text-ink lg:text-3xl">
            Algunos de nuestros platillos
          </h2>
        </div>
        <a
          href="#planes"
          className="shrink-0 border-b border-ink pb-0.5 text-sm font-medium text-ink transition-opacity hover:opacity-70"
        >
          Ver planes →
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
        {featuredDishes.map((dish, i) => (
          <div
            key={dish.name}
            data-reveal=""
            style={{ transitionDelay: `${i * 75}ms` }}
            className="overflow-hidden rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-md"
          >
            <div className="aspect-[4/5] overflow-hidden bg-bg-alt">
              <img
                src={`/platillos/${dish.image}.webp`}
                alt={dish.name}
                loading="lazy" className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-3.5">
              <p className="mb-1.5 text-sm font-medium text-ink">{dish.name}</p>
              <div className="flex gap-2">
                <span className="rounded-full bg-secondary-light px-2 py-0.5 text-[11px] font-medium text-[#3B6D11]">
                  {dish.kcal} kcal
                </span>
                <span className="rounded-full bg-bg px-2 py-0.5 text-[11px] text-muted">
                  {dish.protein}g prot
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
