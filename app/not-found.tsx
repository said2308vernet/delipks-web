import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <span className="mb-4 font-display text-7xl font-bold text-primary lg:text-9xl">404</span>
      <h1 className="mb-2 font-display text-2xl font-semibold text-ink lg:text-3xl">
        Página no encontrada
      </h1>
      <p className="mb-8 max-w-md text-sm leading-relaxed text-muted">
        La página que buscas no existe o fue movida. Pero tu próxima comida saludable sí está lista.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-primary-dark"
        >
          Volver al inicio
        </Link>
        <Link
          href="/blog"
          className="rounded-lg border border-ink px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
        >
          Ir al blog
        </Link>
      </div>
    </main>
  );
}
