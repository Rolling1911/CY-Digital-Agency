import type { CSSProperties } from "react";
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
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold font-display text-foreground mb-4"
          >
            Οι Υπηρεσίες μας
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div
                className="service-card"
                style={{ padding: "32px", animationDelay: `${index * 2}s`, ["--card-delay"]: `${index * 2}s` } as CSSProperties}
                data-testid={`service-card-${index}`}
              >
                <div
                  className="icon-box"
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "12px",
                    background: "rgba(212,175,55,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                  }}
                >
                  <service.icon
                    style={{ width: "26px", height: "26px", color: "#D4AF37" }}
                  />
                </div>
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#ffffff",
                    marginBottom: "12px",
                    lineHeight: 1.3,
                  }}
                >
                  {service.title}
                </h3>
                <p style={{ color: "#BFBFBF", lineHeight: 1.7, fontSize: "14.5px" }}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
