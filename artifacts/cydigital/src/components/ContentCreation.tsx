import { motion } from "framer-motion";
import { Camera, Video, Clapperboard, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function ContentCreation() {
  const { t } = useLanguage();

  const features = [
    { icon: Camera, title: t.content_f1_title, desc: t.content_f1_desc },
    { icon: Video, title: t.content_f2_title, desc: t.content_f2_desc },
    { icon: Clapperboard, title: t.content_f3_title, desc: t.content_f3_desc },
    { icon: Film, title: t.content_f4_title, desc: t.content_f4_desc },
  ];

  const portfolioItems = [
    { title: t.content_p1_title, desc: "Product photography", image: "/images/content-rose.jpeg", isVideo: false },
    { title: "Lifestyle Content", desc: "Authentic brand moments", image: "/images/content-drink.jpeg", isVideo: false },
    { title: t.content_p3_title, desc: "Product photography", image: "/images/content-grapefruit.jpeg", isVideo: false },
  ];

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="content-creation" className="py-9 md:py-16 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(212,175,55,0.06) 0%, transparent 70%)" }} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <motion.span
              animate={{ boxShadow: ["0 0 10px rgba(212,175,55,0.4), 0 0 30px rgba(212,175,55,0.15), inset 0 0 10px rgba(212,175,55,0.08)", "0 0 20px rgba(212,175,55,0.7), 0 0 50px rgba(212,175,55,0.3), inset 0 0 18px rgba(212,175,55,0.15)", "0 0 10px rgba(212,175,55,0.4), 0 0 30px rgba(212,175,55,0.15), inset 0 0 10px rgba(212,175,55,0.08)"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden text-[#D4AF37] font-bold uppercase tracking-[0.4em] text-[11px] px-5 py-2 border border-[#D4AF37]/60"
              style={{ background: "rgba(212,175,55,0.08)" }}
            >
              <span className="absolute inset-0 pointer-events-none new-badge-shimmer" />
              ✦ NEW ✦
            </motion.span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            {t.content_heading}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-32 h-px mx-auto mb-6 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[#D4AF37] font-display italic text-lg md:text-xl mb-4"
          >
            {t.content_subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="group relative cursor-default"
              style={{ padding: "28px 24px 26px", background: "linear-gradient(145deg, rgba(255,255,255,0.042) 0%, rgba(255,255,255,0.016) 100%)", backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)", border: "1px solid rgba(212,175,55,0.14)", borderRadius: "18px", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)", transition: "box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease" }}
              onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(212,175,55,0.48)"; el.style.boxShadow = "0 0 0 1px rgba(212,175,55,0.15), 0 14px 40px rgba(212,175,55,0.1), inset 0 1px 0 rgba(255,255,255,0.07)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(212,175,55,0.14)"; el.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.05)"; }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ width: "50%", background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
              <div className="mb-5 relative" style={{ width: "fit-content" }}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)", filter: "blur(8px)", transform: "scale(1.5)" }} />
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.2)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <f.icon size={22} className="text-[#D4AF37]" strokeWidth={1.5} />
                </div>
              </div>
              <h3 style={{ fontSize: "15px", fontWeight: 700, color: "rgba(255,255,255,0.92)", marginBottom: "8px", lineHeight: 1.3 }}>{f.title}</h3>
              <div style={{ width: "22px", height: "1px", background: "rgba(212,175,55,0.4)", marginBottom: "10px" }} />
              <p style={{ color: "rgba(255,255,255,0.42)", lineHeight: 1.75, fontSize: "13px" }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-white/70 text-lg font-display italic mb-6">{t.content_cta_question}</p>
          <Button
            onClick={scrollToContact}
            className="bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 font-semibold tracking-widest uppercase rounded-none transition-all hover:scale-[1.03] active:scale-95"
            style={{ padding: "14px 36px", fontSize: "13px", height: "auto", boxShadow: "0 0 24px rgba(212,175,55,0.25)" }}
          >
            {t.content_cta_btn}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
