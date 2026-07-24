"use client";

import { useEffect, useRef, useState } from "react";
import type { Receta } from "@/lib/recetas";

function DishCard({ dish }: { dish: Receta }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white transition-shadow duration-300 hover:shadow-md">
      <div className="aspect-[4/5] overflow-hidden bg-bg-alt">
        <img
          src={dish.image}
          alt={dish.nombre}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
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

function ArrowButton({
  direction,
  onClick,
  visible,
}: {
  direction: "left" | "right";
  onClick: () => void;
  visible: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Ver platillos anteriores" : "Ver más platillos"}
      className={`absolute top-[38%] z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white/90 text-ink shadow-md backdrop-blur transition-opacity duration-200 hover:bg-white ${
        direction === "left" ? "-left-3 lg:-left-4" : "-right-3 lg:-right-4"
      } ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        {direction === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
      </svg>
    </button>
  );
}

export default function CatalogCarousel({ dishes }: { dishes: Receta[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  function updateArrows() {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, [dishes]);

  function scrollByPage(direction: 1 | -1) {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: direction * el.clientWidth * 0.85, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <ArrowButton direction="left" visible={canScrollLeft} onClick={() => scrollByPage(-1)} />
      <div
        ref={scrollerRef}
        onScroll={updateArrows}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:gap-5 [&::-webkit-scrollbar]:hidden"
      >
        {dishes.map((dish) => (
          <div key={dish.slug} className="w-[45%] shrink-0 snap-start sm:w-[30%] lg:w-[23%]">
            <DishCard dish={dish} />
          </div>
        ))}
      </div>
      <ArrowButton direction="right" visible={canScrollRight} onClick={() => scrollByPage(1)} />
    </div>
  );
}
