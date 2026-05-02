import { motion } from "framer-motion";

export function StrongCta() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPackages = () => {
    document.querySelector("#packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative overflow-hidden py-9 md:py-[60px]"
      style={{ background: "#080808" }}
    >
      {/* Deep ambient glow */}
      <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.055) 0%, transparent 70%)" }} />

      {/* Decorative horizontal streaks */}
      <div aria-hidden className="absolute pointer-events-none" style={{ top: "38%", left: "50%", transform: "translate(-50%,-50%)", width: "900px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.12), transparent)" }} />
      <div aria-hidden className="absolute pointer-events-none" style={{ top: "62%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "1px", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.07), transparent)" }} />

      {/* Corner accent dots */}
      <div aria-hidden className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none" style={{ width: "4px", height: "4px", borderRadius: "50%", background: "#D4AF37", opacity: 0.3, boxShadow: "0 0 12px 4px rgba(212,175,55,0.2)" }} />

      <div className="container mx-auto px-4 md:px-6 relative" style={{ zIndex: 1 }}>
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative text-center"
            style={{
              maxWidth: "760px",
              width: "100%",
              padding: "clamp(40px, 6vw, 64px) clamp(24px, 5vw, 64px)",
              background: "linear-gradient(145deg, rgba(255,255,255,0.038) 0%, rgba(255,255,255,0.012) 100%)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(212,175,55,0.18)",
              borderRadius: "24px",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(212,175,55,0.06), 0 24px 80px rgba(0,0,0,0.4)",
            }}
          >
            {/* Top shimmer line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px" style={{ width: "55%", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.55), transparent)", borderRadius: "99px" }} />

            {/* Corner gold accents */}
            <div className="absolute top-0 left-0 pointer-events-none" style={{ width: "24px", height: "24px", borderTop: "1px solid rgba(212,175,55,0.35)", borderLeft: "1px solid rgba(212,175,55,0.35)", borderTopLeftRadius: "24px" }} />
            <div className="absolute top-0 right-0 pointer-events-none" style={{ width: "24px", height: "24px", borderTop: "1px solid rgba(212,175,55,0.35)", borderRight: "1px solid rgba(212,175,55,0.35)", borderTopRightRadius: "24px" }} />
            <div className="absolute bottom-0 left-0 pointer-events-none" style={{ width: "24px", height: "24px", borderBottom: "1px solid rgba(212,175,55,0.35)", borderLeft: "1px solid rgba(212,175,55,0.35)", borderBottomLeftRadius: "24px" }} />
            <div className="absolute bottom-0 right-0 pointer-events-none" style={{ width: "24px", height: "24px", borderBottom: "1px solid rgba(212,175,55,0.35)", borderRight: "1px solid rgba(212,175,55,0.35)", borderBottomRightRadius: "24px" }} />

            {/* Eyebrow label */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: "20px" }}
            >
              <motion.span
                animate={{ opacity: [0.55, 1, 0.55] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ display: "inline-block", fontSize: "10px", letterSpacing: "3.5px", textTransform: "uppercase", color: "#D4AF37", fontWeight: 600 }}
              >
                Ξεκινήστε Σήμερα
              </motion.span>
              <div style={{ width: "32px", height: "1px", background: "linear-gradient(90deg, transparent, #D4AF37, transparent)", margin: "10px auto 0" }} />
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.07 }}
              className="font-display"
              style={{
                fontSize: "clamp(28px, 4.5vw, 52px)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.18,
                letterSpacing: "-0.5px",
                marginBottom: "20px",
                textShadow: "0 0 60px rgba(212,175,55,0.12)",
              }}
            >
              Ας χτίσουμε την επόμενη
              <br />
              <span style={{ color: "#D4AF37" }}>ψηφιακή σας επιτυχία</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.14 }}
              style={{ fontSize: "15.5px", color: "rgba(255,255,255,0.5)", lineHeight: 1.75, maxWidth: "500px", margin: "0 auto 36px" }}
            >
              Premium ιστοσελίδες, branding και digital στρατηγική για επιχειρήσεις που θέλουν να ξεχωρίσουν.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.22 }}
              style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "14px", flexWrap: "wrap" }}
            >
              {/* Primary */}
              <motion.button
                onClick={scrollToContact}
                data-testid="button-strong-cta-primary"
                whileHover={{ y: -3, boxShadow: "0 8px 40px rgba(212,175,55,0.4)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
                style={{
                  padding: "15px 38px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  background: "#D4AF37",
                  color: "#0B0B0B",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  boxShadow: "0 0 28px rgba(212,175,55,0.25)",
                  transition: "background 0.25s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "#c9a830"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "#D4AF37"; }}
              >
                Κλείστε Συνάντηση
              </motion.button>

              {/* Secondary */}
              <motion.button
                onClick={scrollToPackages}
                data-testid="button-strong-cta-secondary"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.25 }}
                style={{
                  padding: "15px 38px",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  background: "transparent",
                  color: "#D4AF37",
                  border: "1px solid rgba(212,175,55,0.4)",
                  borderRadius: "8px",
                  cursor: "pointer",
                  transition: "border-color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "rgba(212,175,55,0.07)";
                  e.currentTarget.style.borderColor = "rgba(212,175,55,0.75)";
                  e.currentTarget.style.boxShadow = "0 0 20px rgba(212,175,55,0.1)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = "rgba(212,175,55,0.4)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                Δείτε τις Λύσεις μας
              </motion.button>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
