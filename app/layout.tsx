import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-general-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "DELIPKS — Comida saludable y lista, sin preocupaciones",
  description:
    "Platillos frescos, balanceados y preparados por nutriólogos. Entregamos en Puebla y Cholula.",
  keywords: ["meal prep", "comida saludable", "Puebla", "Cholula", "alimentación", "delivery", "nutrición", "delipks"],
  authors: [{ name: "Delipks" }],
  metadataBase: new URL("https://delipks.com"),
  openGraph: {
    title: "DELIPKS — Comida saludable y lista, sin preocupaciones",
    description: "Platillos frescos, balanceados y preparados por nutriólogos. Entregamos en Puebla y Cholula.",
    url: "https://delipks.com",
    siteName: "Delipks",
    locale: "es_MX",
    type: "website",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Delipks logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DELIPKS — Comida saludable y lista",
    description: "Platillos frescos, balanceados y preparados por nutriólogos. Entregamos en Puebla y Cholula.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="es" className={`${manrope.variable} ${inter.variable} h-full antialiased`}>
      <head>
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
              }}
            />
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#contenido-principal" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-bg">
          Ir al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
