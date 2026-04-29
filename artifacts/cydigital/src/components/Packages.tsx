import { motion } from "framer-motion";
import { Check } from "lucide-react";


const packages = [
  {
    name: "Launch",
    tagline: "Ιδανικό για επιχειρήσεις που ξεκινούν την ψηφιακή τους παρουσία.",
    features: [
      "8 social media posts/μήνα",
      "Basic graphic design",
      "Google Business setup",
      "Monthly performance report",
    ],
    cta: "Ζητήστε Προσφορά",
    popular: false,
  },
  {
    name: "Growth",
    tagline: "Για επιχειρήσεις που είναι έτοιμες να αναπτυχθούν και να αποκτήσουν leads.",
    features: [
      "12–16 social media posts/μήνα",
      "Reels & video ideas",
      "Landing page δημιουργία",
      "Ads management",
      "Monthly strategy call",
    ],
    cta: "Μιλήστε Μαζί Μας",
    popular: true,
  },
  {
    name: "Scale",
    tagline: "Για brands που θέλουν πλήρη ψηφιακή κυριαρχία στην αγορά τους.",
    features: [
      "Full website creation",
      "Social media management",
      "Graphic design & branding",
      "Ads management (Meta + Google)",
      "Monthly strategy review",
      "Priority support",
    ],
    cta: "Κλείστε Συνάντηση",
    popular: false,
  },
];

export function Packages() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ color: "#D4AF37", fontSize: "12px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "14px" }}
          >
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ display: "inline-block" }}
            >
              Οι Λύσεις μας
            </motion.span>
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Πώς μπορούμε να σας βοηθήσουμε
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"
          />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={pkg.popular ? { transform: "scale(1.04)" } : {}}
            >
              <div
                style={{
                  position: "relative",
                  padding: "32px 28px",
                  borderRadius: "14px",
                  background: "rgba(255,255,255,0.025)",
                  border: pkg.popular
                    ? "1px solid rgba(212,175,55,0.65)"
                    : "1px solid rgba(212,175,55,0.15)",
                  boxShadow: pkg.popular
                    ? "0 0 32px rgba(212,175,55,0.14)"
                    : "none",
                  transition: "transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
                }}
                className="package-card-inner"
                data-testid={`package-card-${pkg.name.toLowerCase()}`}
              >
                {/* Most popular badge */}
                {pkg.popular && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-14px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#D4AF37",
                      color: "#0B0B0B",
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "2px",
                      textTransform: "uppercase",
                      padding: "4px 16px",
                      borderRadius: "20px",
                      whiteSpace: "nowrap",
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}

                {/* Package name */}
                <h3
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#ffffff",
                    fontFamily: "Cormorant Garamond, serif",
                    marginBottom: "8px",
                  }}
                >
                  {pkg.name}
                </h3>

                {/* Tagline */}
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "#BFBFBF",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                    minHeight: "44px",
                  }}
                >
                  {pkg.tagline}
                </p>

                {/* Custom pricing message */}
                <div
                  style={{
                    borderTop: "1px solid rgba(212,175,55,0.12)",
                    borderBottom: "1px solid rgba(212,175,55,0.12)",
                    padding: "14px 0",
                    marginBottom: "24px",
                    textAlign: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#D4AF37",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      fontWeight: 500,
                    }}
                  >
                    Προσαρμοσμένο στις ανάγκες σας
                  </span>
                </div>

                {/* Features */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  {pkg.features.map((feature, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                      <Check style={{ width: "16px", height: "16px", color: "#D4AF37", flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA button */}
                <button
                  onClick={scrollToContact}
                  data-testid={`button-package-${pkg.name.toLowerCase()}`}
                  style={{
                    width: "100%",
                    padding: "13px 0",
                    fontSize: "12px",
                    fontWeight: 700,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    borderRadius: "6px",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    background: pkg.popular ? "#D4AF37" : "transparent",
                    color: pkg.popular ? "#0B0B0B" : "#D4AF37",
                    border: pkg.popular ? "none" : "1px solid rgba(212,175,55,0.5)",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    if (pkg.popular) {
                      el.style.background = "#c9a830";
                    } else {
                      el.style.background = "rgba(212,175,55,0.08)";
                      el.style.borderColor = "#D4AF37";
                    }
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    if (pkg.popular) {
                      el.style.background = "#D4AF37";
                    } else {
                      el.style.background = "transparent";
                      el.style.borderColor = "rgba(212,175,55,0.5)";
                    }
                  }}
                >
                  {pkg.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            textAlign: "center",
            marginTop: "40px",
            fontSize: "13px",
            color: "rgba(191,191,191,0.7)",
            letterSpacing: "0.3px",
          }}
        >
          Τα πακέτα προσαρμόζονται ανάλογα με τις ανάγκες της επιχείρησής σας.
        </motion.p>

      </div>
    </section>
  );
}
