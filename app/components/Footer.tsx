import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <span className="font-display text-lg font-semibold text-ink">{site.name}</span>
          <p className="text-[13px] text-muted">
            Entregamos en {site.deliveryZones.join(" y ")}
          </p>
        </div>
        <p className="mt-6 text-xs text-muted">
          © {new Date().getFullYear()} delipks. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
