import Link from "next/link";
import { recetas } from "@/lib/recetas";
import CatalogCarousel from "./CatalogCarousel";

export default function FeaturedCatalog() {
  const destacados = recetas.filter((r) => r.destacado);

  return (
    <section id="catalogo" data-reveal="" className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-14">
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

      <CatalogCarousel dishes={destacados} />
    </section>
  );
}
