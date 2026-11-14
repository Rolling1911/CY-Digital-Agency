import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function TrustBar() {
  const { language } = useLanguage();
  const isGreek = language === "el";

  const capabilities = isGreek
    ? ["Στρατηγική", "Design", "Ανάπτυξη", "Digital Growth"]
    : ["Strategy", "Design", "Development", "Digital Growth"];

  return (
    <section className="relative overflow-hidden border-y border-[#171717]/10 bg-white py-10 md:py-14">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 xl:px-16">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-[430px]"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF6633]" />
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#3155F5]">
                {isGreek ? "ΤΙ ΚΑΝΟΥΜΕ" : "WHAT WE DO"}
              </span>
            </div>

            <h2 className="text-[clamp(1.35rem,2.5vw,2rem)] font-bold leading-[1.2] tracking-[-0.045em] text-[#171717]">
              {isGreek
                ? "Από την πρώτη ιδέα μέχρι την ψηφιακή παρουσία."
                : "From the first idea to your digital presence."}
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-6 md:grid-cols-4 md:gap-5">
            {capabilities.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group border-t border-[#171717]/15 pt-4"
              >
                <span className="mb-3 block text-[10px] font-bold tracking-[0.15em] text-[#3155F5]">
                  0{index + 1}
                </span>
                <span className="block text-[13px] font-bold tracking-[-0.02em] text-[#171717] transition-colors duration-200 group-hover:text-[#3155F5] md:text-[14px]">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
