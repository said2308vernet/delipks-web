"use client";

import { useState } from "react";
import { plans, subscriptionDiscountLabel, whatsappLink } from "@/lib/content";

export default function Plans() {
  const [billing, setBilling] = useState<"subscription" | "oneTime">("subscription");

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
              className={`relative rounded-2xl bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                plan.popular ? "border-2 border-primary" : "border border-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3.5 py-1 text-[11px] font-medium text-bg">
                  Más popular
                </span>
              )}
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
              <p className="mb-1 text-xs text-muted">Lunes a viernes</p>
              <p className="mb-5 text-[11px] text-muted">Entregas: domingo y miércoles</p>
              <p className="mb-1">
                <span className="text-[13px] text-muted">desde </span>
                <span className="font-display text-2xl font-semibold text-ink">
                  ${price.toLocaleString("es-MX")}
                </span>
                <span className="text-[13px] text-muted">/semana</span>
              </p>
              <p className="mb-6 text-[11px] text-muted">
                {billing === "subscription" ? "Suscripción mensual · 4 semanas" : "Compra por 1 semana"}
              </p>
              <a
                href={whatsappLink(
                  `Hola, quiero el ${plan.label} (${plan.totalMeals} comidas/semana) — ${
                    billing === "subscription" ? "suscripción" : "compra puntual"
                  }`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
                  plan.popular
                    ? "bg-primary text-bg hover:bg-primary-dark"
                    : "border border-ink text-ink hover:bg-ink hover:text-bg"
                }`}
              >
                Elegir plan
              </a>
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
