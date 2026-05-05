import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export function Portfolio() {
  const { t } = useLanguage();

  const items = [
    {
      title: "FAF Bistro Bar Lounge",
      category: "Web Design",
      result: "+45% Αύξηση Κρατήσεων",
      image: "/images/portfolio-faf-v4.png",
      href: "https://faf-jakobstad.vercel.app/",
    },
    {
      title: "Social Media Beauty Salon",
      category: "Social Media",
      result: "+200% Engagement",
      image: "/images/portfolio-frosos-wide.png",
      href: "",
    },
    {
      title: "Branding Project",
      category: "Branding",
      result: t.portfolio_item3_result,
      image: "/images/portfolio-branding.png",
      href: "https://cydigital.agency",
    },
    {
      title: "Africa Trader Edge",
      category: "Web Design",
      result: "Premium Trading Platform",
      image: "/images/portfolio-africa.png",
      href: "https://africatraderedge.com",
    },
  ];

  return (
    <section id="portfolio" className="pt-9 pb-3 md:pt-16 md:pb-4 bg-black">
      <div className="container mx-auto px-4 md:px-6">

        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
          >
            {t.portfolio_heading}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden"
              style={{ height: "360px", cursor: item.href ? "pointer" : "default" }}
              onClick={() => {
                if (item.href) window.open(item.href, "_blank", "noopener,noreferrer");
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/40 transition-all duration-500" />

              <div
                className="absolute top-4 left-4"
                style={{
                  background: "rgba(212,175,55,0.15)",
                  border: "1px solid rgba(212,175,55,0.4)",
                  backdropFilter: "blur(6px)",
                  padding: "4px 12px",
                  borderRadius: "2px",
                }}
              >
                <span style={{ fontSize: "9px", letterSpacing: "2.5px", color: "#D4AF37", fontWeight: 700, textTransform: "uppercase" }}>
                  {item.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 flex items-end justify-between">
                <div>
                  <h3
                    className="font-display font-bold text-white"
                    style={{ fontSize: "clamp(18px, 2vw, 22px)", lineHeight: 1.2, marginBottom: "4px" }}
                  >
                    {item.title}
                  </h3>
                  <span
                    className="font-display italic"
                    style={{ fontSize: "14px", color: "#D4AF37", opacity: 0.9 }}
                  >
                    {item.result}
                  </span>
                </div>
                {item.href && (
                  <div
                    className="flex-shrink-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0"
                    style={{
                      width: "36px", height: "36px", borderRadius: "50%",
                      border: "1px solid rgba(212,175,55,0.6)",
                      background: "rgba(212,175,55,0.1)",
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
