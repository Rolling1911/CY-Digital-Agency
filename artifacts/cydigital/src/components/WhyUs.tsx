import { motion } from "framer-motion";
import { LineChart, LayoutTemplate, Target, TrendingUp, MapPin, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhyUs() {
  const { t } = useLanguage();

  const reasons = [
    { icon: LineChart, title: t.whyus_r1_title, desc: t.whyus_r1_desc },
    { icon: LayoutTemplate, title: t.whyus_r2_title, desc: t.whyus_r2_desc },
    { icon: Target, title: t.whyus_r3_title, desc: t.whyus_r3_desc },
    { icon: TrendingUp, title: t.whyus_r4_title, desc: t.whyus_r4_desc },
    { icon: MapPin, title: t.whyus_r5_title, desc: t.whyus_r5_desc },
    { icon: Users, title: t.whyus_r6_title, desc: t.whyus_r6_desc },
  ];

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-us" className="py-9 md:py-16 bg-[#080808]">
      <div className="container mx-auto px-4 md:px-6">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center", maxWidth: "1200px", margin: "0 auto" }} className="why-us-grid">

          <motion.div
            className="why-us-left-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hidden sm:block" style={{ marginBottom: "16px" }}>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ fontSize: "11px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#D4AF37", fontWeight: 600, display: "inline-block" }}
              >
                {t.whyus_label}
              </motion.span>
            </div>

            <h2
              className="font-display"
              style={{ fontSize: "clamp(32px, 3.5vw, 50px)", fontWeight: 700, color: "#ffffff", lineHeight: 1.15, marginBottom: "24px" }}
            >
              {t.whyus_heading_1}{" "}
              <span style={{ color: "#D4AF37" }}>CYDigital</span>
            </h2>

            <div style={{ width: "80px", height: "1px", background: "linear-gradient(to right, transparent, #D4AF37, transparent)", marginBottom: "28px" }} />

            <p style={{ fontSize: "16px", color: "#BFBFBF", lineHeight: 1.8, marginBottom: "36px", maxWidth: "440px" }}>
              {t.whyus_paragraph}
            </p>

            <button
              onClick={scrollToContact}
              style={{ padding: "14px 32px", fontSize: "12px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", background: "transparent", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.5)", borderRadius: "6px", cursor: "pointer", transition: "all 0.25s ease" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(212,175,55,0.08)"; e.currentTarget.style.borderColor = "#D4AF37"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(212,175,55,0.5)"; }}
            >
              {t.whyus_cta}
            </button>
          </motion.div>

          <div className="why-us-reasons-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative cursor-default"
                style={{ padding: "22px 20px 20px", background: "linear-gradient(145deg, rgba(255,255,255,0.042) 0%, rgba(255,255,255,0.016) 100%)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(212,175,55,0.14)", borderRadius: "18px", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)", transition: "box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(212,175,55,0.48)"; el.style.boxShadow = "0 0 0 1px rgba(212,175,55,0.15), 0 14px 40px rgba(212,175,55,0.1), inset 0 1px 0 rgba(255,255,255,0.07)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(212,175,55,0.14)"; el.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.05)"; }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ width: "50%", background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
                <div className="mb-4 relative" style={{ width: "fit-content" }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)", filter: "blur(8px)", transform: "scale(1.5)" }} />
                  <div style={{ width: "42px", height: "42px", borderRadius: "11px", background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.2)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                    <reason.icon style={{ width: "18px", height: "18px", color: "#D4AF37" }} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 style={{ fontSize: "13px", fontWeight: 700, color: "rgba(255,255,255,0.92)", marginBottom: "7px", lineHeight: 1.3 }}>{reason.title}</h3>
                <div style={{ width: "18px", height: "1px", background: "rgba(212,175,55,0.4)", marginBottom: "8px" }} />
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.42)", lineHeight: 1.7 }}>{reason.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
