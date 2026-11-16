import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { Services } from "@/components/Services";
import { AIServices } from "@/components/AIServices";
import { HowItWorks } from "@/components/HowItWorks";
import { Packages } from "@/components/Packages";
import { ContentCreation } from "@/components/ContentCreation";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { StrongCta } from "@/components/StrongCta";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

export default function Home() {
  const { t } = useLanguage();

  useEffect(() => {
    const target = sessionStorage.getItem("scrollTo");
    if (!target) return;
    sessionStorage.removeItem("scrollTo");
    const attempt = (tries: number) => {
      const el = document.getElementById(target);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else if (tries > 0) {
        setTimeout(() => attempt(tries - 1), 150);
      }
    };
    setTimeout(() => attempt(10), 200);
  }, []);

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
        <Packages />
        <ContentCreation />
        <AIServices />
        <WhyUs />
        <Testimonials />
        <StrongCta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
