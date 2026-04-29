import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Στρατηγική",
    subtitle: "Αναλύουμε τους στόχους σας"
  },
  {
    num: "02",
    title: "Σχεδιασμός",
    subtitle: "Δημιουργούμε με ακρίβεια"
  },
  {
    num: "03",
    title: "Ανάπτυξη",
    subtitle: "Υλοποιούμε τη λύση"
  },
  {
    num: "04",
    title: "Launch & Scale",
    subtitle: "Ξεκινάμε και αναπτύσσουμε"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#080808] relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-white/5 border-dashed border-t-2 border-white/20" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-[#080808] border-2 border-[#D4AF37] flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                <span className="text-3xl font-display font-bold text-[#D4AF37]">{step.num}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm font-medium text-muted-foreground max-w-[200px]">
                {step.subtitle}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}