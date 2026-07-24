"use client";

import { useState } from "react";
import type { Receta, TipoPlatillo } from "@/lib/recetas";

const FILTROS: { value: TipoPlatillo | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "desayuno", label: "Desayuno" },
  { value: "comida", label: "Comida" },
  { value: "cena", label: "Cena" },
];

export default function RecetasGrid({ recetas }: { recetas: Receta[] }) {
  const [filtro, setFiltro] = useState<TipoPlatillo | "todos">("todos");
  const visibles = filtro === "todos" ? recetas : recetas.filter((r) => r.tipos.includes(filtro));

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2">
        {FILTROS.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFiltro(f.value)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filtro === f.value
                ? "bg-primary text-white"
                : "bg-bg text-muted hover:bg-bg-alt"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visibles.map((r) => (
          <div
            key={r.slug}
            className="overflow-hidden rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-md"
          >
            <div className="aspect-[4/3] overflow-hidden bg-bg-alt">
              <img
                src={r.image}
                alt={r.nombre}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4">
              <p className="mb-1.5 font-display text-sm font-semibold text-ink">{r.nombre}</p>
              <p className="mb-3 text-[13px] leading-relaxed text-muted">{r.introduccion}</p>
              <div className="flex flex-wrap gap-1.5">
                <span className="rounded-full bg-secondary-light px-2 py-0.5 text-[11px] font-medium text-[#3B6D11]">
                  {r.nutricion.calorias} kcal
                </span>
                <span className="rounded-full bg-bg px-2 py-0.5 text-[11px] text-muted">
                  {r.nutricion.proteina}g prot
                </span>
                <span className="rounded-full bg-bg px-2 py-0.5 text-[11px] text-muted">
                  {r.nutricion.carbohidratos}g carbs
                </span>
                <span className="rounded-full bg-bg px-2 py-0.5 text-[11px] text-muted">
                  {r.nutricion.grasa}g grasa
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {visibles.length === 0 && (
        <p className="rounded-lg border border-border bg-white p-6 text-center text-sm text-muted">
          Pronto agregaremos más recetas en esta categoría.
        </p>
      )}
    </>
  );
}
