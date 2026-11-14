import { Header } from "@/components/Header";
import { ContentCreation } from "@/components/ContentCreation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { InternalPageHero } from "@/components/InternalPageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

export default function ContentCreationPage() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  useSEO({
    title: isEnglish
      ? "Content Creation Cyprus | CYDigital"
      : "Δημιουργία Περιεχομένου Κύπρος | CYDigital",
    description: isEnglish
      ? "Professional photography and video production for businesses in Cyprus. Create content that elevates your brand and connects with your audience."
      : "Επαγγελματική φωτογράφιση και βίντεο για επιχειρήσεις στην Κύπρο. Περιεχόμενο που αναδεικνύει το brand σας και αυξάνει τις πωλήσεις.",
    path: "/ypiresies/dimioyrgia-periekhomenou",
  });

  const otherServices = [
    {
      href: "/ypiresies/kataskevi-istoselidas",
      el: "Κατασκευή Ιστοσελίδας",
      en: "Website Design",
    },
    {
      href: "/ypiresies/social-media",
      el: "Social Media Management",
      en: "Social Media Management",
    },
    {
      href: "/ypiresies/grafistika",
      el: "Γραφιστικά & Branding",
      en: "Graphic Design & Branding",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5EF] text-[#171717]">
      <Header />
      <main className="flex-1">
        <InternalPageHero
          eyebrow={isEnglish ? "CONTENT PRODUCTION" : "ΠΑΡΑΓΩΓΗ ΠΕΡΙΕΧΟΜΕΝΟΥ"}
          title={
            isEnglish
              ? "Content Creation in Cyprus"
              : "Δημιουργία Περιεχομένου στην Κύπρο"
          }
          subtitle={
            isEnglish
              ? "Professional photography and video that bring your brand to life."
              : "Επαγγελματικές φωτογραφίες & βίντεο που αναδεικνύουν το brand σας."
          }
        />
        <ContentCreation />
        <section className="border-t border-[#171717]/10 bg-[#F7F5EF] py-14">
          <div className="mx-auto max-w-[1280px] px-5 text-center md:px-8 lg:px-12">
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#3155F5]">
              {isEnglish ? "EXPLORE MORE" : "ΑΝΑΚΑΛΥΨΤΕ ΠΕΡΙΣΣΟΤΕΡΑ"}
            </div>
            <h2 className="mb-8 text-2xl font-extrabold tracking-[-0.05em] md:text-3xl">
              {isEnglish ? "Our other services" : "Άλλες υπηρεσίες"}
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {otherServices.map((service) => (
                <a
                  key={service.href}
                  href={service.href}
                  className="border border-[#171717]/15 bg-white px-5 py-3 text-xs font-bold text-[#171717]/75 transition-all hover:border-[#3155F5] hover:text-[#3155F5]"
                >
                  {isEnglish ? service.en : service.el}
                  <span className="ml-2 text-[#FF6633]">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
