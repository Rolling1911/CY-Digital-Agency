import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Τοπική γνώση της αγοράς Κύπρου",
  "Απλή και ξεκάθαρη επικοινωνία",
  "Προσιτές λύσεις",
  "Επαγγελματικό design",
  "Εστίαση σε αποτελέσματα",
  "Γρήγορη υποστήριξη"
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Γιατί να επιλέξετε την <span className="text-primary">CYDigital</span>
              </h2>
              <div className="w-24 h-1 bg-primary rounded-full mb-10" />
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Γνωρίζουμε τι χρειάζεται μια επιχείρηση στην Κύπρο για να ξεχωρίσει. Συνδυάζουμε υψηλή αισθητική με πρακτικές λύσεις που φέρνουν πραγματικά αποτελέσματα, χωρίς περιττή πολυπλοκότητα.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{reason}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="md:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden border border-border/50 p-2"
            >
               <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                  <img 
                    src="/images/hero.png" 
                    alt="Why choose us" 
                    className="w-full h-full object-cover grayscale-[20%]"
                  />
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
