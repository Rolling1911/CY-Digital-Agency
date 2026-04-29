import { motion } from "framer-motion";
import { LineChart, LayoutTemplate, Target, TrendingUp, MapPin, Users } from "lucide-react";

const reasons = [
  {
    icon: LineChart,
    title: "Strategy-First Προσέγγιση",
    subtitle: "Κάθε απόφαση βασίζεται σε δεδομένα"
  },
  {
    icon: LayoutTemplate,
    title: "Premium Εκτέλεση",
    subtitle: "Custom λύσεις, όχι templates"
  },
  {
    icon: Target,
    title: "Results-Driven Νοοτροπία",
    subtitle: "Μετράμε αποτελέσματα"
  },
  {
    icon: TrendingUp,
    title: "Κλιμακωτή Ανάπτυξη",
    subtitle: "Συστήματα που μεγαλώνουν μαζί σας"
  },
  {
    icon: MapPin,
    title: "Τοπική Γνώση",
    subtitle: "Κατανοούμε την αγορά της Κύπρου"
  },
  {
    icon: Users,
    title: "Αποκλειστική Εξυπηρέτηση",
    subtitle: "Περιορισμένος αριθμός πελατών"
  }
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Γιατί να επιλέξετε την <span className="text-[#D4AF37]">CYDigital</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full mb-8" 
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Γνωρίζουμε τι χρειάζεται μια επιχείρηση στην Κύπρο για να ξεχωρίσει. Συνδυάζουμε υψηλή αισθητική με πρακτικές λύσεις που φέρνουν πραγματικά αποτελέσματα.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-[#0A0A0A] border border-white/5 p-8 hover:border-[#D4AF37]/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-none bg-[#D4AF37]/10 flex items-center justify-center mb-6">
                <reason.icon className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{reason.title}</h3>
              <p className="text-sm text-muted-foreground">{reason.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}