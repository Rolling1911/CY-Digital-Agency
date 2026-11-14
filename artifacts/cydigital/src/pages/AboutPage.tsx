import { Header } from "@/components/Header";
import { WhyUs } from "@/components/WhyUs";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { InternalPageHero } from "@/components/InternalPageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

export default function AboutPage() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  useSEO({
    title: isEnglish
      ? "Why CYDigital | Digital Agency Cyprus"
      : "Γιατί CYDigital | Premium Digital Agency Κύπρος",
    description: isEnglish
      ? "Discover why businesses in Cyprus choose CYDigital for strategy-led digital services, thoughtful execution and measurable growth."
      : "Μάθετε γιατί επιχειρήσεις στην Κύπρο επιλέγουν την CYDigital. Strategy-first προσέγγιση, premium εκτέλεση και αποδεδειγμένα αποτελέσματα.",
    path: "/giati-emas",
  });

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5EF] text-[#171717]">
      <Header />
      <main className="flex-1">
        <InternalPageHero
          eyebrow={isEnglish ? "ABOUT CYDIGITAL" : "ΣΧΕΤΙΚΑ ΜΕ ΤΗΝ CYDIGITAL"}
          title={isEnglish ? "Why CYDigital" : "Γιατί CYDigital"}
          subtitle={
            isEnglish
              ? "A strategy-first approach, considered execution and a focus on meaningful results."
              : "Strategy-first προσέγγιση, premium εκτέλεση και έμφαση σε ουσιαστικά αποτελέσματα."
          }
        />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
