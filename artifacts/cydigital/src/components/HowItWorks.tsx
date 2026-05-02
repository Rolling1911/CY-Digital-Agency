import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    { num: "01", title: t.how_step1_title, desc: t.how_step1_desc },
    { num: "02", title: t.how_step2_title, desc: t.how_step2_desc },
    { num: "03", title: t.how_step3_title, desc: t.how_step3_desc },
    { num: "04", title: t.how_step4_title, desc: t.how_step4_desc },
  ];

  return (
    <section id="how-it-works" className="relative py-9 md:py-16 bg-[#060606] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5"
          >
            {t.how_heading_1}{" "}
            <span className="text-[#D4AF37]">{t.how_heading_2}</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"
          />
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute top-[52px] left-[12.5%] right-[12.5%] h-px hidden md:block pointer-events-none" style={{ background: "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.25) 15%, rgba(212,175,55,0.25) 85%, transparent 100%)" }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative cursor-default"
                style={{
                  padding: "28px 20px 24px",
                  background: "linear-gradient(145deg, rgba(255,255,255,0.042) 0%, rgba(255,255,255,0.016) 100%)",
                  backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(212,175,55,0.15)", borderRadius: "18px",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                  transition: "box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.5)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 1px rgba(212,175,55,0.2), 0 16px 48px rgba(212,175,55,0.1), inset 0 1px 0 rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.15)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.05)";
                }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ width: "55%", background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />

                <div className="relative z-10 mb-5 flex justify-center">
                  <div className="group-hover:shadow-[0_0_18px_rgba(212,175,55,0.35)] group-hover:border-[rgba(212,175,55,0.6)] transition-all duration-350" style={{ width: "52px", height: "52px", borderRadius: "50%", border: "1px solid rgba(212,175,55,0.35)", background: "rgba(212,175,55,0.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "15px", fontWeight: 700, color: "#D4AF37", fontFamily: "Cormorant Garamond, serif", lineHeight: 1 }}>{step.num}</span>
                  </div>
                </div>

                <h3 className="relative z-10" style={{ fontSize: "17px", fontWeight: 700, color: "rgba(255,255,255,0.92)", marginBottom: "10px", lineHeight: 1.3, letterSpacing: "0.2px" }}>
                  {step.title}
                </h3>
                <div className="mx-auto mb-3" style={{ width: "24px", height: "1px", background: "rgba(212,175,55,0.4)" }} />
                <p className="relative z-10" style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.42)", lineHeight: 1.75, letterSpacing: "0.1px" }}>
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
