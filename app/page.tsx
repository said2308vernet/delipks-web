import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import HowItWorks from "./components/HowItWorks";
import Goals from "./components/Goals";
import FeaturedCatalog from "./components/FeaturedCatalog";
import Plans from "./components/Plans";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";
import DelipksImpacta from "./components/DelipksImpacta";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import { faqs } from "@/lib/content";

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "FoodEstablishment",
  name: "Delipks",
  description: "Servicio de meal prep y comida saludable en Puebla y Cholula.",
  url: "https://delipks.com",
  telephone: "+522216544335",
  email: "hola@delipks.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Puebla",
    addressRegion: "Puebla",
    addressCountry: "MX",
  },
  areaServed: [
    { "@type": "City", name: "Puebla" },
    { "@type": "City", name: "Cholula" },
  ],
  priceRange: "$$",
  servesCuisine: "Comida saludable",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Wednesday"],
      description: "Días de entrega",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Planes de alimentación",
    itemListElement: [
      { "@type": "Offer", name: "Plan Básico", price: "810", priceCurrency: "MXN", description: "5 comidas, lunes a viernes, suscripción semanal" },
      { "@type": "Offer", name: "Plan Equilibrado", price: "1485", priceCurrency: "MXN", description: "5 desayunos + 5 comidas, lunes a viernes, suscripción semanal" },
      { "@type": "Offer", name: "Plan Completo", price: "2160", priceCurrency: "MXN", description: "5 desayunos + 5 comidas + 5 cenas, lunes a viernes, suscripción semanal" },
    ],
  },
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

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />
      <main id="contenido-principal" className="flex-1">
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Goals />
        <FeaturedCatalog />
        <Plans />
        <Testimonials />
        <AboutUs />
        <DelipksImpacta />
        <FAQ />
        <Newsletter />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
