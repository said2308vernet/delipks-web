"use client";

import { useState } from "react";
import { checkCoverage } from "@/lib/coverage";
import { whatsappLink } from "@/lib/content";

export default function ZoneChecker() {
  const [cp, setCp] = useState("");
  const [result, setResult] = useState<"covered" | "uncovered" | "invalid" | null>(null);

  function handleCheck() {
    setResult(checkCoverage(cp));
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleCheck();
  }

  return (
    <div className="mt-6">
      <p className="mb-2 text-[13px] text-muted">¿Llegamos a tu zona?</p>
      <div className="flex gap-2">
        <input
          type="text"
          inputMode="numeric"
          maxLength={5}
          value={cp}
          onChange={(e) => { setCp(e.target.value.replace(/\D/g, "")); setResult(null); }}
          onKeyDown={handleKeyDown}
          placeholder="Tu código postal"
          className="w-40 rounded-lg border border-border bg-white px-3.5 py-2 text-sm text-ink outline-none transition-colors placeholder:text-muted/50 focus:border-primary"
        />
        <button
          type="button"
          onClick={handleCheck}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-primary-dark"
        >
          Verificar
        </button>
      </div>

      {result === "covered" && (
        <p className="mt-2 flex items-center gap-1.5 text-[13px] font-medium text-primary">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          ¡Sí llegamos! Haz tu pedido por WhatsApp.
        </p>
      )}

      {result === "uncovered" && (
        <p className="mt-2 text-[13px] text-muted">
          Por ahora no llegamos a esa zona. {" "}
          <a
            href={whatsappLink(`Hola, me interesa Delipks pero vivo en el CP ${cp}. ¿Llegarían pronto?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-2"
          >
            Avísanos tu CP
          </a>
          {" "}y te notificamos cuando lleguemos.
        </p>
      )}

      {result === "invalid" && (
        <p className="mt-2 text-[13px] text-muted">
          Ingresa un código postal válido de 5 dígitos.
        </p>
      )}
    </div>
  );
}
