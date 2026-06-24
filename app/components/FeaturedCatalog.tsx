import { featuredDishes } from "@/lib/content";

const dishImages: Record<string, string> = {
  "Bowl mediterráneo":
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&auto=format&fit=crop",
  "Salmón con espárragos":
    "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80&auto=format&fit=crop",
  "Buddha bowl de garbanzo":
    "https://images.unsplash.com/photo-1540914124281-342587941389?w=600&q=80&auto=format&fit=crop",
  "Pollo a la mostaza":
    "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=600&q=80&auto=format&fit=crop",
};

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
        {featuredDishes.map((dish) => (
          <div key={dish.name} className="overflow-hidden rounded-2xl border border-border bg-white">
            <div className="aspect-[4/5] overflow-hidden bg-bg-alt">
              <img
                src={dishImages[dish.name]}
                alt={dish.name}
                loading="lazy" className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
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
