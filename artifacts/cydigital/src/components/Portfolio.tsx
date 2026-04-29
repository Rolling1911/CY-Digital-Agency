import { motion } from "framer-motion";

const placeholders = [
  {
    title: "Ιστοσελίδα Εστιατορίου",
    category: "Web Design",
    result: "+45% Αύξηση Πωλήσεων",
    bg: "from-[#1a1a1a] to-[#2a1f0a]",
    label: "WEB",
  },
  {
    title: "Social Media Beauty Salon",
    category: "Social Media",
    result: "+200% Engagement",
    bg: "from-[#1a1a1a] to-[#0a1a2a]",
    label: "SM",
  },
  {
    title: "Branding Project",
    category: "Branding",
    result: "Brand Identity από Μηδέν",
    bg: "from-[#1a1a1a] to-[#1a0a2a]",
    label: "BR",
  },
];

function DemoriloAd() {
  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden" style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, #0a1628 0%, #0d1f3c 40%, #122448 70%, #0a1628 100%)",
        }}
      />

      {/* Architectural line pattern overlay */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 60px),
                            repeating-linear-gradient(90deg, #C9A84C 0px, #C9A84C 1px, transparent 1px, transparent 60px)`,
        }}
      />

      {/* Luxury building silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-2/5 opacity-10"
        style={{
          background: `linear-gradient(to top, #C9A84C22, transparent)`,
        }}
      />
      <svg className="absolute bottom-0 left-0 right-0 w-full opacity-[0.08]" viewBox="0 0 400 160" preserveAspectRatio="xMidYMax slice">
        <rect x="30" y="60" width="40" height="100" fill="#C9A84C"/>
        <rect x="35" y="40" width="30" height="20" fill="#C9A84C"/>
        <rect x="80" y="30" width="60" height="130" fill="#C9A84C"/>
        <rect x="88" y="10" width="44" height="25" fill="#C9A84C"/>
        <rect x="150" y="50" width="50" height="110" fill="#C9A84C"/>
        <rect x="210" y="20" width="70" height="140" fill="#C9A84C"/>
        <rect x="218" y="0" width="54" height="25" fill="#C9A84C"/>
        <rect x="290" y="45" width="45" height="115" fill="#C9A84C"/>
        <rect x="345" y="65" width="35" height="95" fill="#C9A84C"/>
      </svg>

      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, #E8C96A, #C9A84C, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-[7%]">

        {/* Logo / Brand top */}
        <div className="flex items-center justify-between mb-auto">
          <div>
            <div className="text-[#C9A84C] tracking-[0.35em] text-[0.6em] font-semibold uppercase mb-0.5">
              DEMORILO
            </div>
            <div className="text-white/50 tracking-[0.2em] text-[0.45em] uppercase">
              Holdings Ltd
            </div>
          </div>
          <div className="text-right">
            <div className="text-white/40 text-[0.45em] tracking-wider uppercase">Larnaca, Cyprus</div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="w-8 h-px my-[4%]" style={{ background: "#C9A84C" }} />

        {/* Main headline */}
        <div className="mb-[5%]">
          <h2 className="text-white font-bold leading-tight mb-1"
            style={{ fontSize: "clamp(1.1rem, 4.5vw, 2.2rem)", fontFamily: "Cormorant Garamond, Georgia, serif", letterSpacing: "0.02em" }}>
            Your Property.
          </h2>
          <h2 className="font-bold leading-tight"
            style={{ fontSize: "clamp(1.1rem, 4.5vw, 2.2rem)", fontFamily: "Cormorant Garamond, Georgia, serif", color: "#C9A84C", letterSpacing: "0.02em" }}>
            Our Priority.
          </h2>
          <p className="text-white/55 mt-[3%] leading-relaxed"
            style={{ fontSize: "clamp(0.55rem, 1.8vw, 0.85rem)" }}>
            Professional property management services tailored for landlords &amp; investors in Cyprus.
          </p>
        </div>

        {/* Service icons */}
        <div className="flex gap-[4%] mb-[5%]">
          {[
            { icon: "🏢", label: "Management" },
            { icon: "🔧", label: "Maintenance" },
            { icon: "🔑", label: "Rental" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center flex-1"
              style={{ border: "1px solid rgba(201,168,76,0.25)", padding: "6% 4%", background: "rgba(201,168,76,0.05)" }}>
              <span style={{ fontSize: "clamp(1rem, 3vw, 1.5rem)" }}>{s.icon}</span>
              <span className="text-white/60 mt-1 tracking-wider uppercase"
                style={{ fontSize: "clamp(0.38rem, 1.2vw, 0.58rem)" }}>{s.label}</span>
            </div>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* CTA bar */}
        <div className="flex items-center justify-between"
          style={{ borderTop: "1px solid rgba(201,168,76,0.3)", paddingTop: "4%" }}>
          <div>
            <div className="text-[#C9A84C] font-semibold tracking-wide"
              style={{ fontSize: "clamp(0.55rem, 1.8vw, 0.82rem)" }}>
              +357 24400343
            </div>
            <div className="text-white/40 tracking-wider"
              style={{ fontSize: "clamp(0.42rem, 1.4vw, 0.65rem)" }}>
              www.demorilo.com
            </div>
          </div>
          <div className="text-white text-center font-semibold tracking-widest uppercase"
            style={{
              fontSize: "clamp(0.4rem, 1.3vw, 0.6rem)",
              border: "1px solid #C9A84C",
              padding: "2% 5%",
              background: "rgba(201,168,76,0.12)",
              letterSpacing: "0.15em",
            }}>
            Get a Free<br />Consultation
          </div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px]"
        style={{ background: "linear-gradient(90deg, transparent, #C9A84C, #E8C96A, #C9A84C, transparent)" }}
      />
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            Δείγματα δουλειάς
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Boxes 1–3: placeholders */}
          {placeholders.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden cursor-pointer"
              style={{ aspectRatio: "4/3" }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bg}`} />
              <div className="absolute inset-0 border border-[#D4AF37]/20" />
              <div className="absolute top-0 left-0 w-12 h-12">
                <div className="absolute top-0 left-0 w-full h-px bg-[#D4AF37]" />
                <div className="absolute top-0 left-0 h-full w-px bg-[#D4AF37]" />
              </div>
              <div className="absolute bottom-0 right-0 w-12 h-12">
                <div className="absolute bottom-0 right-0 w-full h-px bg-[#D4AF37]" />
                <div className="absolute bottom-0 right-0 h-full w-px bg-[#D4AF37]" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-[#D4AF37]/30 font-display font-bold text-7xl tracking-widest select-none">
                  {item.label}
                </span>
              </div>
              <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center">
                <span className="text-[#D4AF37] font-medium mb-4 tracking-[0.2em] text-xs uppercase">
                  {item.category}
                </span>
                <h3 className="text-3xl font-display font-bold text-white mb-4">
                  {item.title}
                </h3>
                <span className="text-[#D4AF37] italic font-display text-xl">
                  {item.result}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Box 4: Demorilo Holdings Ad */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative overflow-hidden cursor-pointer"
            style={{ aspectRatio: "1/1" }}
          >
            <DemoriloAd />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-8 text-center z-20">
              <span className="text-[#D4AF37] font-medium mb-4 tracking-[0.2em] text-xs uppercase">
                Advertising
              </span>
              <h3 className="text-3xl font-display font-bold text-white mb-4">
                Καμπάνια Διαφημίσεων — Real Estate
              </h3>
              <span className="text-[#D4AF37] italic font-display text-xl">
                3x ROAS σε 30 Ημέρες
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
