import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 md:bg-background/70 z-10" />
        <img
          src="/images/hero.png"
          alt="CYDigital Hero"
          className="w-full h-full object-cover object-center opacity-40"
        />
        {/* Gradient overlay for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-30">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex flex-col items-center"
          >
            <span className="text-[#D4AF37] text-xs font-semibold tracking-widest uppercase mb-4">
              Cyprus Digital Agency
            </span>
            <div className="w-16 h-px bg-[#D4AF37]"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground leading-[1.1] mb-6 uppercase"
          >
            ΧΤΙΖΟΥΜΕ ΨΗΦΙΑΚΕΣ ΕΜΠΕΙΡΙΕΣ ΠΟΥ ΦΕΡΝΟΥΝ <span className="text-[#D4AF37]">ΑΠΟΤΕΛΕΣΜΑΤΑ</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Premium ιστοσελίδες, branding και digital στρατηγική για επιχειρήσεις που θέλουν να ξεχωρίσουν.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto text-sm h-14 px-8 bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 font-semibold tracking-widest uppercase rounded-none transition-all hover:scale-105 active:scale-95"
              data-testid="button-hero-primary"
            >
              Κλείστε μια Συνάντηση
            </Button>
            <Button
              onClick={scrollToPortfolio}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-sm h-14 px-8 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-semibold tracking-widest uppercase rounded-none transition-all hover:scale-105 active:scale-95"
              data-testid="button-hero-secondary"
            >
              Δείτε τη Δουλειά μας
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}