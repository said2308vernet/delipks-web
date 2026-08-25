import { blogPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export async function GET() {
  const posts = blogPosts.map((p) => ({
    slug: p.slug,
    title: p.title,
    category: p.category,
    date: p.date,
  }));

  return Response.json(posts);
}
