import { motion } from "framer-motion";
import { Bot, Smartphone, CalendarCheck, Megaphone } from "lucide-react";

const services = [
  {
    icon: Bot,
    emoji: "🤖",
    title: "AI Chat & Lead System",
    description: "Μετατρέπει επισκέπτες σε πελάτες αυτόματα",
  },
  {
    icon: Smartphone,
    emoji: "📱",
    title: "Αυτόματες Απαντήσεις",
    description: "Απαντά σε κάθε μήνυμα WhatsApp & Instagram άμεσα",
  },
  {
    icon: CalendarCheck,
    emoji: "📅",
    title: "AI Booking Assistant",
    description: "Κλείνει ραντεβού και οργανώνει τους πελάτες",
  },
  {
    icon: Megaphone,
    emoji: "📣",
    title: "AI Content & Ads",
    description: "Δημιουργία περιεχομένου που φέρνει αποτελέσματα",
  },
];

export function AIServices() {
  return (
    <section className="relative py-16 md:py-24 bg-[#0B0B0B] overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 50% at 50% 50%, rgba(212,175,55,0.055) 0%, transparent 70%)",
        }}
      />

      {/* Subtle top border accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-30" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{
              background: "rgba(212,175,55,0.08)",
              border: "1px solid rgba(212,175,55,0.22)",
              color: "#D4AF37",
            }}
          >
            <span>✦</span> Τεχνητή Νοημοσύνη
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-3xl md:text-5xl font-bold font-display text-white mb-5"
          >
            AI Υπηρεσίες για{" "}
            <span style={{ color: "#D4AF37" }}>Επιχειρήσεις</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-32 h-px mx-auto mb-6 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          />

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Αυτοματοποιήστε την επιχείρησή σας, εξοικονομήστε χρόνο και
            αποκτήστε περισσότερους πελάτες με τη δύναμη της τεχνητής
            νοημοσύνης.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-12">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.09,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative cursor-default"
              style={{
                padding: "28px 24px 26px",
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.042) 0%, rgba(255,255,255,0.016) 100%)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(212,175,55,0.14)",
                borderRadius: "18px",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                transition:
                  "box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(212,175,55,0.48)";
                el.style.boxShadow =
                  "0 0 0 1px rgba(212,175,55,0.15), 0 14px 40px rgba(212,175,55,0.1), inset 0 1px 0 rgba(255,255,255,0.07)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "rgba(212,175,55,0.14)";
                el.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.05)";
              }}
            >
              {/* Top shimmer line on hover */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  width: "60%",
                  background:
                    "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                }}
              />

              {/* Icon */}
              <div className="mb-5 relative" style={{ width: "fit-content" }}>
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)",
                    filter: "blur(8px)",
                    transform: "scale(1.5)",
                  }}
                />
                <div
                  className="group-hover:border-[rgba(212,175,55,0.4)] group-hover:bg-[rgba(212,175,55,0.11)]"
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(212,175,55,0.07)",
                    border: "1px solid rgba(212,175,55,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition:
                      "border-color 0.35s ease, background 0.35s ease",
                    position: "relative",
                    fontSize: "22px",
                  }}
                >
                  {service.emoji}
                </div>
              </div>

              <h3
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.92)",
                  marginBottom: "8px",
                  lineHeight: 1.3,
                  letterSpacing: "0.1px",
                }}
              >
                {service.title}
              </h3>
              <div
                style={{
                  width: "22px",
                  height: "1px",
                  background: "rgba(212,175,55,0.4)",
                  marginBottom: "10px",
                }}
              />
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.35 }}
          className="text-center"
        >
          <a
            href="/epikoinonia"
            className="inline-block font-semibold uppercase tracking-widest text-xs px-10 py-4 transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #D4AF37 0%, #b8941e 100%)",
              color: "#0B0B0B",
              borderRadius: "4px",
              boxShadow: "0 0 24px rgba(212,175,55,0.28)",
              letterSpacing: "0.12em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 36px rgba(212,175,55,0.48)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 24px rgba(212,175,55,0.28)";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            ΜΑΘΕ ΠΕΡΙΣΣΟΤΕΡΑ
          </a>
        </motion.div>
      </div>
    </section>
  );
}
