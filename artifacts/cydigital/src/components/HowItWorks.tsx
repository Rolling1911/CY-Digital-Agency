import type { CSSProperties } from "react";
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
    <section id="how-it-works" className="py-24 bg-[#080808]">
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
            Η Διαδικασία μας
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"
          />
        </div>

        {/* Cards grid */}
        <div
          style={{ maxWidth: "1000px", margin: "0 auto" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6 process-grid-mobile"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                className="process-card"
                style={{
                  padding: "30px 20px",
                  textAlign: "center",
                  animationDelay: `${index * 2}s`,
                  ["--process-delay"]: `${index * 2}s`,
                } as CSSProperties}
              >
                {/* Step badge */}
                <div
                  className="step-badge"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    border: "1px solid rgba(212,175,55,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 18px",
                    transition: "box-shadow 0.35s ease, border-color 0.35s ease",
                  }}
                >
                  <span
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: "#D4AF37",
                      fontFamily: "Cormorant Garamond, serif",
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#ffffff",
                    marginBottom: "10px",
                    lineHeight: 1.3,
                  }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: "13.5px",
                    color: "#BFBFBF",
                    lineHeight: 1.6,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
