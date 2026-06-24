import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Artículo no encontrado" };
  return {
    title: `${post.title} — Delipks Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-14">
      <div className="mb-6">
        <Link
          href="/blog"
          className="text-[13px] text-muted transition-opacity hover:opacity-70"
        >
          ← Volver al blog
        </Link>
      </div>

      <div className="mb-3 flex items-center gap-3">
        <span className="rounded-full bg-secondary-light px-2.5 py-1 text-[11px] font-medium text-[#3B6D11]">
          {post.category}
        </span>
        <span className="text-[11px] text-muted">{formatDate(post.date)}</span>
      </div>

      <h1 className="mb-6 font-display text-3xl font-semibold leading-tight text-ink lg:text-4xl">
        {post.title}
      </h1>

      <div className="mb-8 aspect-[16/9] overflow-hidden rounded-2xl bg-bg-alt">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full object-cover"
        />
      </div>

      <article className="prose-delipks">
        {post.content.split("\n\n").map((block, i) => {
          if (block.startsWith("## ")) {
            return (
              <h2
                key={i}
                className="mb-3 mt-8 font-display text-xl font-semibold text-ink"
              >
                {block.replace("## ", "")}
              </h2>
            );
          }
          if (block.startsWith("**") && block.includes(":**")) {
            const parts = block.split(":**");
            const label = parts[0].replace(/\*\*/g, "");
            const desc = parts.slice(1).join(":**").replace(/\*\*/g, "");
            return (
              <p key={i} className="mb-3 text-[15px] leading-relaxed text-muted">
                <strong className="text-ink">{label}:</strong>
                {desc}
              </p>
            );
          }
          if (block.startsWith("**")) {
            const cleaned = block.replace(/\*\*/g, "");
            const dashIndex = cleaned.indexOf(" — ");
            if (dashIndex !== -1) {
              return (
                <p key={i} className="mb-3 text-[15px] leading-relaxed text-muted">
                  <strong className="text-ink">
                    {cleaned.substring(0, dashIndex)}
                  </strong>
                  {" — "}
                  {cleaned.substring(dashIndex + 3)}
                </p>
              );
            }
            return (
              <p key={i} className="mb-3 text-[15px] font-medium text-ink">
                {cleaned}
              </p>
            );
          }
          return (
            <p key={i} className="mb-4 text-[15px] leading-relaxed text-muted">
              {block}
            </p>
          );
        })}
      </article>

      <div className="mt-10 border-t border-border pt-6">
        <Link
          href="/blog"
          className="text-sm font-medium text-primary transition-opacity hover:opacity-70"
        >
          ← Ver todos los artículos
        </Link>
      </div>
    </main>
  );
}
