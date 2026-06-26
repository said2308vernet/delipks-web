import Link from "next/link";

export default function Newsletter() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-14">
      <div className="rounded-2xl border border-border bg-white p-7 text-center lg:p-9">
        <span className="mb-4 inline-block rounded-full bg-secondary-light px-3 py-1.5 text-xs font-medium text-[#3B6D11]">
          Newsletter
        </span>
        <h2 className="mb-2 font-display text-2xl font-semibold text-ink lg:text-3xl">
          Recibe tips, recetas y ofertas
        </h2>
        <p className="mx-auto mb-6 max-w-lg text-sm leading-relaxed text-muted">
          Suscríbete y cada semana te enviamos contenido sobre alimentación saludable y
          promociones exclusivas para suscriptores. Sin spam, cancela cuando quieras.
        </p>
        <Link
          href="/suscribirse"
          className="inline-block rounded-lg bg-primary px-7 py-3.5 text-sm font-medium text-bg transition-colors hover:bg-primary-dark"
        >
          Suscribirme
        </Link>
      </div>
    </section>
  );
}
