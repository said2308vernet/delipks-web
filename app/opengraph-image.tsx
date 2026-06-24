import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Delipks — Comida saludable y lista, sin preocupaciones";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const logoData = await readFile(join(process.cwd(), "public", "og-logo.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
        }}
      >
        <img
          src={logoBase64}
          width={400}
          height={400}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: "#6b7280",
            marginTop: "24px",
          }}
        >
          Comida saludable y lista · Puebla y Cholula
        </div>
      </div>
    ),
    { ...size }
  );
}
