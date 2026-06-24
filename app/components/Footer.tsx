import { site, whatsappLink } from "@/lib/content";

const legalLinks = [
  { label: "Aviso de privacidad", href: "/aviso-de-privacidad" },
  { label: "Términos y condiciones", href: "/terminos-y-condiciones" },
  { label: "Políticas de servicio", href: "/politicas-de-servicio" },
];

const navLinks = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Menú", href: "#catalogo" },
  { label: "Planes", href: "#planes" },
  { label: "Objetivos", href: "#objetivos" },
  { label: "Blog de la vida saludable", href: "/blog" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-lg font-semibold text-ink">{site.name}</span>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">
              Comida saludable y lista, entregada en {site.deliveryZones.join(" y ")}.
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink">Navegación</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[13px] text-muted transition-opacity hover:opacity-70">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink">Legal</p>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[13px] text-muted transition-opacity hover:opacity-70">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink">Contacto</p>
            <ul className="space-y-2">
              <li>
                <a
                  href={whatsappLink("Hola, tengo una pregunta sobre delipks")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-muted transition-opacity hover:opacity-70"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:hola@delipks.com"
                  className="text-[13px] text-muted transition-opacity hover:opacity-70"
                >
                  hola@delipks.com
                </a>
              </li>
              <li>
                <span className="text-[13px] text-muted">
                  {site.deliveryZones.join(", ")} · México
                </span>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="https://www.instagram.com/deli.pks/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-bg text-muted transition-colors hover:text-primary"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61590947618913"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-bg text-muted transition-colors hover:text-primary"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@delipks"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-bg text-muted transition-colors hover:text-primary"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78c.27 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 10.86 4.34A6.28 6.28 0 0 0 15.82 15V8.76a8.26 8.26 0 0 0 3.77 1.13V6.69Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} delipks. Todos los derechos reservados.
          </p>
          <div className="flex flex-wrap gap-4">
            {legalLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-[11px] text-muted transition-opacity hover:opacity-70">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
