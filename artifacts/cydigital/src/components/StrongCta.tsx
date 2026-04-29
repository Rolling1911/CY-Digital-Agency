import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function StrongCta() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPackages = () => {
    document.querySelector("#packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center border border-[#D4AF37]/20 bg-[#0D0D0D] p-12 md:p-20 shadow-[0_0_50px_rgba(212,175,55,0.05)]">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6 leading-tight"
          >
            Έτοιμοι να Αναβαθμίσετε <br className="hidden md:block" /> την Επιχείρησή σας;
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground mb-2 max-w-2xl mx-auto"
          >
            Δουλεύουμε με περιορισμένο αριθμό πελατών κάθε μήνα.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-10"
          >
            Θέσεις Διαθέσιμες: Επικοινωνήστε Σήμερα
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="h-14 px-10 bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 font-semibold tracking-widest uppercase rounded-none transition-all"
              data-testid="button-strong-cta-primary"
            >
              Κλείστε μια Συνάντηση
            </Button>
            <Button
              onClick={scrollToPackages}
              variant="outline"
              size="lg"
              className="h-14 px-10 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-semibold tracking-widest uppercase rounded-none transition-all"
              data-testid="button-strong-cta-secondary"
            >
              Δείτε τα Πακέτα
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}