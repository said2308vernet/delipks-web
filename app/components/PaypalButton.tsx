"use client";

import { useEffect, useRef, useState } from "react";

type Billing = "subscription" | "oneTime";

type Props = {
  planId: string;
  billing: Billing;
  nombre: string;
  correo: string;
  nota: string;
  onSuccess: (orderId: string) => void;
};

declare global {
  interface Window {
    paypal?: {
      Buttons: (options: Record<string, unknown>) => { render: (el: HTMLElement) => void };
    };
  }
}

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

export default function PaypalButton({ planId, billing, nombre, correo, nota, onSuccess }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  // Refs para que el widget de PayPal no se destruya/recree en cada tecleo
  // (nota, etc.); createOrder siempre lee el valor más reciente al hacer clic.
  const detailsRef = useRef({ planId, billing, nombre, correo, nota });
  const onSuccessRef = useRef(onSuccess);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    detailsRef.current = { planId, billing, nombre, correo, nota };
    onSuccessRef.current = onSuccess;
  });

  useEffect(() => {
    if (!PAYPAL_CLIENT_ID) return;

    let cancelled = false;

    function renderButtons() {
      if (cancelled || !containerRef.current || !window.paypal) return;
      containerRef.current.innerHTML = "";
      window.paypal
        .Buttons({
          style: { layout: "vertical", color: "blue", shape: "pill", label: "paypal" },
          createOrder: async () => {
            const { planId, billing, nombre, correo, nota } = detailsRef.current;
            const res = await fetch("/api/paypal/create-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ planId, billing, nombre, correo, nota }),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "No se pudo crear la orden.");
            return data.id;
          },
          onApprove: async (data: { orderID: string }) => {
            const res = await fetch("/api/paypal/capture-order", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ orderID: data.orderID }),
            });
            const result = await res.json();
            if (!res.ok) {
              setError(result.error || "No se pudo confirmar el pago.");
              return;
            }
            onSuccessRef.current(data.orderID);
          },
          onError: () => {
            setError("Hubo un problema procesando el pago. Intenta de nuevo.");
          },
        })
        .render(containerRef.current);
      setLoading(false);
    }

    if (window.paypal) {
      renderButtons();
    } else {
      const existing = document.getElementById("paypal-sdk");
      if (existing) {
        existing.addEventListener("load", renderButtons);
      } else {
        const script = document.createElement("script");
        script.id = "paypal-sdk";
        script.src = `https://www.paypal.com/sdk/js?client-id=${PAYPAL_CLIENT_ID}&currency=MXN&intent=capture`;
        script.onload = renderButtons;
        script.onerror = () => {
          setError("No se pudo cargar PayPal.");
          setLoading(false);
        };
        document.body.appendChild(script);
      }
    }

    return () => {
      cancelled = true;
    };
  }, []);

  if (!PAYPAL_CLIENT_ID) {
    return <p className="text-center text-[12px] text-muted">PayPal no está disponible en este momento.</p>;
  }

  if (error) {
    return <p className="text-center text-[12px] text-red-600">{error}</p>;
  }

  return (
    <div>
      {loading && <p className="mb-1 text-center text-[12px] text-muted">Cargando PayPal…</p>}
      <div ref={containerRef} />
    </div>
  );
}
