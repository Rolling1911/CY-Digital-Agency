import { Header } from "@/components/Header";
import { Packages } from "@/components/Packages";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { InternalPageHero } from "@/components/InternalPageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

export default function PackagesPage() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  useSEO({
    title: isEnglish
      ? "Packages & Pricing | CYDigital Cyprus"
      : "Πακέτα & Τιμές | CYDigital Κύπρος",
    description: isEnglish
      ? "Explore CYDigital digital service packages. Compare Launch, Growth and Scale and find the right solution for your business in Cyprus."
      : "Δείτε τα πακέτα ψηφιακών υπηρεσιών της CYDigital. Launch, Growth και Scale — βρείτε τη λύση που ταιριάζει στην επιχείρησή σας στην Κύπρο.",
    path: "/paketa",
  });

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5EF] text-[#171717]">
      <Header />
      <main className="flex-1">
        <InternalPageHero
          eyebrow={isEnglish ? "CLEAR OPTIONS. SMARTER GROWTH." : "ΞΕΚΑΘΑΡΕΣ ΕΠΙΛΟΓΕΣ. ΕΞΥΠΝΗ ΑΝΑΠΤΥΞΗ."}
          title={isEnglish ? "Packages & Pricing" : "Πακέτα & Τιμές"}
          subtitle={
            isEnglish
              ? "Strategic digital solutions shaped around your business needs and ambitions."
              : "Στρατηγικές ψηφιακές λύσεις προσαρμοσμένες στις ανάγκες και τους στόχους της επιχείρησής σας."
          }
        />
        <Packages />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
