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
    <section id="why-us" className="py-24 bg-[#080808]">
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
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Label */}
            <div style={{ marginBottom: "16px" }}>
              <span
                style={{
                  fontSize: "11px",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "#D4AF37",
                  fontWeight: 600,
                }}
              >
                Γιατί CYDigital
              </span>
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
                width: "48px",
                height: "3px",
                background: "#D4AF37",
                borderRadius: "2px",
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
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                style={{
                  padding: "20px",
                  borderRadius: "10px",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(212,175,55,0.12)",
                  transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                }}
                onHoverStart={e => {
                  (e.target as HTMLElement).style.borderColor = "rgba(212,175,55,0.4)";
                  (e.target as HTMLElement).style.boxShadow = "0 0 18px rgba(212,175,55,0.1)";
                }}
                onHoverEnd={e => {
                  (e.target as HTMLElement).style.borderColor = "rgba(212,175,55,0.12)";
                  (e.target as HTMLElement).style.boxShadow = "none";
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: "rgba(212,175,55,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                    transition: "background 0.3s ease, box-shadow 0.3s ease",
                  }}
                  className="why-icon"
                >
                  <reason.icon
                    style={{ width: "17px", height: "17px", color: "#D4AF37" }}
                  />
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "6px",
                    lineHeight: 1.3,
                  }}
                >
                  {reason.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "12px",
                    color: "#999",
                    lineHeight: 1.6,
                  }}
                >
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
