import { motion } from "framer-motion";

const testimonials = [
  {
    initials: "ΑΣ",
    name: "Αντώνης Σταύρου",
    role: "Ιδιοκτήτης Εστιατορίου",
    quote:
      "Η CYDigital αναβάθμισε πλήρως την online παρουσία μας. Το website είναι γρήγορο, premium και μας φέρνει περισσότερες κρατήσεις.",
    result: "+60% κρατήσεις",
  },
  {
    initials: "ΜΧ",
    name: "Μαρία Χριστοδούλου",
    role: "Beauty Salon Owner",
    quote:
      "Το branding και το περιεχόμενο μας πλέον δείχνουν επαγγελματικά. Οι πελάτες καταλαβαίνουν αμέσως την αξία μας.",
    result: "Premium brand image",
  },
  {
    initials: "ΚΝ",
    name: "Κώστας Νεοφύτου",
    role: "Γυμναστήριο FitLife",
    quote:
      "Οι καμπάνιες μας έγιναν πιο στοχευμένες και αποδοτικές. Είδαμε καλύτερα leads και χαμηλότερο κόστος διαφήμισης.",
    result: "2x καλύτερα leads",
  },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#D4AF37"
          style={{ flexShrink: 0 }}
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Τι Λένε οι Πελάτες μας
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
                borderColor: "rgba(212,175,55,0.55)",
                boxShadow: "0 0 28px rgba(212,175,55,0.13)",
              }}
              style={{
                background: "#111111",
                border: "1px solid rgba(212,175,55,0.15)",
                borderRadius: "14px",
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: "0",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
            >
              {/* Top row: avatar + name + role + stars */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
                {/* Initials badge */}
                <div
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    background: "rgba(212,175,55,0.12)",
                    border: "1px solid rgba(212,175,55,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#D4AF37",
                      fontFamily: "Cormorant Garamond, serif",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {t.initials}
                  </span>
                </div>

                {/* Name + role */}
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "#ffffff",
                      marginBottom: "2px",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#888",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {t.role}
                  </div>
                </div>

                {/* Stars — top right */}
                <Stars />
              </div>

              {/* Subtle divider */}
              <div style={{ height: "1px", background: "rgba(212,175,55,0.08)", marginBottom: "20px" }} />

              {/* Quote */}
              <p
                className="font-display"
                style={{
                  fontSize: "15px",
                  color: "rgba(255,255,255,0.82)",
                  lineHeight: 1.75,
                  fontStyle: "italic",
                  flex: 1,
                  marginBottom: "24px",
                }}
              >
                "{t.quote}"
              </p>

              {/* Result badge */}
              <div style={{ display: "flex" }}>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "1.2px",
                    textTransform: "uppercase",
                    color: "#D4AF37",
                    background: "rgba(212,175,55,0.08)",
                    border: "1px solid rgba(212,175,55,0.25)",
                    borderRadius: "20px",
                    padding: "5px 14px",
                  }}
                >
                  {t.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
