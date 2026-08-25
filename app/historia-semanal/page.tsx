import { blogPosts } from "@/lib/blog";

export const metadata = {
  title: "Historia semanal — Delipks",
  robots: { index: false, follow: false },
};

export default function HistoriaSemanalPage() {
  const post = blogPosts[0];

  if (!post) {
    return (
      <main className="mx-auto max-w-md px-6 py-16 text-center">
        <p className="text-sm text-muted">Todavía no hay artículos en el blog.</p>
      </main>
    );
  }

  const articleUrl = `https://delipks.com/blog/${post.slug}`;
  const storyText = `Nuevo en el blog 👀\n\n${post.title}\n\nLéelo completo, link en la descripción de este perfil.`;

  return (
    <main className="mx-auto max-w-md px-6 py-10">
      <h1 className="mb-1 font-display text-xl font-semibold text-ink">
        Historia de esta semana
      </h1>
      <p className="mb-6 text-sm text-muted">
        Se actualiza sola cada vez que se publica un artículo nuevo del blog. Descarga la
        imagen y súbela como historia de Instagram.
      </p>

      <div className="mb-6 overflow-hidden rounded-2xl border border-border">
        {/* eslint-disable-next-line @next/next/no-img-element -- vista previa de una imagen generada dinámicamente, no un asset estático de next/image */}
        <img
          src="/api/instagram-story-image"
          alt={`Vista previa de la historia: ${post.title}`}
          className="block w-full"
        />
      </div>

      <a
        href="/api/instagram-story-image"
        download="delipks-historia.png"
        className="mb-8 block w-full rounded-full bg-primary py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        Descargar imagen
      </a>

      <div className="mb-8 rounded-xl bg-bg p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink">
          Cómo publicarla (2 minutos)
        </p>
        <ol className="list-decimal space-y-2 pl-4 text-[13px] leading-relaxed text-muted">
          <li>Descarga la imagen de arriba desde tu celular.</li>
          <li>Ábrela en Instagram como historia nueva.</li>
          <li>
            Agrega el sticker de <strong className="text-ink">enlace</strong> (link) apuntando a:{" "}
            <span className="break-all text-primary">{articleUrl}</span>
          </li>
          <li>Publica.</li>
        </ol>
      </div>

      <div className="rounded-xl bg-bg p-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-ink">
          Texto sugerido (opcional, para poner encima de la historia)
        </p>
        <pre className="whitespace-pre-wrap font-sans text-[13px] leading-relaxed text-muted">
          {storyText}
        </pre>
      </div>
    </main>
  );
}
