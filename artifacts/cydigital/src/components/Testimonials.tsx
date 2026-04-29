import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Η CYDigital μετέτρεψε την online παρουσία μου. Σε 3 μήνες είχα +60% κρατήσεις μέσα από το site.",
    name: "Αντώνης Σταύρου",
    role: "Ιδιοκτήτης Εστιατορίου"
  },
  {
    text: "Επαγγελματισμός σε κάθε βήμα. Το branding μου τώρα αντικατοπτρίζει πραγματικά την αξία της δουλειάς μου.",
    name: "Μαρία Χριστοδούλου",
    role: "Beauty Salon Owner"
  },
  {
    text: "Οι διαφημίσεις τους έφεραν 3x ROAS τον πρώτο μήνα. Δεν αλλάζω agency.",
    name: "Κώστας Νεοφύτου",
    role: "Γυμναστήριο FitLife"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Τι Λένε οι Πελάτες μας
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0D0D0D] border border-white/5 p-8 relative flex flex-col"
            >
              <Quote className="w-12 h-12 text-[#D4AF37] mb-6 opacity-50" />
              <p className="text-foreground text-lg leading-relaxed flex-grow font-display italic mb-8">
                "{testimonial.text}"
              </p>
              <div>
                <h4 className="text-white font-bold">{testimonial.name}</h4>
                <span className="text-[#D4AF37] text-sm uppercase tracking-wider">{testimonial.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}