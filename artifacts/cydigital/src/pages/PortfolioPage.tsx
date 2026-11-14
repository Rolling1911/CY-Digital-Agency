import { Header } from "@/components/Header";
import { Portfolio } from "@/components/Portfolio";
import { Footer } from "@/components/Footer";
import { InternalPageHero } from "@/components/InternalPageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

export default function PortfolioPage() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  useSEO({
    title: isEnglish
      ? "Our Work | CYDigital Portfolio Cyprus"
      : "Portfolio | CYDigital - Δείγματα Δουλειάς Κύπρος",
    description: isEnglish
      ? "Explore CYDigital projects across website design, branding, social media and digital campaigns for businesses in Cyprus."
      : "Δείτε τα δείγματα δουλειάς της CYDigital. Ιστοσελίδες, branding, social media και digital campaigns για επιχειρήσεις στην Κύπρο.",
    path: "/portfolio",
  });

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5EF] text-[#171717]">
      <Header />
      <main className="flex-1">
        <InternalPageHero
          eyebrow={isEnglish ? "SELECTED PROJECTS" : "ΕΠΙΛΕΓΜΕΝΑ PROJECTS"}
          title={isEnglish ? "Our Work" : "Δείγματα Δουλειάς"}
          subtitle={
            isEnglish
              ? "A selection of digital work created to help real businesses move forward."
              : "Επιλεγμένα digital projects που βοηθούν πραγματικές επιχειρήσεις να εξελιχθούν."
          }
        />
        <Portfolio showHeading={false} />
        <section className="border-t border-[#171717]/10 bg-[#171717] py-16 text-center text-white md:py-20">
          <div className="mx-auto max-w-3xl px-5">
            <div className="mb-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#FF8A65]">
              {isEnglish ? "HAVE A PROJECT IN MIND?" : "ΕΧΕΤΕ ΚΑΠΟΙΟ PROJECT ΣΤΟ ΜΥΑΛΟ;"}
            </div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.06em] md:text-4xl">
              {isEnglish
                ? "Ready to build something meaningful?"
                : "Έτοιμοι για το επόμενο project;"}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/60 md:text-base">
              {isEnglish
                ? "Tell us about your goals and let's explore how we can help."
                : "Επικοινωνήστε μαζί μας για να συζητήσουμε τους στόχους σας και πώς μπορούμε να βοηθήσουμε."}
            </p>
            <a
              href="/epikoinonia"
              className="mt-8 inline-flex min-h-[52px] items-center gap-4 rounded-full bg-[#3155F5] px-7 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-all hover:-translate-y-1 hover:bg-[#2444D8]"
            >
              {isEnglish ? "Start a Conversation" : "Ζητήστε Προσφορά"}
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
