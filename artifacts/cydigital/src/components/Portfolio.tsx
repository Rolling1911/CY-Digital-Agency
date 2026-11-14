import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Portfolio({ showHeading = true }: { showHeading?: boolean }) {
  const { t, language } = useLanguage();
  const isGreek = language === "el";

  const items = [
    {
      title: "FAF Bistro Bar Lounge",
      category: isGreek ? "ΙΣΤΟΣΕΛΙΔΑ" : "WEB DESIGN",
      description: isGreek
        ? "Ψηφιακή παρουσία για χώρο εστίασης και φιλοξενίας."
        : "A digital presence for a hospitality and dining destination.",
      image: "/images/portfolio-faf-v4.png",
      href: "https://faf-jakobstad.vercel.app/",
    },
    {
      title: "Beauty Salon",
      category: "SOCIAL MEDIA",
      description: isGreek
        ? "Οπτικό περιεχόμενο και δημιουργική κατεύθυνση για brand ομορφιάς."
        : "Visual content and creative direction for a beauty brand.",
      image: "/images/portfolio-frosos-wide.png",
      href: "",
    },
    {
      title: isGreek ? "Εταιρική Ταυτότητα" : "Brand Identity",
      category: isGreek ? "BRANDING" : "BRANDING",
      description: isGreek
        ? "Σχεδιαστική προσέγγιση για μια συνεκτική εταιρική εικόνα."
        : "A design approach to building a consistent brand identity.",
      image: "/images/portfolio-branding.png",
      href: "",
    },
    {
      title: "Africa Trader Edge",
      category: isGreek ? "ΨΗΦΙΑΚΗ ΠΛΑΤΦΟΡΜΑ" : "DIGITAL PLATFORM",
      description: isGreek
        ? "Σχεδιασμός ψηφιακής εμπειρίας για πλατφόρμα χρηματοοικονομικής εκπαίδευσης."
        : "Digital experience design for a financial education platform.",
      image: "/images/portfolio-africa.png",
      href: "https://africatraderedge.com/",
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-[#F7F5EF] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-[#3155F5]/[0.045] blur-[120px]" />

      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 xl:px-16">
        {showHeading && (
          <div className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#FF6633]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6633]">
                  {isGreek ? "ΕΠΙΛΕΓΜΕΝΑ ΕΡΓΑ" : "SELECTED WORK"}
                </span>
              </div>

              <h2 className="max-w-[700px] text-[clamp(2.5rem,5vw,5rem)] font-extrabold leading-[1.02] tracking-[-0.07em] text-[#171717]">
                {t.portfolio_heading}
                <span className="text-[#3155F5]">.</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="max-w-[390px] text-[14px] leading-[1.9] text-[#171717]/60 md:pb-1"
            >
              {isGreek
                ? "Μια επιλογή από ψηφιακά έργα, δημιουργικές εφαρμογές και οπτικές ταυτότητες."
                : "A selection of digital projects, creative work and visual identities."}
            </motion.p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.09,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group min-w-0"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#171717]/5">
                <img
                  src={item.image}
                  alt={`${item.title} — ${item.category}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                <span className="absolute left-4 top-4 border border-white/30 bg-[#171717]/70 px-3 py-2 text-[9px] font-bold tracking-[0.16em] text-white backdrop-blur-sm">
                  {item.category}
                </span>

                <span className="absolute bottom-4 right-4 text-[10px] font-semibold tracking-[0.12em] text-white/80">
                  0{index + 1} / 04
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 border-b border-[#171717]/15 py-5">
                <div className="min-w-0">
                  <h3 className="text-[20px] font-bold tracking-[-0.04em] text-[#171717] md:text-[23px]">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-[420px] text-[12px] leading-[1.8] text-[#171717]/60 md:text-[13px]">
                    {item.description}
                  </p>
                </div>

                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${isGreek ? "Επισκεφθείτε" : "Visit"} ${item.title}`}
                    className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-[#171717]/20 text-[#171717] transition-all duration-300 hover:border-[#3155F5] hover:bg-[#3155F5] hover:text-white"
                  >
                    <ArrowUpRight size={18} />
                  </a>
                ) : (
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center border border-[#171717]/10 text-[#171717]/35"
                  >
                    <span className="text-[17px]">+</span>
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
