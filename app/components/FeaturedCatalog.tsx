import Link from "next/link";
import { recetas } from "@/lib/recetas";

function DishCard({ dish, transitionDelay }: { dish: (typeof recetas)[number]; transitionDelay: number }) {
  return (
    <div
      data-reveal=""
      style={{ transitionDelay: `${transitionDelay}ms` }}
      className="overflow-hidden rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-md"
    >
      <div className="aspect-[4/5] overflow-hidden bg-bg-alt">
        <img
          src={dish.image}
          alt={dish.nombre}
          loading="lazy" className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-3.5">
        <p className="mb-1.5 text-sm font-medium text-ink">{dish.nombre}</p>
        <div className="flex flex-wrap gap-1.5">
          <span className="rounded-full bg-secondary-light px-2 py-0.5 text-[11px] font-medium text-[#3B6D11]">
            {dish.nutricion.calorias} kcal
          </span>
          <span className="rounded-full bg-bg px-2 py-0.5 text-[11px] text-muted">
            {dish.nutricion.proteina}g prot
          </span>
          <span className="rounded-full bg-bg px-2 py-0.5 text-[11px] text-muted">
            {dish.nutricion.carbohidratos}g carbs
          </span>
          <span className="rounded-full bg-bg px-2 py-0.5 text-[11px] text-muted">
            {dish.nutricion.grasa}g grasa
          </span>
        </div>
      </div>
    </div>
  );
}

export default function FeaturedCatalog() {
  const destacados = recetas.filter((r) => r.destacado);
  const primeraFila = destacados.slice(0, 4);
  const resto = destacados.slice(4);

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
        <Link
          href="/recetas"
          className="shrink-0 border-b border-ink pb-0.5 text-sm font-medium text-ink transition-opacity hover:opacity-70"
        >
          Ver todas las recetas →
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-5">
        {primeraFila.map((dish, i) => (
          <DishCard key={dish.slug} dish={dish} transitionDelay={i * 75} />
        ))}
      </div>

      {resto.length > 0 && (
        <div className="mt-4 -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-2 lg:mt-5 lg:-mx-10 lg:gap-5 lg:px-10">
          {resto.map((dish, i) => (
            <div key={dish.slug} className="w-[45%] shrink-0 snap-start sm:w-[30%] lg:w-[23%]">
              <DishCard dish={dish} transitionDelay={i * 75} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
