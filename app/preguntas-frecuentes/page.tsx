import Link from "next/link";
import FAQ from "../components/FAQ";
import { faqs } from "@/lib/content";

export const metadata = {
  title: "Preguntas frecuentes — Delipks | Meal prep en Puebla",
  description:
    "Resolvemos tus dudas sobre pedidos, entregas, planes y suscripciones de Delipks.",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PreguntasFrecuentesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-6 pt-10 lg:px-10">
        <Link href="/" className="text-[13px] text-muted transition-opacity hover:opacity-70">
          ← Volver al inicio
        </Link>
      </div>
      <FAQ />
    </main>
  );
}
