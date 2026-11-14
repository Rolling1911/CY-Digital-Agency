import { Header } from "@/components/Header";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { InternalPageHero } from "@/components/InternalPageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

export default function ContactPage() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  useSEO({
    title: isEnglish ? "Contact | CYDigital Cyprus" : "Επικοινωνία | CYDigital Κύπρος",
    description: isEnglish
      ? "Get in touch with CYDigital to discuss your business's digital needs. Start with an initial consultation, with no obligation."
      : "Επικοινωνήστε με την CYDigital για να συζητήσουμε τις ψηφιακές ανάγκες της επιχείρησής σας. Δωρεάν αρχική αξιολόγηση χωρίς δέσμευση.",
    path: "/epikoinonia",
  });

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5EF] text-[#171717]">
      <Header />
      <main className="flex-1">
        <InternalPageHero
          eyebrow={isEnglish ? "LET'S TALK" : "ΑΣ ΜΙΛΗΣΟΥΜΕ"}
          title={isEnglish ? "Contact" : "Επικοινωνία"}
          subtitle={
            isEnglish
              ? "Tell us what you are building. We'll get back to you within 24 hours."
              : "Πείτε μας τι χρειάζεται η επιχείρησή σας και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών."
          }
        />
        <Contact showHeading={false} />
      </main>
      <Footer />
    </div>
  );
}
