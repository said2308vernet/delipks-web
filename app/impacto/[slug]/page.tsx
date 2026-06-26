import Link from "next/link";
import { notFound } from "next/navigation";
import { impactoPosts } from "@/lib/impacto";

function formatDate(dateStr: string) {
  return new Date(dateStr + "T12:00:00").toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function generateStaticParams() {
  return impactoPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = impactoPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Acción no encontrada" };
  return {
    title: `${post.title} — Delipks Impacta`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      type: "article",
      locale: "es_MX",
      siteName: "Delipks",
    },
  };
}

export default async function ImpactoPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = impactoPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-10 lg:px-10 lg:py-14">
      <div className="mb-6">
        <Link
          href="/impacto"
          className="text-[13px] text-muted transition-opacity hover:opacity-70"
        >
          ← Volver a Delipks Impacta
        </Link>
      </div>

      <span className="mb-3 block text-[11px] text-muted">{formatDate(post.date)}</span>

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

      <article>
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
          return (
            <p key={i} className="mb-4 text-[15px] leading-relaxed text-muted">
              {block}
            </p>
          );
        })}
      </article>

      <div className="mt-10 border-t border-border pt-6">
        <Link
          href="/impacto"
          className="text-sm font-medium text-primary transition-opacity hover:opacity-70"
        >
          ← Conoce más historias de impacto
        </Link>
      </div>
    </main>
  );
}
