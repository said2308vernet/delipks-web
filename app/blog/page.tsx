import Link from "next/link";
import { blogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog — Delipks | Tips de alimentación saludable",
  description:
    "Consejos, recetas y tips de nutrición para comer mejor cada día. El blog de Delipks.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
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
          Blog
        </span>
        <h1 className="mb-2 font-display text-3xl font-semibold text-ink lg:text-4xl">
          Tips de alimentación saludable
        </h1>
        <p className="max-w-lg text-sm leading-relaxed text-muted">
          Consejos, recetas y todo lo que necesitas para comer mejor sin complicarte.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article
            key={post.slug}
            className="group overflow-hidden rounded-2xl border border-border bg-white"
          >
            <div className="aspect-[16/10] overflow-hidden bg-bg-alt">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-secondary-light px-2.5 py-1 text-[11px] font-medium text-[#3B6D11]">
                  {post.category}
                </span>
                <span className="text-[11px] text-muted">{formatDate(post.date)}</span>
              </div>
              <h2 className="mb-2 font-display text-base font-semibold leading-snug text-ink">
                {post.title}
              </h2>
              <p className="text-[13px] leading-relaxed text-muted">{post.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
