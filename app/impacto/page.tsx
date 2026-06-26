import Link from "next/link";
import { impactoPosts } from "@/lib/impacto";

export const metadata = {
  title: "Delipks Impacta — Huellas y Sonrisas",
  description:
    "Conoce las acciones de impacto social de Delipks. Cada plan que compras genera bienestar más allá de tu mesa.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function ImpactoPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10 lg:px-10 lg:py-14">
      <div className="mb-4">
        <Link
          href="/"
          className="text-[13px] text-muted transition-opacity hover:opacity-70"
        >
          ← Volver al inicio
        </Link>
      </div>

      <div className="mb-10">
        <span className="mb-4 inline-block rounded-full bg-secondary-light px-3 py-1.5 text-xs font-medium text-[#3B6D11]">
          Huellas y Sonrisas
        </span>
        <h1 className="mb-2 font-display text-3xl font-semibold text-ink lg:text-4xl">
          Delipks Impacta
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-muted">
          Cada plan que compras genera bienestar más allá de tu mesa. Aquí compartimos las acciones
          que hacemos gracias a ti.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {impactoPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/impacto/${post.slug}`}
            className="group overflow-hidden rounded-2xl border border-border bg-white"
          >
            <div className="aspect-[16/10] overflow-hidden bg-bg-alt">
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <span className="mb-2 block text-[11px] text-muted">{formatDate(post.date)}</span>
              <h2 className="mb-2 font-display text-base font-semibold leading-snug text-ink transition-colors group-hover:text-primary">
                {post.title}
              </h2>
              <p className="text-[13px] leading-relaxed text-muted">{post.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
