"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/content";

const navItems = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Menú", href: "#catalogo" },
  { label: "Planes", href: "#planes" },
  { label: "Objetivos", href: "#objetivos" },
  { label: "Delipks Impacta", href: "#impacto" },
  { label: "Blog de la vida saludable", href: "/blog" },
  { label: "Suscribirse", href: "/suscribirse" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="/">
          <img src="/logo-delipks.png" alt="Delipks — Comida saludable" className="h-8" />
        </a>

        <nav className="hidden items-center gap-7 text-sm text-ink lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-opacity hover:opacity-70">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink("Hola, me interesa conocer más sobre los planes de Delipks")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg bg-primary px-5 py-2 text-sm font-medium text-bg transition-colors hover:bg-primary-dark sm:block"
          >
            Pedir por WhatsApp
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink transition-colors hover:bg-bg-alt lg:hidden"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="h-5 w-5">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-bg px-6 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-bg-alt"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={whatsappLink("Hola, me interesa conocer más sobre los planes de Delipks")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block rounded-lg bg-primary px-5 py-3 text-center text-sm font-medium text-bg transition-colors hover:bg-primary-dark"
          >
            Pedir por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
