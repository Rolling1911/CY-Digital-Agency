import { motion } from "framer-motion";

const items = [
  {
    title: "Ιστοσελίδα Εστιατορίου",
    category: "Web Design",
    result: "+45% Αύξηση Πωλήσεων",
    bg: "from-[#1a1a1a] to-[#2a1f0a]",
    label: "WEB",
  },
  {
    title: "Social Media Beauty Salon",
    category: "Social Media",
    result: "+200% Engagement",
    bg: "from-[#1a1a1a] to-[#0a1a2a]",
    label: "SM",
  },
  {
    title: "Branding Project",
    category: "Branding",
    result: "Brand Identity από Μηδέν",
    bg: "from-[#1a1a1a] to-[#1a0a2a]",
    label: "BR",
  },
  {
    title: "Καμπάνια Διαφημίσεων Gym",
    category: "Advertising",
    result: "3x ROAS σε 30 Ημέρες",
    bg: "from-[#1a1a1a] to-[#0a2a1a]",
    label: "AD",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Δείγματα δουλειάς
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
              style={{ aspectRatio: "4/3" }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bg}`} />
              <div className="absolute inset-0 border border-[#D4AF37]/20" />
              <div className="absolute top-0 left-0 w-12 h-12">
                <div className="absolute top-0 left-0 w-full h-px bg-[#D4AF37]" />
                <div className="absolute top-0 left-0 h-full w-px bg-[#D4AF37]" />
              </div>
              <div className="absolute bottom-0 right-0 w-12 h-12">
                <div className="absolute bottom-0 right-0 w-full h-px bg-[#D4AF37]" />
                <div className="absolute bottom-0 right-0 h-full w-px bg-[#D4AF37]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-[#D4AF37]/30 font-display font-bold text-7xl tracking-widest select-none">
                  {item.label}
                </span>
              </div>
              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-[#D4AF37] font-medium mb-4 tracking-[0.2em] text-xs uppercase">
                  {item.category}
                </span>
                <h3 className="text-3xl font-display font-bold text-white mb-4">
                  {item.title}
                </h3>
                <span className="text-[#D4AF37] italic font-display text-xl">
                  {item.result}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
