import { motion } from "framer-motion";

const items = [
  {
    image: "/images/portfolio-1.png",
    title: "Ιστοσελίδα Εστιατορίου",
    category: "Web Design"
  },
  {
    image: "/images/portfolio-2.png",
    title: "Social Media Beauty Salon",
    category: "Social Media"
  },
  {
    image: "/images/portfolio-3.png",
    title: "Branding Project",
    category: "Branding"
  },
  {
    image: "/images/portfolio-4.png",
    title: "Καμπάνια Διαφημίσεων Gym",
    category: "Advertising"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Δείγματα δουλειάς
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-primary mx-auto rounded-full" 
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
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-primary font-medium mb-2 tracking-wider text-sm uppercase">{item.category}</span>
                <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
