import { motion } from "framer-motion";
import { MonitorSmartphone, Share2, Palette, PenTool, MapPin, Target } from "lucide-react";

const services = [
  {
    icon: MonitorSmartphone,
    title: "Δημιουργία Ιστοσελίδας",
    description: "Σχεδιάζουμε γρήγορες, επαγγελματικές ιστοσελίδες που μετατρέπουν επισκέπτες σε πελάτες.",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Δημιουργούμε περιεχόμενο που αυξάνει το engagement και χτίζει κοινότητα.",
  },
  {
    icon: Palette,
    title: "Γραφιστικά & Δημιουργικά",
    description: "Οπτικό υλικό υψηλής αισθητικής για κάθε ψηφιακό κανάλι.",
  },
  {
    icon: PenTool,
    title: "Logo & Branding",
    description: "Χτίζουμε ταυτότητα μάρκας που μένει αξέχαστη.",
  },
  {
    icon: MapPin,
    title: "Google Business Profile",
    description: "Κάνουμε την επιχείρησή σας ορατή στις τοπικές αναζητήσεις.",
  },
  {
    icon: Target,
    title: "Διαφημίσεις Facebook & Instagram",
    description: "Στοχευμένες καμπάνιες που φέρνουν πραγματικά αποτελέσματα.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-14 md:py-16 bg-[#080808] overflow-hidden">

      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 55% at 50% 40%, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold font-display text-foreground mb-5"
          >
            Οι Υπηρεσίες μας
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              data-testid={`service-card-${i}`}
              className="group relative cursor-default"
              style={{
                padding: "28px 26px 26px",
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
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  width: "50%",
                  background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                }}
              />

              {/* Icon box */}
              <div className="mb-5 relative" style={{ width: "fit-content" }}>
                {/* Glow behind icon */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)",
                    filter: "blur(8px)",
                    transform: "scale(1.5)",
                  }}
                />
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(212,175,55,0.07)",
                    border: "1px solid rgba(212,175,55,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "border-color 0.35s ease, background 0.35s ease",
                    position: "relative",
                  }}
                  className="group-hover:border-[rgba(212,175,55,0.4)] group-hover:bg-[rgba(212,175,55,0.11)]"
                >
                  <service.icon
                    style={{ width: "22px", height: "22px", color: "#D4AF37" }}
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.92)",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                  letterSpacing: "0.1px",
                }}
              >
                {service.title}
              </h3>

              {/* Thin accent line */}
              <div
                style={{
                  width: "22px",
                  height: "1px",
                  background: "rgba(212,175,55,0.4)",
                  marginBottom: "10px",
                }}
              />

              {/* Description */}
              <p
                style={{
                  color: "rgba(255,255,255,0.42)",
                  lineHeight: 1.75,
                  fontSize: "13.5px",
                  letterSpacing: "0.1px",
                }}
              >
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
