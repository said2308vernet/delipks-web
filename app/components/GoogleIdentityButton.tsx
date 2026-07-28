"use client";

import { useEffect, useRef } from "react";
import { useCart } from "@/context/CartContext";

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: { credential: string }) => void;
          }) => void;
          renderButton: (parent: HTMLElement, options: Record<string, unknown>) => void;
        };
      };
    };
  }
}

// Solo captura nombre/correo verificados para prellenar el mensaje de
// WhatsApp -- no es autenticacion, no crea ninguna cuenta, no hay backend
// ni base de datos involucrados. Por eso el token se decodifica en el
// cliente sin verificar la firma: no es una decision de seguridad.
function decodificarCredential(credential: string): { name?: string; email?: string } {
  try {
    const payload = credential.split(".")[1];
    const normalizado = payload.replace(/-/g, "+").replace(/_/g, "/");
    return JSON.parse(atob(normalizado));
  } catch {
    return {};
  }
}

export default function GoogleIdentityButton() {
  const contenedorRef = useRef<HTMLDivElement>(null);
  const { setIdentidad } = useCart();
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  useEffect(() => {
    if (!clientId) return;

    function iniciar() {
      if (!window.google || !contenedorRef.current) return;
      window.google.accounts.id.initialize({
        client_id: clientId as string,
        callback: (response) => {
          const { name, email } = decodificarCredential(response.credential);
          setIdentidad(name ?? "", email ?? "");
        },
      });
      window.google.accounts.id.renderButton(contenedorRef.current, {
        theme: "outline",
        size: "medium",
        width: 280,
        text: "continue_with",
      });
    }

    if (window.google) {
      iniciar();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.onload = iniciar;
    document.head.appendChild(script);
  }, [clientId, setIdentidad]);

  if (!clientId) return null;

  return (
    <div>
      <p className="mb-1.5 text-[13px] font-medium text-ink">
        Continuar con Google <span className="font-normal text-muted">(opcional)</span>
      </p>
      <div ref={contenedorRef} />
    </div>
  );
}
