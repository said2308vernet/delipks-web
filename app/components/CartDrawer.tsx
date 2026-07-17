"use client";

import { useCart } from "@/context/CartContext";
import { plans } from "@/lib/content";

export default function CartDrawer() {
  const { cart, isOpen, closeCart, clearCart, updateBilling, updateNote, whatsAppUrl } =
    useCart();

  const plan = plans.find((p) => p.id === cart?.planId);
  const price = cart
    ? cart.billing === "subscription"
      ? plan?.priceSubscription
      : plan?.priceOneTime
    : null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 text-primary">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
              <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
            </svg>
            <h2 className="font-display text-base font-semibold text-ink">Tu pedido</h2>
          </div>
          <button
            onClick={closeCart}
            aria-label="Cerrar carrito"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-muted transition-colors hover:bg-bg-alt hover:text-ink"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
              <path strokeLinecap="round" d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart && plan ? (
            <div className="flex flex-col gap-5">
              {/* Plan card */}
              <div className="rounded-xl bg-secondary-light p-5">
                <p className="mb-0.5 font-display text-base font-semibold text-ink capitalize">
                  {plan.label}
                </p>
                <p className="mb-3 text-[13px] text-muted">{plan.totalMeals} comidas semanales · lunes a viernes</p>
                <ul className="space-y-1">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[13px] text-[#3B6D11]">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3.5 w-3.5 shrink-0">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                {plan.nutrition && (
                  <p className="mt-3 text-[11px] text-[#3B6D11]/70">
                    {plan.nutrition.kcal} · {plan.nutrition.protein} {plan.nutrition.label}
                  </p>
                )}
              </div>

              {/* Billing toggle */}
              <div>
                <p className="mb-2 text-[13px] font-medium text-ink">Tipo de compra</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => updateBilling("subscription")}
                    className={`rounded-lg border px-3 py-3 text-[13px] font-medium transition-colors ${
                      cart.billing === "subscription"
                        ? "border-primary bg-primary text-bg"
                        : "border-border text-muted hover:border-primary/40"
                    }`}
                  >
                    Suscripción
                    <span className={`ml-1 text-[11px] ${cart.billing === "subscription" ? "text-white/80" : "text-muted"}`}>
                      −10%
                    </span>
                  </button>
                  <button
                    type="button"
                    onClick={() => updateBilling("oneTime")}
                    className={`rounded-lg border px-3 py-3 text-[13px] font-medium transition-colors ${
                      cart.billing === "oneTime"
                        ? "border-primary bg-primary text-bg"
                        : "border-border text-muted hover:border-primary/40"
                    }`}
                  >
                    Una semana
                  </button>
                </div>
              </div>

              {/* Note */}
              <div>
                <label className="mb-1.5 block text-[13px] font-medium text-ink">
                  Nota u observación{" "}
                  <span className="font-normal text-muted">(opcional)</span>
                </label>
                <textarea
                  value={cart.note}
                  onChange={(e) => updateNote(e.target.value)}
                  placeholder="Ej: alergia a mariscos, prefiero entrega en la tarde..."
                  rows={3}
                  className="w-full resize-none rounded-lg border border-border bg-bg px-3.5 py-2.5 text-[13px] text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-primary"
                />
              </div>

              {/* Delivery info */}
              <div className="rounded-lg border border-border px-4 py-3 text-[12px] text-muted">
                🚚 Entregas domingo y miércoles · Pedidos antes del viernes 8pm
              </div>
            </div>
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-12 w-12 text-border">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
              </svg>
              <p className="text-sm text-muted">Tu carrito está vacío</p>
              <button
                onClick={closeCart}
                className="text-[13px] font-medium text-primary underline underline-offset-2"
              >
                Ver planes
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {cart && plan && price !== undefined && (
          <div className="border-t border-border p-6">
            <div className="mb-4 flex items-baseline justify-between">
              <p className="text-[13px] text-muted">
                {cart.billing === "subscription" ? "Suscripción mensual · 4 semanas" : "Total por 1 semana"}
              </p>
              <p className="font-display text-2xl font-semibold text-ink">
                ${price?.toLocaleString("es-MX")}
                <span className="ml-1 text-[13px] font-normal text-muted">/sem</span>
              </p>
            </div>

            <a
              href={whatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={clearCart}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-primary-dark"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18a7.96 7.96 0 0 1-4.106-1.138l-.294-.176-2.866.852.852-2.866-.176-.294A7.96 7.96 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8Z" />
              </svg>
              Confirmar por WhatsApp
            </a>

            <p className="mt-2 text-center text-[11px] text-muted">
              Sin pago por adelantado · Te contactamos en minutos
            </p>
          </div>
        )}
      </div>
    </>
  );
}
