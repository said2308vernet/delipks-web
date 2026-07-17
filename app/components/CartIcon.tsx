"use client";

import { useCart } from "@/context/CartContext";

export default function CartIcon() {
  const { cart, openCart } = useCart();

  return (
    <button
      type="button"
      onClick={openCart}
      aria-label="Abrir carrito"
      className="relative flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-bg-alt"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
        <path d="M3 6h18" />
        <path d="M16 10a4 4 0 0 1-8 0" />
      </svg>

      {cart && (
        <span className="absolute right-1.5 top-1.5 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-primary">
          <span className="h-full w-full animate-ping rounded-full bg-primary opacity-60" />
        </span>
      )}
    </button>
  );
}
