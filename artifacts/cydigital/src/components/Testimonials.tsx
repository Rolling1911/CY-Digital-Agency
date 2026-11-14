import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Testimonials() {
  const { t, language } = useLanguage();

  const testimonials = [
    {
      initials: "ΑΣ",
      name: "Αντώνης Σταύρου",
      role: t.t1_role,
      quote: t.t1_quote,
      result: t.t1_result,
      accent: "#3155F5",
    },
    {
      initials: "ΜΧ",
      name: "Μαρία Χριστοδούλου",
      role: t.t2_role,
      quote: t.t2_quote,
      result: t.t2_result,
      accent: "#FF6633",
    },
    {
      initials: "ΚΝ",
      name: "Κώστας Νεοφύτου",
      role: t.t3_role,
      quote: t.t3_quote,
      result: t.t3_result,
      accent: "#3155F5",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#F7F5EF] py-20 md:py-28">
      <div className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-[#3155F5]/[0.045] blur-[120px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 xl:px-16">
        <div className="mb-14 grid gap-6 md:mb-16 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <span className="mb-5 inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] text-[#FF6633]">
              <span className="h-px w-8 bg-[#FF6633]" />
              {language === "el" ? "ΤΙ ΛΕΝΕ ΟΙ ΠΕΛΑΤΕΣ ΜΑΣ" : "WHAT CLIENTS SAY"}
            </span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-[#171717] md:text-5xl lg:text-6xl"
            >
              {t.testimonials_heading}
              <span className="text-[#3155F5]">.</span>
            </motion.h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-[#171717]/65 md:justify-self-end">
            {language === "en"
              ? "Real experiences from people who have worked with us. The best measure of our work is the value it creates for the businesses behind it."
              : "Πραγματικές εμπειρίες από ανθρώπους που συνεργάστηκαν μαζί μας. Η αξία της δουλειάς μας φαίνεται στο αποτέλεσμα που δημιουργεί για κάθε επιχείρηση."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="group flex min-h-[340px] flex-col rounded-sm border border-[#171717]/[0.08] bg-white p-7 transition-all duration-300 hover:border-[#3155F5]/30 hover:shadow-[0_14px_40px_rgba(23,23,23,0.06)] md:p-8"
            >
              <div className="mb-8 flex items-start justify-between">
                <div
                  className="flex h-11 w-11 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ backgroundColor: item.accent }}
                >
                  {item.initials}
                </div>

                <Quote
                  size={30}
                  strokeWidth={1.5}
                  className="text-[#171717]/15 transition-colors duration-300 group-hover:text-[#FF6633]"
                />
              </div>

              <p className="mb-8 flex-1 text-[15px] leading-[1.85] text-[#171717]/75">
                “{item.quote}”
              </p>

              <div className="mb-6 h-px bg-[#171717]/10" />

              <div className="mb-5">
                <h3 className="text-sm font-semibold text-[#171717]">
                  {item.name}
                </h3>
                <p className="mt-1 text-xs text-[#171717]/50">{item.role}</p>
              </div>

              <div
                className="inline-flex self-start rounded-sm px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em]"
                style={{
                  color: item.accent,
                  backgroundColor: `${item.accent}18`,
                }}
              >
                {item.result}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
