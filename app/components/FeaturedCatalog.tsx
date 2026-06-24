import { featuredDishes } from "@/lib/content";

export default function FeaturedCatalog() {
  return (
    <section id="catalogo" className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
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
          href="#"
          className="shrink-0 border-b border-ink pb-0.5 text-sm font-medium text-ink transition-opacity hover:opacity-70"
        >
          Ver menú completo →
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
        {featuredDishes.map((dish) => (
          <div key={dish.name} className="overflow-hidden rounded-2xl border border-border bg-white">
            <div className="flex aspect-[4/5] items-center justify-center bg-bg-alt">
              <span className="px-2 text-center text-[11px] text-muted">Foto placeholder</span>
            </div>
            <div className="p-3.5">
              <p className="text-sm font-medium text-ink">{dish.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
