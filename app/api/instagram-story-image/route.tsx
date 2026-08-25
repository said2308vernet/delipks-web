import { ImageResponse } from "next/og";
import { blogPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const slug = new URL(request.url).searchParams.get("slug");
  const post = slug ? blogPosts.find((p) => p.slug === slug) : blogPosts[0];

  if (!post) {
    return new Response(
      slug ? `No existe un artículo con slug "${slug}"` : "No hay artículos en el blog",
      { status: 404 }
    );
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: "#005C31",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse (satori) no soporta next/image, requiere <img> plano */}
        <img
          src={post.image}
          alt=""
          width={1080}
          height={1920}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            backgroundImage:
              "linear-gradient(to bottom, rgba(6,3,3,0.25) 0%, rgba(6,3,3,0.35) 45%, rgba(0,92,49,0.88) 78%, rgba(0,92,49,0.97) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 96,
            left: 80,
            display: "flex",
          }}
        >
          <div
            style={{
              display: "flex",
              backgroundColor: "#3DB54D",
              color: "#060303",
              fontSize: 32,
              fontWeight: 700,
              padding: "16px 36px",
              borderRadius: 999,
              letterSpacing: 1,
            }}
          >
            {post.category.toUpperCase()}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 300,
            left: 80,
            right: 80,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#F0FAF3",
              fontSize: 34,
              fontWeight: 600,
              marginBottom: 20,
            }}
          >
            Nuevo en el blog de Delipks
          </div>
          <div
            style={{
              display: "flex",
              color: "#FFFFFF",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.15,
            }}
          >
            {post.title}
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 90,
            left: 80,
            right: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#FFFFFF",
              fontSize: 38,
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            DELIPKS
          </div>
          <div
            style={{
              display: "flex",
              color: "#FFF3EA",
              fontSize: 30,
              fontWeight: 600,
            }}
          >
            Lee el artículo completo →
          </div>
        </div>
      </div>
    ),
    { width: 1080, height: 1920 }
  );
}
