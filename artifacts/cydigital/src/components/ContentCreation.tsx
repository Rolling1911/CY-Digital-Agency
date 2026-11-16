import { motion } from "framer-motion";
import { Camera, Video, Clapperboard, Film, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContentCreation() {
  const { t, language } = useLanguage();

  const features = [
    { icon: Camera, number: "01", title: t.content_f1_title, desc: t.content_f1_desc },
    { icon: Video, number: "02", title: t.content_f2_title, desc: t.content_f2_desc },
    { icon: Clapperboard, number: "03", title: t.content_f3_title, desc: t.content_f3_desc },
    { icon: Film, number: "04", title: t.content_f4_title, desc: t.content_f4_desc },
  ];



  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="content-creation"
      className="relative overflow-hidden bg-[#F7F5EF] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#3155F5]/[0.045] blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-48 -left-40 h-[450px] w-[450px] rounded-full bg-[#FF6633]/[0.035] blur-[120px]" />

      <div className="container relative z-10 mx-auto px-5 md:px-8">
        <div className="mb-14 grid gap-8 md:grid-cols-2 md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#FF6633]">
              <span className="h-px w-8 bg-[#FF6633]" />
              {language === "el" ? "ΔΗΜΙΟΥΡΓΙΚΗ ΠΑΡΑΓΩΓΗ" : "CREATIVE PRODUCTION"}
            </p>

            <h2 className="max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-[#171717] md:text-6xl">
              {language === "el" ? (
                <>
                  Περιεχόμενο που
                  <span className="text-[#3155F5]"> τραβάει</span>
                  <br />
                  την προσοχή.
                </>
              ) : (
                <>
                  Content that
                  <span className="text-[#3155F5]"> earns</span>
                  <br />
                  attention.
                </>
              )}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="max-w-lg text-base leading-8 text-[#171717]/65 md:justify-self-end md:text-lg"
          >
            {t.content_subtitle}
          </motion.p>
        </div>

        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group border border-[#171717]/[0.08] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#3155F5]/30 hover:shadow-[0_14px_40px_rgba(23,23,23,0.06)] md:p-7"
              >
                <div className="mb-9 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3155F5]/[0.09] text-[#3155F5] transition-colors group-hover:bg-[#3155F5] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.6} />
                  </div>

                  <span className="text-xs font-medium tracking-widest text-[#171717]/30">
                    / {feature.number}
                  </span>
                </div>

                <h3 className="mb-3 text-lg font-semibold leading-snug text-[#171717]">
                  {feature.title}
                </h3>

                <p className="text-sm leading-7 text-[#171717]/60">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-[#171717]/15 pt-9 md:flex-row md:items-center">
          <div>
            <h3 className="mb-2 text-xl font-semibold text-[#171717] md:text-2xl">
              {t.content_cta_question}
            </h3>

            <p className="text-sm text-[#171717]/55">
              {language === "el"
                ? "Ας δημιουργήσουμε κάτι που αξίζει να προσέξουν."
                : "Let's create something worth paying attention to."}
            </p>
          </div>

          <Button
            onClick={scrollToContact}
            className="h-auto rounded-none bg-[#3155F5] px-7 py-4 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#2444D8]"
          >
            {t.content_cta_btn}
            <ArrowUpRight size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
