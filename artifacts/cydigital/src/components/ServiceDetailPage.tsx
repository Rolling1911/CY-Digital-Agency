import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { useSEO } from "@/hooks/useSEO";
import { getLanguageRoute, languageRoutes } from "@/lib/languageRoutes";

interface ServiceCopy {
  title: string;
  subtitle: string;
  heading: string;
  paragraphs: [string, string];
  featuresHeading: string;
  features: string[];
  seoTitle: string;
  seoDescription: string;
}

interface RelatedService {
  href: string;
  el: string;
  en: string;
}

interface ServiceDetailPageProps {
  icon: LucideIcon;
  path: string;
  greek: ServiceCopy;
  english: ServiceCopy;
  relatedServices: RelatedService[];
}

export function ServiceDetailPage({
  icon: Icon,
  path,
  greek,
  english,
  relatedServices,
}: ServiceDetailPageProps) {
  const { language } = useLanguage();
  const copy = language === "en" ? english : greek;

  useSEO({
    title: copy.seoTitle,
    description: copy.seoDescription,
    path,
  });

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F5EF] text-[#171717]">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-[#171717]/10 bg-[#F7F5EF]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "linear-gradient(rgba(23,23,23,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(23,23,23,0.045) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "linear-gradient(to bottom, black, transparent 90%)",
            }}
          />

          <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-32 md:px-8 md:pb-20 lg:px-12 xl:px-16">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="mb-7 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#FF6633]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#3155F5]">
                  {language === "el"
                    ? "ΨΗΦΙΑΚΕΣ ΥΠΗΡΕΣΙΕΣ · ΚΥΠΡΟΣ"
                    : "DIGITAL SERVICES · CYPRUS"}
                </span>
              </div>

              <div className="mb-7 flex h-14 w-14 items-center justify-center bg-[#3155F5] text-white">
                <Icon size={27} strokeWidth={1.6} />
              </div>

              <h1 className="max-w-4xl text-[clamp(2.6rem,6vw,5.5rem)] font-extrabold leading-[1.02] tracking-[-0.075em]">
                {copy.title}
                <span className="text-[#3155F5]">.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-[1.85] text-[#171717]/65 md:text-lg">
                {copy.subtitle}
              </p>

              <a
                href={getLanguageRoute("contact", language)}
                className="mt-9 inline-flex min-h-[54px] items-center gap-5 rounded-full bg-[#3155F5] px-7 text-[11px] font-bold uppercase tracking-[0.12em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2444D8] hover:shadow-[0_12px_30px_rgba(49,85,245,0.2)]"
              >
                {language === "el" ? "Ζητήστε Προσφορά" : "Request a Quote"}
                <span aria-hidden="true">↗</span>
              </a>
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-start gap-12 px-5 md:px-8 lg:grid-cols-[1fr_0.85fr] lg:gap-20 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-7 bg-[#FF6633]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3155F5]">
                  {language === "el" ? "Η ΠΡΟΣΕΓΓΙΣΗ ΜΑΣ" : "OUR APPROACH"}
                </span>
              </div>

              <h2 className="max-w-xl text-3xl font-extrabold leading-tight tracking-[-0.055em] md:text-4xl">
                {copy.heading}
              </h2>

              {copy.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mt-6 max-w-2xl text-[15px] leading-[1.9] text-[#171717]/65"
                >
                  {paragraph}
                </p>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="border border-[#171717]/10 bg-[#F7F5EF] p-7 md:p-9"
            >
              <h3 className="mb-7 text-xl font-extrabold tracking-[-0.04em]">
                {copy.featuresHeading}
              </h3>

              <div className="flex flex-col gap-5">
                {copy.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3155F5] text-xs font-bold text-white">
                      ✓
                    </span>
                    <span className="text-sm leading-relaxed text-[#171717]/75">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="border-t border-[#171717]/10 bg-[#F7F5EF] py-14">
          <div className="mx-auto max-w-[1280px] px-5 text-center md:px-8 lg:px-12">
            <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#3155F5]">
              {language === "el" ? "ΑΝΑΚΑΛΥΨΤΕ ΠΕΡΙΣΣΟΤΕΡΑ" : "EXPLORE MORE"}
            </div>

            <h2 className="mb-8 text-2xl font-extrabold tracking-[-0.05em] md:text-3xl">
              {language === "el" ? "Οι υπηρεσίες μας" : "Our Services"}
            </h2>

            <div className="flex flex-wrap justify-center gap-3">
              {relatedServices.map((service) => (
                <a
                  key={service.href}
                  href={
                    language === "en"
                      ? Object.values(languageRoutes).find(
                          (routes) => routes.el === service.href,
                        )?.en ?? service.href
                      : service.href
                  }
                  className="border border-[#171717]/15 bg-white px-5 py-3 text-xs font-bold text-[#171717]/75 transition-all hover:border-[#3155F5] hover:text-[#3155F5]"
                >
                  {language === "el" ? service.el : service.en}
                  <span className="ml-2 text-[#FF6633]">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
