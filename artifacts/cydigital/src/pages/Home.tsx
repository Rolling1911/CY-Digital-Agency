import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { AIServices } from "@/components/AIServices";
import { HowItWorks } from "@/components/HowItWorks";
import { Packages } from "@/components/Packages";
import { ContentCreation } from "@/components/ContentCreation";
import { Portfolio } from "@/components/Portfolio";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { StrongCta } from "@/components/StrongCta";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

export default function Home() {
  const { t } = useLanguage();

  useSEO({
    title: "CYDigital | Premium Digital Agency Κύπρος",
    description: "Premium ιστοσελίδες, social media management, γραφιστικά και digital στρατηγική για επιχειρήσεις που θέλουν να ξεχωρίσουν στην Κύπρο.",
    path: "/",
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <Portfolio />
        <Packages />
        <ContentCreation />
        <AIServices />
        <WhyUs />
        <Testimonials />
        <StrongCta />
        <Contact />
      </main>
      <Footer />

      {/* Floating Mobile CTA */}
      <button
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden bg-[#D4AF37] text-black font-semibold uppercase tracking-widest text-xs px-8 py-3 shadow-[0_0_20px_rgba(212,175,55,0.4)] whitespace-nowrap"
        data-testid="button-floating-cta"
        onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
      >
        {t.floating_cta}
      </button>
    </div>
  );
}
