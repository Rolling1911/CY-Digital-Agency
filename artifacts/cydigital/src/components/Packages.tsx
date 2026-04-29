import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Starter",
    price: "€199",
    period: "/μήνα",
    description: "Ιδανικό για νέες επιχειρήσεις",
    features: [
      "8 social media posts",
      "Basic design",
      "Google Business setup",
      "Monthly report"
    ],
    popular: false
  },
  {
    name: "Growth",
    price: "€399",
    period: "/μήνα",
    description: "Για επιχειρήσεις που θέλουν ανάπτυξη",
    features: [
      "12–16 social media posts",
      "Reels ideas",
      "Landing page",
      "Ads management",
      "Strategy call"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "€699",
    period: "/μήνα",
    description: "Ολοκληρωμένη digital παρουσία",
    features: [
      "Full website creation",
      "Social media management",
      "Graphic design",
      "Branding support",
      "Ads management",
      "Monthly strategy review"
    ],
    popular: false
  }
];

export function Packages() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="packages" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Πακέτα για κάθε επιχείρηση
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#D4AF37] uppercase tracking-widest text-sm font-medium mb-6"
          >
            Επιλέξτε το πακέτο που ταιριάζει στους στόχους σας
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-[#0D0D0D] p-8 ${
                pkg.popular 
                  ? "border border-[#D4AF37]/50 shadow-[0_0_40px_rgba(212,175,55,0.15)] md:-translate-y-4" 
                  : "border border-white/5"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#0D0D0D] border border-[#D4AF37] text-[#D4AF37] px-6 py-1 text-xs font-bold tracking-widest uppercase">
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-8 border-b border-white/10 pb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{pkg.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-sm font-semibold text-muted-foreground mr-1">Από</span>
                  <span className="text-5xl font-display font-bold text-[#D4AF37]">{pkg.price}</span>
                  <span className="text-muted-foreground ml-1">{pkg.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-[#D4AF37] mr-3 shrink-0" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                onClick={scrollToContact}
                className={`w-full h-12 text-sm uppercase tracking-widest font-semibold rounded-none transition-all ${
                  pkg.popular
                    ? "bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90"
                    : "bg-transparent border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
                }`}
                data-testid={`button-package-${pkg.name.toLowerCase()}`}
              >
                Ενδιαφέρομαι
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}