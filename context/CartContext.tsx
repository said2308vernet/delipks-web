"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { plans, site } from "@/lib/content";

type Billing = "subscription" | "oneTime";

type CartItem = {
  planId: string;
  billing: Billing;
  note: string;
};

type CartContextType = {
  cart: CartItem | null;
  isOpen: boolean;
  addToCart: (planId: string, billing: Billing) => void;
  updateBilling: (billing: Billing) => void;
  updateNote: (note: string) => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
  whatsAppUrl: () => string;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (planId: string, billing: Billing) => {
    setCart({ planId, billing, note: "" });
    setIsOpen(true);
  };

  const updateBilling = (billing: Billing) =>
    setCart((c) => (c ? { ...c, billing } : c));

  const updateNote = (note: string) =>
    setCart((c) => (c ? { ...c, note } : c));

  const whatsAppUrl = () => {
    if (!cart) return "";
    const plan = plans.find((p) => p.id === cart.planId);
    if (!plan) return "";

    const price =
      cart.billing === "subscription"
        ? plan.priceSubscription
        : plan.priceOneTime;
    const billingLabel =
      cart.billing === "subscription"
        ? "Suscripción mensual (−10%)"
        : "Compra por 1 semana";

    const lines = [
      "Hola, quiero hacer mi pedido en Delipks 🌿",
      "",
      `📦 ${plan.label} — ${plan.totalMeals} comidas`,
      ...plan.includes.map((i) => `   ✓ ${i}`),
      "",
      `📅 ${billingLabel}`,
      `💰 $${price.toLocaleString("es-MX")}/semana`,
    ];

    if (cart.note.trim()) {
      lines.push("", `📝 ${cart.note}`);
    }

    lines.push("", "¿Cómo procedo con el pago y la primera entrega?");

    return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        addToCart,
        updateBilling,
        updateNote,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        clearCart: () => {
          setCart(null);
          setIsOpen(false);
        },
        whatsAppUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
