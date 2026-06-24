import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Delipks — Comida saludable y lista, sin preocupaciones";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #007a3d 0%, #00602f 50%, #004d26 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-1px",
            }}
          >
            Delipks
          </div>
          <div
            style={{
              width: 80,
              height: 4,
              background: "#43b02a",
              borderRadius: 2,
            }}
          />
          <div
            style={{
              fontSize: 32,
              fontWeight: 500,
              color: "rgba(255,255,255,0.9)",
              textAlign: "center",
              maxWidth: 700,
              lineHeight: 1.4,
            }}
          >
            Comida saludable y lista, sin preocupaciones
          </div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: "rgba(255,255,255,0.6)",
              marginTop: "8px",
            }}
          >
            Meal prep · Puebla y Cholula
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
