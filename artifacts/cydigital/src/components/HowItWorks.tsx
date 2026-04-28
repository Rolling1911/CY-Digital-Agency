import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    text: "Μας λέτε τι χρειάζεται η επιχείρησή σας"
  },
  {
    num: "02",
    text: "Ετοιμάζουμε στρατηγική και προσφορά"
  },
  {
    num: "03",
    text: "Δημιουργούμε το υλικό και το πλάνο"
  },
  {
    num: "04",
    text: "Ξεκινάμε την ανάπτυξη της επιχείρησής σας"
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-card relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Πώς λειτουργεί
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-primary mx-auto rounded-full" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-[2px] bg-border border-dashed border-t-2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-6 relative z-10 shadow-[0_0_30px_rgba(201,162,74,0.15)]">
                <span className="text-3xl font-bold text-primary">{step.num}</span>
              </div>
              <p className="text-lg font-medium text-foreground max-w-[250px]">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
