import Link from "next/link";
import { recetas } from "@/lib/recetas";
import RecetasGrid from "./RecetasGrid";

export const metadata = {
  title: "Nuestras recetas — Delipks | Meal prep en Puebla",
  description:
    "Conoce todo nuestro catálogo de platillos: desayunos, comidas y cenas frescos, balanceados y listos para disfrutar sin cocinar.",
};

export default function RecetasPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-14">
      <div className="mb-4">
        <Link href="/" className="text-[13px] text-muted transition-opacity hover:opacity-70">
          ← Volver al inicio
        </Link>
      </div>

      <div className="mb-10">
        <span className="mb-4 inline-block rounded-full bg-secondary-light px-3 py-1.5 text-xs font-medium text-[#3B6D11]">
          Catálogo completo
        </span>
        <h1 className="mb-2 font-display text-3xl font-semibold text-ink lg:text-4xl">
          Nuestras recetas
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-muted">
          Así de variado es lo que preparamos cada semana: desayunos, comidas y cenas frescos,
          balanceados y listos para disfrutar sin cocinar.
        </p>
      </div>

      <RecetasGrid recetas={recetas} />

      <div className="mt-12 rounded-2xl border border-border bg-secondary-light/40 p-6 text-center">
        <p className="mb-4 text-sm text-ink">¿Listo para empezar tu semana sin preocuparte por cocinar?</p>
        <Link
          href="/#planes"
          className="inline-block rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Ver planes
        </Link>
      </div>
    </main>
  );
}
