import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { InternalPageHero } from "@/components/InternalPageHero";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";

export default function ServicesPage() {
  const { language } = useLanguage();
  const isEnglish = language === "en";

  useSEO({
    title: isEnglish
      ? "Digital Services | CYDigital Cyprus"
      : "Υπηρεσίες | CYDigital - Digital Agency Κύπρος",
    description: isEnglish
      ? "Explore digital services in Cyprus, including website development, social media management, graphic design, branding and content creation."
      : "Ολοκληρωμένες ψηφιακές υπηρεσίες στην Κύπρο: κατασκευή ιστοσελίδας, social media management, γραφιστικά, branding και δημιουργία περιεχομένου.",
    path: "/ypiresies",
  });

  const serviceLinks = [
    {
      href: "/ypiresies/kataskevi-istoselidas",
      el: "Κατασκευή Ιστοσελίδας",
      en: "Website Design",
      descEl: "Custom websites που μετατρέπουν επισκέπτες σε πελάτες.",
      descEn: "Custom websites designed to turn visitors into customers.",
    },
    {
      href: "/ypiresies/social-media",
      el: "Social Media Management",
      en: "Social Media Management",
      descEl: "Στρατηγική & περιεχόμενο που αυξάνει το engagement.",
      descEn: "Strategy and content that build engagement and community.",
    },
    {
      href: "/ypiresies/grafistika",
      el: "Γραφιστικά & Branding",
      en: "Graphic Design & Branding",
      descEl: "Οπτική ταυτότητα που αναδεικνύει το brand σας.",
      descEn: "Visual identities that make your brand stand out.",
    },
    {
      href: "/ypiresies/dimioyrgia-periekhomenou",
      el: "Δημιουργία Περιεχομένου",
      en: "Content Creation",
      descEl: "Επαγγελματικές φωτογραφίες & βίντεο για το brand σας.",
      descEn: "Professional photography and video for your brand.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5EF] text-[#171717]">
      <Header />
      <main className="flex-1">
        <InternalPageHero
          eyebrow={isEnglish ? "WHAT WE DO" : "ΤΙ ΠΡΟΣΦΕΡΟΥΜΕ"}
          title={isEnglish ? "Our Services" : "Οι Υπηρεσίες μας"}
          subtitle={
            isEnglish
              ? "Connected digital solutions that help businesses build their presence and grow."
              : "Ολοκληρωμένες ψηφιακές λύσεις για επιχειρήσεις που θέλουν να ξεχωρίσουν και να αναπτυχθούν."
          }
        />
        <Services showHeading={false} />
        <section className="border-t border-[#171717]/10 bg-[#F7F5EF] py-16 md:py-20">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
            <div className="mb-10 text-center">
              <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#3155F5]">
                {isEnglish ? "EXPLORE OUR EXPERTISE" : "ΑΝΑΚΑΛΥΨΤΕ ΤΙΣ ΥΠΗΡΕΣΙΕΣ ΜΑΣ"}
              </div>
              <h2 className="text-2xl font-extrabold tracking-[-0.05em] md:text-3xl">
                {isEnglish ? "A closer look at what we do" : "Ανακαλύψτε κάθε υπηρεσία"}
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {serviceLinks.map((service, index) => (
                <a
                  key={service.href}
                  href={service.href}
                  className="group border border-[#171717]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#3155F5]/50 hover:shadow-[0_14px_35px_rgba(23,23,23,0.06)]"
                >
                  <div className="mb-6 text-xs font-bold tabular-nums text-[#FF6633]">
                    0{index + 1}
                  </div>
                  <h3 className="mb-3 text-base font-extrabold tracking-[-0.035em] transition-colors group-hover:text-[#3155F5]">
                    {isEnglish ? service.en : service.el}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#171717]/60">
                    {isEnglish ? service.descEn : service.descEl}
                  </p>
                  <div className="mt-6 text-sm font-bold text-[#3155F5]">↗</div>
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
