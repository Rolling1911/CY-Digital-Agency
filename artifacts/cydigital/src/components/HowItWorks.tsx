import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Στρατηγική",
    desc: "Αναλύουμε τους στόχους σας και χτίζουμε το σωστό πλάνο ανάπτυξης.",
  },
  {
    num: "02",
    title: "Σχεδιασμός",
    desc: "Δημιουργούμε οπτική ταυτότητα και εμπειρίες που μένουν αξέχαστες.",
  },
  {
    num: "03",
    title: "Ανάπτυξη",
    desc: "Υλοποιούμε τη λύση με ακρίβεια, ταχύτητα και προσοχή στη λεπτομέρεια.",
  },
  {
    num: "04",
    title: "Launch & Scale",
    desc: "Ξεκινάμε, παρακολουθούμε και αναπτύσσουμε τα αποτελέσματά σας.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-24 bg-[#060606] overflow-hidden">

      {/* Ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-14 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[#D4AF37] uppercase tracking-[0.3em] text-[11px] mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Η Διαδικασία μας
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-5"
          >
            Πώς μπορούμε να{" "}
            <span className="text-[#D4AF37]">σας βοηθήσουμε</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"
          />
        </div>

        {/* Cards + connector row */}
        <div className="relative max-w-5xl mx-auto">

          {/* Horizontal connector line — desktop only */}
          <div
            className="absolute top-[52px] left-[12.5%] right-[12.5%] h-px hidden md:block pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.25) 15%, rgba(212,175,55,0.25) 85%, transparent 100%)",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative cursor-default"
                style={{
                  padding: "36px 24px 32px",
                  background:
                    "linear-gradient(145deg, rgba(255,255,255,0.042) 0%, rgba(255,255,255,0.016) 100%)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(212,175,55,0.15)",
                  borderRadius: "18px",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                  transition: "box-shadow 0.35s ease, border-color 0.35s ease, transform 0.35s ease",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.5)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 0 1px rgba(212,175,55,0.2), 0 16px 48px rgba(212,175,55,0.1), inset 0 1px 0 rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.15)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "inset 0 1px 0 rgba(255,255,255,0.05)";
                }}
              >
                {/* Top shimmer on hover */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    width: "55%",
                    background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                  }}
                />

                {/* Large faded step number (background) */}
                <div
                  className="absolute top-3 left-0 right-0 text-center pointer-events-none select-none"
                  style={{
                    fontSize: "90px",
                    fontWeight: 800,
                    fontFamily: "Cormorant Garamond, serif",
                    color: "rgba(212,175,55,0.055)",
                    lineHeight: 1,
                    letterSpacing: "-4px",
                    userSelect: "none",
                  }}
                >
                  {step.num}
                </div>

                {/* Step indicator dot with number */}
                <div className="relative z-10 mb-5">
                  <div
                    className="inline-flex items-center justify-center mx-auto"
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      border: "1px solid rgba(212,175,55,0.35)",
                      background: "rgba(212,175,55,0.07)",
                      transition: "box-shadow 0.35s ease, border-color 0.35s ease",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "#D4AF37",
                        fontFamily: "Cormorant Garamond, serif",
                        lineHeight: 1,
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="relative z-10"
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "rgba(255,255,255,0.92)",
                    marginBottom: "10px",
                    lineHeight: 1.3,
                    letterSpacing: "0.2px",
                  }}
                >
                  {step.title}
                </h3>

                {/* Short gold accent line */}
                <div
                  className="mx-auto mb-3"
                  style={{
                    width: "24px",
                    height: "1px",
                    background: "rgba(212,175,55,0.4)",
                  }}
                />

                {/* Description */}
                <p
                  className="relative z-10"
                  style={{
                    fontSize: "13.5px",
                    color: "rgba(255,255,255,0.42)",
                    lineHeight: 1.75,
                    letterSpacing: "0.1px",
                  }}
                >
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
