import { whatsappLink } from "@/lib/content";

export default function Header() {
  const navItems = [
    { label: "Cómo funciona", href: "#como-funciona" },
    { label: "Menú", href: "#catalogo" },
    { label: "Planes", href: "#planes" },
    { label: "Objetivos", href: "#objetivos" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#">
          <img src="/logo-delipks.png" alt="delipks" className="h-8" />
        </a>

        <nav className="hidden items-center gap-7 text-sm text-ink lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition-opacity hover:opacity-70">
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappLink("Hola, quiero pedir mi meal prep con delipks")}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-primary-dark lg:px-5"
        >
          Pedir por WhatsApp
        </a>
      </div>
    </header>
  );
}
