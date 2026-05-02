import { motion } from "framer-motion";
import { LineChart, LayoutTemplate, Target, TrendingUp, MapPin, Users } from "lucide-react";

const reasons = [
  {
    icon: LineChart,
    title: "Strategy-First Προσέγγιση",
    desc: "Κάθε απόφαση βασίζεται σε στόχο, δεδομένα και ανάπτυξη.",
  },
  {
    icon: LayoutTemplate,
    title: "Premium Εκτέλεση",
    desc: "Custom λύσεις με προσεγμένο design και καθαρή εμπειρία χρήστη.",
  },
  {
    icon: Target,
    title: "Results-Driven Νοοτροπία",
    desc: "Δεν σχεδιάζουμε απλά όμορφα. Σχεδιάζουμε για αποτέλεσμα.",
  },
  {
    icon: TrendingUp,
    title: "Κλιμακωτή Ανάπτυξη",
    desc: "Συστήματα που μεγαλώνουν μαζί με την επιχείρησή σας.",
  },
  {
    icon: MapPin,
    title: "Τοπική Γνώση",
    desc: "Κατανοούμε την αγορά, την κουλτούρα και τις ανάγκες της Κύπρου.",
  },
  {
    icon: Users,
    title: "Αποκλειστική Εξυπηρέτηση",
    desc: "Δουλεύουμε με περιορισμένο αριθμό πελατών για καλύτερη ποιότητα.",
  },
];

export function WhyUs() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="why-us" className="py-14 md:py-16 bg-[#080808]">
      <div className="container mx-auto px-4 md:px-6">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
          className="why-us-grid"
        >

          {/* LEFT — Heading, paragraph, CTA */}
          <motion.div
            className="why-us-left-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label */}
            <div style={{ marginBottom: "16px" }}>
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  fontSize: "11px",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "#D4AF37",
                  fontWeight: 600,
                  display: "inline-block",
                }}
              >
                Γιατί CYDigital
              </motion.span>
            </div>

            {/* Heading */}
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(32px, 3.5vw, 50px)",
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.15,
                marginBottom: "24px",
              }}
            >
              Γιατί να επιλέξετε την{" "}
              <span style={{ color: "#D4AF37" }}>CYDigital</span>
            </h2>

            {/* Gold rule */}
            <div
              style={{
                width: "80px",
                height: "1px",
                background: "linear-gradient(to right, transparent, #D4AF37, transparent)",
                marginBottom: "28px",
              }}
            />

            {/* Paragraph */}
            <p
              style={{
                fontSize: "16px",
                color: "#BFBFBF",
                lineHeight: 1.8,
                marginBottom: "36px",
                maxWidth: "440px",
              }}
            >
              Συνδυάζουμε στρατηγική, αισθητική και τεχνολογία για να δημιουργούμε
              digital παρουσίες που ξεχωρίζουν και φέρνουν πραγματικά αποτελέσματα.
            </p>

            {/* CTA */}
            <button
              onClick={scrollToContact}
              style={{
                padding: "14px 32px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                background: "transparent",
                color: "#D4AF37",
                border: "1px solid rgba(212,175,55,0.5)",
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
                e.currentTarget.style.borderColor = "rgba(212,175,55,0.5)";
              }}
            >
              Μιλήστε μαζί μας
            </button>
          </motion.div>

          {/* RIGHT — 2×3 compact reason cards */}
          <div
            className="why-us-reasons-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative cursor-default"
                style={{
                  padding: "22px 20px 20px",
                  background: "linear-gradient(145deg, rgba(255,255,255,0.042) 0%, rgba(255,255,255,0.016) 100%)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(212,175,55,0.14)",
                  borderRadius: "18px",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                  transition: "box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(212,175,55,0.48)";
                  el.style.boxShadow = "0 0 0 1px rgba(212,175,55,0.15), 0 14px 40px rgba(212,175,55,0.1), inset 0 1px 0 rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(212,175,55,0.14)";
                  el.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.05)";
                }}
              >
                {/* Top shimmer */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ width: "50%", background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />

                {/* Icon box */}
                <div className="mb-4 relative" style={{ width: "fit-content" }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)", filter: "blur(8px)", transform: "scale(1.5)" }} />
                  <div style={{ width: "42px", height: "42px", borderRadius: "11px", background: "rgba(212,175,55,0.07)", border: "1px solid rgba(212,175,55,0.2)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                    <reason.icon style={{ width: "18px", height: "18px", color: "#D4AF37" }} strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "13px", fontWeight: 700, color: "rgba(255,255,255,0.92)", marginBottom: "7px", lineHeight: 1.3 }}>
                  {reason.title}
                </h3>

                {/* Accent line */}
                <div style={{ width: "18px", height: "1px", background: "rgba(212,175,55,0.4)", marginBottom: "8px" }} />

                {/* Description */}
                <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.42)", lineHeight: 1.7 }}>
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
