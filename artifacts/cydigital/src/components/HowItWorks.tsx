import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function HowItWorks() {
  const { t, language } = useLanguage();
  const isGreek = language === "el";

  const steps = [
    { num: "01", title: t.how_step1_title, desc: t.how_step1_desc },
    { num: "02", title: t.how_step2_title, desc: t.how_step2_desc },
    { num: "03", title: t.how_step3_title, desc: t.how_step3_desc },
    { num: "04", title: t.how_step4_title, desc: t.how_step4_desc },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 xl:px-16">
        <div className="mb-16 grid items-end gap-6 md:mb-20 md:grid-cols-[1fr_0.65fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#FF6633]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3155F5]">
                {isGreek ? "Η ΔΙΑΔΙΚΑΣΙΑ ΜΑΣ" : "OUR PROCESS"}
              </span>
            </div>

            <h2 className="max-w-[700px] text-[clamp(2.4rem,5vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.07em] text-[#171717]">
              {t.how_heading_1}{" "}
              <span className="text-[#3155F5]">{t.how_heading_2}</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="max-w-[420px] pb-1 text-[14px] leading-[1.9] text-[#171717]/60 md:justify-self-end md:text-[15px]"
          >
            {isGreek
              ? "Μια ξεκάθαρη διαδικασία, από την πρώτη συζήτηση μέχρι την ολοκλήρωση του έργου σας."
              : "A clear, collaborative process, from the first conversation to the delivery of your project."}
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-0 right-0 top-[31px] hidden h-px bg-[#171717]/10 md:block" />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative"
              >
                <div className="relative z-10 mb-8 flex items-center justify-between md:mb-10">
                  <span
                    className={`flex h-[62px] w-[62px] items-center justify-center border text-[15px] font-bold tracking-[-0.04em] ${
                      index === 0
                        ? "border-[#3155F5] bg-[#3155F5] text-white"
                        : "border-[#171717]/15 bg-white text-[#171717]"
                    }`}
                  >
                    {step.num}
                  </span>

                  {index < steps.length - 1 && (
                    <ArrowRight
                      size={17}
                      strokeWidth={1.4}
                      className="text-[#171717]/25 md:hidden"
                    />
                  )}
                </div>

                <div className="mb-4 h-[3px] w-8 bg-[#FF6633]" />

                <h3 className="mb-3 text-[19px] font-bold leading-[1.3] tracking-[-0.04em] text-[#171717]">
                  {step.title}
                </h3>

                <p className="max-w-[290px] text-[13px] leading-[1.85] text-[#171717]/55">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
