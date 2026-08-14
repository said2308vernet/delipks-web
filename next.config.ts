import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Dominios externos reales usados en runtime (ver app/layout.tsx, PaypalButton.tsx,
// GoogleIdentityButton.tsx): GA/GTM, Meta Pixel, PayPal SDK, Google Identity.
// Sin nonce a propósito -- el bootstrap de GA/Pixel es dangerouslySetInnerHTML
// inline, y pasar a nonce forzaría dynamic rendering en todo el sitio (se
// pierde ISR/cache de CDN de un sitio de marketing). 'unsafe-inline' sigue
// bloqueando que un script inyectado cargue JS desde un dominio no listado.
const csp = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ""} https://www.googletagmanager.com https://connect.facebook.net https://www.paypal.com https://www.paypalobjects.com https://accounts.google.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https://images.unsplash.com https://plus.unsplash.com https://www.facebook.com https://www.paypalobjects.com;
  font-src 'self' data:;
  connect-src 'self' https://www.google-analytics.com https://www.paypal.com https://accounts.google.com;
  frame-src https://www.paypal.com https://accounts.google.com;
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        ],
      },
    ];
  },
};

export default nextConfig;
