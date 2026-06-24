import Image from "next/image";
import { site, whatsappLink } from "@/lib/content";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.85fr] lg:gap-12">
        <div>
          <span className="mb-5 inline-block rounded-full bg-secondary-light px-3 py-1.5 text-xs font-medium text-[#3B6D11]">
            Entregas en {site.deliveryZones.join(" y ")}
          </span>

          <h1 className="mb-4 max-w-[540px] font-display text-4xl font-semibold leading-tight tracking-tight text-ink lg:text-5xl">
            Comida saludable y lista, sin preocupaciones
          </h1>

          <p className="mb-8 max-w-[420px] text-base leading-relaxed text-muted">
            Platillos frescos, balanceados y preparados por nutriólogos. Tú solo elige,
            nosotros cocinamos.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink("Hola, quiero pedir mi meal prep con delipks")}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-primary px-6 py-3.5 text-center text-sm font-medium text-bg transition-colors hover:bg-primary-dark"
            >
              Pedir por WhatsApp
            </a>
            <a
              href="#catalogo"
              className="rounded-lg border border-ink px-6 py-3.5 text-center text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
            >
              Ver menú
            </a>
          </div>
        </div>

        <div className="aspect-[4/5] relative overflow-hidden rounded-2xl bg-bg-alt">
          <Image
            src="/hero-delipks.jpg"
            alt="Mujer con meal prep Delipks"
            fill
            sizes="(min-width: 1024px) 35vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
