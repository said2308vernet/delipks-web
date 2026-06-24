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
                <span className="text-[13px] text-muted">
                  {site.deliveryZones.join(", ")} · México
                </span>
              </li>
            </ul>
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
