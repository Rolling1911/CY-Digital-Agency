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
      className="relative overflow-hidden"
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
        background: "#0B0B0B",
      }}
    >
      {/* Radial gold glow in the background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212,175,55,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Faint horizontal streaks */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "calc(50% + 60px)",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "500px",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.08), transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        className="container mx-auto px-4 md:px-6 relative"
        style={{ zIndex: 1, textAlign: "center" }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "11px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "#D4AF37",
            fontWeight: 600,
            marginBottom: "28px",
          }}
        >
          Ξεκινήστε Σήμερα
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.05 }}
          className="font-display"
          style={{
            fontSize: "clamp(36px, 5vw, 58px)",
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.18,
            letterSpacing: "-0.5px",
            maxWidth: "820px",
            margin: "0 auto 28px",
          }}
        >
          Έτοιμοι να Αναβαθμίσετε
          <br />
          την Επιχείρησή σας;
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          style={{
            fontSize: "17px",
            color: "#BFBFBF",
            lineHeight: 1.7,
            maxWidth: "560px",
            margin: "0 auto 24px",
          }}
        >
          Συνεργαζόμαστε με περιορισμένο αριθμό επιχειρήσεων για να
          διασφαλίζουμε κορυφαία αποτελέσματα.
        </motion.p>

        {/* Urgency */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          style={{
            fontSize: "12px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#D4AF37",
            fontWeight: 600,
            marginBottom: "52px",
          }}
        >
          Περιορισμένες θέσεις διαθέσιμες — Επικοινωνήστε σήμερα
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.22 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {/* Primary */}
          <button
            onClick={scrollToContact}
            data-testid="button-strong-cta-primary"
            style={{
              padding: "16px 40px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              background: "#D4AF37",
              color: "#0B0B0B",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              boxShadow: "0 0 28px rgba(212,175,55,0.22)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "#c9a830";
              e.currentTarget.style.boxShadow = "0 0 40px rgba(212,175,55,0.35)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "#D4AF37";
              e.currentTarget.style.boxShadow = "0 0 28px rgba(212,175,55,0.22)";
            }}
          >
            Κλείστε Συνάντηση
          </button>

          {/* Secondary */}
          <button
            onClick={scrollToPackages}
            data-testid="button-strong-cta-secondary"
            style={{
              padding: "16px 40px",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              background: "transparent",
              color: "#D4AF37",
              border: "1px solid rgba(212,175,55,0.45)",
              borderRadius: "6px",
              cursor: "pointer",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "rgba(212,175,55,0.08)";
              e.currentTarget.style.borderColor = "#D4AF37";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(212,175,55,0.45)";
            }}
          >
            Δείτε τις Λύσεις μας
          </button>
        </motion.div>
      </div>
    </section>
  );
}
