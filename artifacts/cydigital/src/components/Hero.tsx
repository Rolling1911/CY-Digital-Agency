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
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/80 md:bg-background/70 z-10" />
        <img
          src="/images/hero.png"
          alt="CYDigital Hero"
          className="w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-30">
        <div
          className="max-w-[900px] mx-auto text-center flex flex-col items-center"
          style={{ paddingTop: "120px", paddingBottom: "100px" }}
        >
          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 flex flex-col items-center"
          >
            <motion.span
              className="text-[#D4AF37] font-semibold uppercase"
              style={{ fontSize: "12px", letterSpacing: "2px" }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Cyprus Digital Agency
            </motion.span>
            <div className="w-12 h-px bg-[#D4AF37] mt-3" style={{ opacity: 0.6 }} />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold uppercase text-foreground text-center"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              lineHeight: 1.2,
              letterSpacing: "1px",
              maxWidth: "900px",
            }}
          >
            ΧΤΙΖΟΥΜΕ ΨΗΦΙΑΚΕΣ ΕΜΠΕΙΡΙΕΣ ΠΟΥ ΦΕΡΝΟΥΝ
          </motion.h1>

          {/* Highlighted word */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold uppercase text-[#D4AF37] text-center"
            style={{
              fontSize: "clamp(34px, 4.8vw, 60px)",
              lineHeight: 1.2,
              letterSpacing: "1px",
              marginTop: "12px",
            }}
          >
            ΑΠΟΤΕΛΕΣΜΑΤΑ
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
            style={{
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#BFBFBF",
              maxWidth: "600px",
              margin: "28px auto 0",
            }}
          >
            Premium ιστοσελίδες, branding και digital στρατηγική για επιχειρήσεις που θέλουν να ξεχωρίσουν.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ marginTop: "40px" }}
          >
            <Button
              onClick={scrollToContact}
              className="w-full sm:w-auto bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 font-semibold tracking-widest uppercase rounded-none transition-all hover:scale-[1.03] active:scale-95"
              style={{ padding: "14px 28px", fontSize: "13px", height: "auto" }}
              data-testid="button-hero-primary"
            >
              Κλείστε μια Συνάντηση
            </Button>
            <Button
              onClick={scrollToPortfolio}
              variant="outline"
              className="w-full sm:w-auto border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 font-semibold tracking-widest uppercase rounded-none transition-all hover:scale-[1.03] active:scale-95"
              style={{ padding: "14px 28px", fontSize: "13px", height: "auto" }}
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
