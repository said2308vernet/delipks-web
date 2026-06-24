import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import HowItWorks from "./components/HowItWorks";
import Goals from "./components/Goals";
import FeaturedCatalog from "./components/FeaturedCatalog";
import Plans from "./components/Plans";
import DelipksImpacta from "./components/DelipksImpacta";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <HowItWorks />
        <Goals />
        <FeaturedCatalog />
        <Plans />
        <DelipksImpacta />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
