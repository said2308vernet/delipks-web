import { whatsappLink } from "@/lib/content";

export default function FinalCTA() {
  return (
    <section className="px-6 py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl rounded-2xl bg-primary px-6 py-16 text-center lg:py-20">
        <h2 className="mb-3 font-display text-3xl font-semibold text-bg lg:text-4xl">
          Tu semana, resuelta.
        </h2>
        <p className="mb-9 text-base text-secondary-light/90">
          Comer sano nunca fue tan fácil.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink("Hola, quiero pedir mi meal prep con delipks")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-bg px-7 py-3.5 text-sm font-medium text-primary transition-opacity hover:opacity-90"
          >
            Pedir por WhatsApp
          </a>
          <a
            href="#catalogo"
            className="rounded-lg border border-bg/50 px-7 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-bg/10"
          >
            Ver menú
          </a>
        </div>
      </div>
    </section>
  );
}
