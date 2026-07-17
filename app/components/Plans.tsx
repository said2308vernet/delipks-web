"use client";

import { useState } from "react";
import { plans, subscriptionDiscountLabel } from "@/lib/content";
import { useCart } from "@/context/CartContext";

export default function Plans() {
  const [billing, setBilling] = useState<"subscription" | "oneTime">("subscription");
  const { addToCart } = useCart();

  return (
    <section id="planes" className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-14">
      <div className="mb-8 text-center">
        <span className="mb-4 inline-block rounded-full bg-secondary-light px-3 py-1.5 text-xs font-medium text-[#3B6D11]">
          Planes
        </span>
        <h2 className="mb-2 font-display text-2xl font-semibold text-ink lg:text-3xl">
          Elige cuántas comidas necesitas
        </h2>
        <p className="text-sm text-muted">1 semana o suscríbete mensual y ahorra</p>
      </div>

      <div className="mb-10 flex justify-center">
        <div className="inline-flex rounded-[10px] border border-border bg-white p-1" role="tablist" aria-label="Tipo de compra">
          <button
            type="button"
            role="tab"
            aria-selected={billing === "oneTime"}
            onClick={() => setBilling("oneTime")}
            className={`rounded-[7px] px-5 py-2.5 text-[13px] font-medium transition-colors ${
              billing === "oneTime" ? "bg-primary text-bg" : "text-muted"
            }`}
          >
            Compra puntual
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={billing === "subscription"}
            onClick={() => setBilling("subscription")}
            className={`flex items-center gap-1.5 rounded-[7px] px-5 py-2.5 text-[13px] font-medium transition-colors ${
              billing === "subscription" ? "bg-primary text-bg" : "text-muted"
            }`}
          >
            Suscripción
            <span
              className={`rounded-full px-1.5 py-0.5 text-[10.5px] ${
                billing === "subscription" ? "bg-white/25" : "bg-secondary-light text-[#3B6D11]"
              }`}
            >
              {subscriptionDiscountLabel}
            </span>
          </button>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {plans.map((plan, i) => {
          const price = billing === "subscription" ? plan.priceSubscription : plan.priceOneTime;
          return (
            <div
              key={plan.id}
              data-reveal=""
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`relative flex flex-col rounded-2xl bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                plan.popular ? "border-2 border-primary" : "border border-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3.5 py-1 text-[11px] font-medium text-bg">
                  Más popular
                </span>
              )}

              {/* Variable-height content */}
              <div>
                <p className="mb-2.5 text-xs font-medium uppercase tracking-wide text-muted">
                  {plan.label}
                </p>
                <h3 className="mb-2 font-display text-xl font-semibold text-ink">
                  {plan.totalMeals} comidas
                </h3>
                <ul className="mb-4 space-y-1">
                  {plan.includes.map((item) => (
                    <li key={item} className="text-[13px] text-muted">✓ {item}</li>
                  ))}
                </ul>
                <p className="mb-3 text-xs text-muted">Lunes a viernes · entregas dom y mié</p>
                {/* Nutritional estimate */}
                <div className="flex items-center justify-center gap-2 rounded-lg bg-secondary-light px-3 py-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-3.5 w-3.5 shrink-0 text-primary">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 5 20 3c0 8.5-2.5 12.7-8 14a4.5 4.5 0 0 1-1 3Z"/><path d="M2 21c0-9 4-13 8-15"/>
                  </svg>
                  <span className="text-[11px] font-medium text-[#3B6D11]">
                    {plan.nutrition.kcal} · {plan.nutrition.protein}
                  </span>
                  <span className="text-[10px] text-[#3B6D11]/70">{plan.nutrition.label}</span>
                </div>
              </div>

              {/* mt-auto empuja este bloque al fondo de la card */}
              <div className="mt-auto pt-5">
                <p className="mb-1">
                  <span className="text-[13px] text-muted">desde </span>
                  <span className="font-display text-2xl font-semibold text-ink">
                    ${price.toLocaleString("es-MX")}
                  </span>
                  <span className="text-[13px] text-muted">/semana</span>
                </p>
                <p className="mb-5 text-[11px] text-muted">
                  {billing === "subscription" ? "Suscripción mensual · 4 semanas" : "Compra por 1 semana"}
                </p>
                <button
                  type="button"
                  onClick={() => addToCart(plan.id, billing)}
                  className={`w-full rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
                    plan.popular
                      ? "bg-primary text-bg hover:bg-primary-dark"
                      : "border border-ink text-ink hover:bg-ink hover:text-bg"
                  }`}
                >
                  Elegir plan
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-6 text-center text-xs text-muted">
        Entregas los domingos y miércoles · Compra puntual: 1 semana (lun-vie) · Suscripción: compromiso mensual de 4 semanas con -10% · Cancela cuando quieras · MXN con IVA
      </p>
    </section>
  );
}
