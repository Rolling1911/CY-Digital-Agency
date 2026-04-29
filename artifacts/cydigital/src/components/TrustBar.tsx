import { motion } from "framer-motion";

const stats = [
  { number: "100+", label: "Projects Delivered" },
  { number: "5+",   label: "Χρόνια Εμπειρίας" },
  { number: "100%", label: "Αφοσίωση στον Πελάτη" },
  { number: "24h",  label: "Γρήγορη Επικοινωνία" },
];

export function TrustBar() {
  return (
    <section
      className="bg-[#0D0D0D] border-y border-[#D4AF37]/15"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 24px" }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-7">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                y: -4,
                borderColor: "rgba(212,175,55,0.7)",
                boxShadow: "0 0 24px rgba(212,175,55,0.12)",
              }}
              style={{
                padding: "28px 20px",
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(212,175,55,0.15)",
                borderRadius: "10px",
                textAlign: "center",
                cursor: "default",
                transition: "all 0.3s ease",
              }}
            >
              <div
                style={{
                  fontSize: "42px",
                  fontWeight: 700,
                  color: "#D4AF37",
                  lineHeight: 1,
                  fontFamily: "Cormorant Garamond, serif",
                  textShadow: "0 0 20px rgba(212,175,55,0.25)",
                }}
              >
                {stat.number}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  letterSpacing: "1px",
                  color: "#BFBFBF",
                  marginTop: "10px",
                  textTransform: "uppercase",
                  lineHeight: 1.4,
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
