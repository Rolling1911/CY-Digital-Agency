import { motion } from "framer-motion";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function StrongCta() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPackages = () => {
    document.querySelector("#packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#F7F5EF] py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[#3155F5]/[0.07] blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden border border-[#171717]/10 bg-white px-7 py-12 md:px-14 md:py-16 lg:px-20 lg:py-20"
        >
          <div
            aria-hidden="true"
            className="absolute right-0 top-0 h-2 w-32 bg-[#3155F5] md:w-48"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-10 select-none text-[220px] font-bold leading-none tracking-tighter text-[#171717]/[0.025] md:-bottom-32 md:right-0 md:text-[340px]"
          >
            →
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#FF6633]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#171717]/60">
                {t.cta_label}
              </span>
            </div>

            <h2 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.05em] text-[#171717] md:text-6xl lg:text-7xl">
              {t.cta_heading_1}
              <br />
              <span className="text-[#3155F5]">
                {t.cta_heading_2}
              </span>
              <span className="text-[#FF6633]">.</span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-[#171717]/60 md:text-base">
              {t.cta_subtitle}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <motion.button
                onClick={scrollToContact}
                data-testid="button-strong-cta-primary"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex min-h-14 items-center justify-center gap-5 bg-[#3155F5] px-7 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:bg-[#2445DC]"
              >
                {t.cta_btn_primary}
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>

              <motion.button
                onClick={scrollToPackages}
                data-testid="button-strong-cta-secondary"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex min-h-14 items-center justify-center gap-4 border border-[#171717]/20 bg-transparent px-7 py-4 text-[11px] font-bold uppercase tracking-[0.16em] text-[#171717] transition-colors duration-300 hover:border-[#171717] hover:bg-[#171717] hover:text-white"
              >
                {t.cta_btn_secondary}
                <ArrowDownRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                />
              </motion.button>
            </div>
          </div>

          <div className="relative z-10 mt-14 flex items-center justify-between border-t border-[#171717]/10 pt-5">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#171717]/40">
              CY DIGITAL AGENCY
            </span>
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#171717]/40">
              CREATIVE · DIGITAL · GROWTH
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
