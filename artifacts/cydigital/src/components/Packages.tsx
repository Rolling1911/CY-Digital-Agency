import { motion } from "framer-motion";
import { Check, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Packages() {
  const { t, language } = useLanguage();
  const isGreek = language === "el";

  const packages = [
    {
      name: "Launch",
      tagline: t.pkg_launch_tagline,
      features: isGreek
        ? [
            "8 αναρτήσεις στα social media / μήνα",
            "Βασικός γραφιστικός σχεδιασμός",
            "Δημιουργία ή ρύθμιση Google Business",
            "Μηνιαία αναφορά απόδοσης",
          ]
        : [
            "8 social media posts per month",
            "Basic graphic design",
            "Google Business setup",
            "Monthly performance report",
          ],
      cta: t.pkg_cta_quote,
      featured: false,
    },
    {
      name: "Growth",
      tagline: t.pkg_growth_tagline,
      features: isGreek
        ? [
            "12–16 αναρτήσεις στα social media / μήνα",
            "Ιδέες για Reels και video content",
            "Δημιουργία landing page",
            "Διαχείριση διαφημιστικών καμπανιών",
            "Μηνιαία συνάντηση στρατηγικής",
          ]
        : [
            "12–16 social media posts per month",
            "Reels and video content ideas",
            "Landing page creation",
            "Advertising campaign management",
            "Monthly strategy call",
          ],
      cta: t.pkg_cta_talk,
      featured: true,
    },
    {
      name: "Scale",
      tagline: t.pkg_scale_tagline,
      features: isGreek
        ? [
            "Δημιουργία ολοκληρωμένης ιστοσελίδας",
            "Διαχείριση social media",
            "Γραφιστικός σχεδιασμός και branding",
            "Διαχείριση διαφημίσεων Meta και Google",
            "Μηνιαία στρατηγική αξιολόγηση",
            "Υποστήριξη κατά προτεραιότητα",
          ]
        : [
            "Full website creation",
            "Social media management",
            "Graphic design and branding",
            "Meta and Google ads management",
            "Monthly strategy review",
            "Priority support",
          ],
      cta: t.pkg_cta_meeting,
      featured: false,
    },
  ];

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="packages"
      className="bg-[#F7F5EF] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 xl:px-16">
        <div className="mb-14 text-center md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-[2px] w-7 bg-[#FF6633]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3155F5]">
              {isGreek ? "ΣΥΝΕΡΓΑΣΙΑ" : "WORK WITH US"}
            </span>
            <span className="h-[2px] w-7 bg-[#FF6633]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-[clamp(2.4rem,5vw,4.7rem)] font-extrabold leading-[1.04] tracking-[-0.07em] text-[#171717]"
          >
            {t.packages_heading}
            <span className="text-[#3155F5]">.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mx-auto mt-5 max-w-[560px] text-[14px] leading-[1.9] text-[#171717]/55"
          >
            {isGreek
              ? "Επιλέξτε το επίπεδο υποστήριξης που ταιριάζει στους στόχους της επιχείρησής σας."
              : "Choose the level of support that matches your business goals."}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3 lg:gap-6">
          {packages.map((pkg, index) => (
            <motion.article
              key={pkg.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.09,
                ease: [0.16, 1, 0.3, 1],
              }}
              data-testid={`package-card-${pkg.name.toLowerCase()}`}
              className={`relative flex h-full flex-col border p-7 md:p-8 ${
                pkg.featured
                  ? "border-[#3155F5] bg-[#171717] text-white shadow-[0_20px_55px_rgba(49,85,245,0.13)]"
                  : "border-[#171717]/10 bg-white text-[#171717]"
              }`}
            >
              {pkg.featured && (
                <span className="absolute right-6 top-0 -translate-y-1/2 bg-[#3155F5] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.16em] text-white">
                  {isGreek ? "ΠΡΟΤΕΙΝΟΜΕΝΟ" : "RECOMMENDED"}
                </span>
              )}

              <div className="mb-7 flex items-center justify-between">
                <span
                  className={`text-[10px] font-bold uppercase tracking-[0.18em] ${
                    pkg.featured ? "text-[#8FA2FF]" : "text-[#3155F5]"
                  }`}
                >
                  {isGreek ? "ΠΑΚΕΤΟ" : "PACKAGE"} 0{index + 1}
                </span>
                <span
                  className={`h-2 w-2 ${
                    pkg.featured ? "bg-[#FF6633]" : "bg-[#3155F5]"
                  }`}
                />
              </div>

              <h3 className="text-[32px] font-extrabold tracking-[-0.06em]">
                {pkg.name}
              </h3>

              <p
                className={`mt-3 min-h-[52px] text-[13px] leading-[1.8] ${
                  pkg.featured ? "text-white/55" : "text-[#171717]/55"
                }`}
              >
                {pkg.tagline}
              </p>

              <div
                className={`my-7 border-y py-5 ${
                  pkg.featured ? "border-white/15" : "border-[#171717]/10"
                }`}
              >
                <span
                  className={`text-[10px] font-bold uppercase tracking-[0.14em] ${
                    pkg.featured ? "text-[#8FA2FF]" : "text-[#3155F5]"
                  }`}
                >
                  {t.packages_customized}
                </span>
              </div>

              <ul className="mb-9 flex flex-1 flex-col gap-4">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
                      strokeWidth={2}
                      className={`mt-[2px] shrink-0 ${
                        pkg.featured ? "text-[#FF6633]" : "text-[#3155F5]"
                      }`}
                    />
                    <span
                      className={`text-[13px] leading-[1.65] ${
                        pkg.featured ? "text-white/80" : "text-[#171717]/75"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                data-testid={`button-package-${pkg.name.toLowerCase()}`}
                className={`group flex w-full items-center justify-between gap-3 px-5 py-4 text-left text-[10px] font-bold uppercase tracking-[0.12em] transition-all duration-300 ${
                  pkg.featured
                    ? "bg-[#3155F5] text-white hover:bg-[#2445DC]"
                    : "border border-[#171717]/20 bg-transparent text-[#171717] hover:border-[#3155F5] hover:bg-[#3155F5] hover:text-white"
                }`}
              >
                <span>{pkg.cta}</span>
                <ArrowUpRight
                  size={17}
                  className="shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </button>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-9 text-center text-[11px] leading-[1.8] text-[#171717]/45"
        >
          {t.packages_footer_note}
        </motion.p>
      </div>
    </section>
  );
}
