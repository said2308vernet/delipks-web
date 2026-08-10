"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { plans, site } from "@/lib/content";

type Billing = "subscription" | "oneTime";

type Direccion = {
  calle: string;
  numero: string;
  colonia: string;
  codigoPostal: string;
  referencia: string;
};

type CartItem = {
  planId: string;
  billing: Billing;
  note: string;
  nombre: string;
  correo: string;
  telefono: string;
  direccion: Direccion;
};

const DIRECCION_VACIA: Direccion = { calle: "", numero: "", colonia: "", codigoPostal: "", referencia: "" };

type CartContextType = {
  cart: CartItem | null;
  isOpen: boolean;
  addToCart: (planId: string, billing: Billing) => void;
  updateBilling: (billing: Billing) => void;
  updateNote: (note: string) => void;
  setIdentidad: (nombre: string, correo: string) => void;
  updateTelefono: (telefono: string) => void;
  updateDireccion: (campo: keyof Direccion, valor: string) => void;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
  whatsAppUrl: () => string;
  whatsAppUrlPaid: (paypalOrderId: string) => string;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (planId: string, billing: Billing) => {
    setCart({ planId, billing, note: "", nombre: "", correo: "", telefono: "", direccion: DIRECCION_VACIA });
    setIsOpen(true);
  };

  const updateBilling = (billing: Billing) =>
    setCart((c) => (c ? { ...c, billing } : c));

  const updateNote = (note: string) =>
    setCart((c) => (c ? { ...c, note } : c));

  const setIdentidad = (nombre: string, correo: string) =>
    setCart((c) => (c ? { ...c, nombre, correo } : c));

  const updateTelefono = (telefono: string) =>
    setCart((c) => (c ? { ...c, telefono } : c));

  const updateDireccion = (campo: keyof Direccion, valor: string) =>
    setCart((c) => (c ? { ...c, direccion: { ...c.direccion, [campo]: valor } } : c));

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
      "Hola, quiero hacer mi pedido en Delipks",
      "",
    ];

    if (cart.nombre) lines.push(`Nombre: ${cart.nombre}`);
    if (cart.correo) lines.push(`Correo: ${cart.correo}`);
    if (cart.telefono) lines.push(`Teléfono: ${cart.telefono}`);
    const { calle, numero, colonia, codigoPostal } = cart.direccion;
    if (calle) lines.push(`Dirección: ${calle} ${numero}, ${colonia}, CP ${codigoPostal}`);
    if (cart.nombre || cart.correo || cart.telefono || calle) lines.push("");

    lines.push(
      `Plan: *${plan.label}* — ${plan.totalMeals} comidas`,
      ...plan.includes.map((i) => `  - ${i}`),
      "",
      `Modalidad: ${billingLabel}`,
      `Precio: $${price.toLocaleString("es-MX")}/semana`,
    );

    if (cart.note.trim()) {
      lines.push("", `Nota: ${cart.note}`);
    }

    lines.push("", "¿Cómo procedo con el pago y la primera entrega?");

    return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  };

  const whatsAppUrlPaid = (paypalOrderId: string) => {
    if (!cart) return "";
    const plan = plans.find((p) => p.id === cart.planId);
    if (!plan) return "";

    const billingLabel =
      cart.billing === "subscription"
        ? "Suscripción — paquete de 4 semanas"
        : "Compra por 1 semana";

    const lines = [
      "Hola, ya pagué mi pedido en Delipks por PayPal",
      "",
    ];

    if (cart.nombre) lines.push(`Nombre: ${cart.nombre}`);
    if (cart.correo) lines.push(`Correo: ${cart.correo}`);
    if (cart.telefono) lines.push(`Teléfono: ${cart.telefono}`);
    const { calle, numero, colonia, codigoPostal } = cart.direccion;
    if (calle) lines.push(`Dirección: ${calle} ${numero}, ${colonia}, CP ${codigoPostal}`);
    if (cart.nombre || cart.correo || cart.telefono || calle) lines.push("");

    lines.push(
      `Plan: *${plan.label}* — ${plan.totalMeals} comidas`,
      `Modalidad: ${billingLabel}`,
      `Orden PayPal: ${paypalOrderId}`,
    );

    if (cart.note.trim()) {
      lines.push("", `Nota: ${cart.note}`);
    }

    lines.push("", "¿Podemos coordinar mi primera entrega?");

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
        setIdentidad,
        updateTelefono,
        updateDireccion,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        clearCart: () => {
          setCart(null);
          setIsOpen(false);
        },
        whatsAppUrl,
        whatsAppUrlPaid,
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
