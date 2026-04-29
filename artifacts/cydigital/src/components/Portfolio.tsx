import { motion } from "framer-motion";

const items = [
  {
    image: "/images/portfolio-webdesign.png",
    title: "Ιστοσελίδα Εστιατορίου",
    category: "Web Design",
    result: "+45% Αύξηση Πωλήσεων",
    aspect: "aspect-[4/3]",
  },
  {
    image: "/images/portfolio-socialmedia.png",
    title: "Social Media Beauty Salon",
    category: "Social Media",
    result: "+200% Engagement",
    aspect: "aspect-square",
  },
  {
    image: "/images/portfolio-branding.png",
    title: "Branding Project",
    category: "Branding",
    result: "Brand Identity από Μηδέν",
    aspect: "aspect-[4/3]",
  },
  {
    image: "/images/portfolio-4.png",
    title: "Καμπάνια Διαφημίσεων Gym",
    category: "Advertising",
    result: "3x ROAS σε 30 Ημέρες",
    aspect: "aspect-[4/3]",
  }
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden bg-[#0D0D0D] border border-white/5 cursor-pointer"
            >
              <div className={`${item.aspect} w-full overflow-hidden`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm">
                <span className="text-[#D4AF37] font-medium mb-4 tracking-[0.2em] text-xs uppercase">{item.category}</span>
                <h3 className="text-3xl font-display font-bold text-white mb-4">{item.title}</h3>
                <span className="text-[#D4AF37] italic font-display text-xl">{item.result}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}