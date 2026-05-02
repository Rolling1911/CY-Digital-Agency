import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function TrustBar() {
  const { t } = useLanguage();

  const stats = [
    { number: "100+", label: "Projects Delivered" },
    { number: "5+",   label: t.trust_years },
    { number: "100%", label: t.trust_dedication },
    { number: "24h",  label: t.trust_communication },
  ];

  return (
    <section className="relative bg-[#080808] py-7 md:py-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(212,175,55,0.045) 0%, transparent 70%)" }} />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, boxShadow: "0 0 0 1px rgba(212,175,55,0.55), 0 12px 40px rgba(212,175,55,0.13), 0 0 60px rgba(212,175,55,0.06)" }}
              className="relative group cursor-default text-center"
              style={{
                padding: "22px 16px 18px",
                background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)",
                backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(212,175,55,0.2)", borderRadius: "20px",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" style={{ width: "60%", background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
              <div className="text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform duration-400" style={{ fontSize: "11px", letterSpacing: "4px", opacity: 0.6 }}>✦</div>
              <div className="trust-stat-number" style={{ fontSize: "clamp(36px, 5vw, 52px)", fontWeight: 700, color: "#D4AF37", lineHeight: 1, fontFamily: "Cormorant Garamond, serif", textShadow: "0 0 30px rgba(212,175,55,0.35)", letterSpacing: "-1px" }}>
                {stat.number}
              </div>
              <div className="mx-auto my-3" style={{ width: "28px", height: "1px", background: "rgba(212,175,55,0.35)" }} />
              <div style={{ fontSize: "11px", letterSpacing: "1.8px", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", lineHeight: 1.5, fontFamily: "Inter, sans-serif" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
