import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function StrongCta() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[#122840] to-[#1E3A5F] z-0" />
      
      {/* Decorative Gold Elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-[100px] z-0" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[100px] z-0" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center border border-primary/20 bg-background/50 backdrop-blur-sm p-12 md:p-20 rounded-3xl shadow-[0_0_50px_rgba(201,162,74,0.1)]">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight"
          >
            Έτοιμοι να αναπτύξετε <br className="hidden md:block" /> την επιχείρησή σας;
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto"
          >
            Στείλτε μας λίγες πληροφορίες και θα σας προτείνουμε την καλύτερη λύση.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="text-lg h-14 px-10 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_10px_25px_rgba(201,162,74,0.3)] hover:shadow-[0_15px_30px_rgba(201,162,74,0.4)]"
              data-testid="button-strong-cta"
            >
              Ζητήστε Δωρεάν Προσφορά
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
