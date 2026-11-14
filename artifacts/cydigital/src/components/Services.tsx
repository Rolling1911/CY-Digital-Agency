import { motion } from "framer-motion";
import {
  MonitorSmartphone,
  Share2,
  Palette,
  PenTool,
  MapPin,
  Target,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export function Services({ showHeading = true }: { showHeading?: boolean }) {
  const { t, language } = useLanguage();
  const isGreek = language === "el";

  const services = [
    {
      number: "01",
      icon: MonitorSmartphone,
      title: t.service_web_title,
      description: t.service_web_desc,
      href: "/ypiresies/kataskevi-istoselidaas",
      color: "#3155F5",
    },
    {
      number: "02",
      icon: Share2,
      title: t.service_social_title,
      description: t.service_social_desc,
      href: "/ypiresies/social-media",
      color: "#FF6633",
    },
    {
      number: "03",
      icon: Palette,
      title: t.service_graphics_title,
      description: t.service_graphics_desc,
      href: "/ypiresies/grafistika",
      color: "#3155F5",
    },
    {
      number: "04",
      icon: PenTool,
      title: t.service_logo_title,
      description: t.service_logo_desc,
      href: "/ypiresies/grafistika",
      color: "#FF6633",
    },
    {
      number: "05",
      icon: MapPin,
      title: t.service_google_title,
      description: t.service_google_desc,
      href: "/epikoinonia",
      color: "#3155F5",
    },
    {
      number: "06",
      icon: Target,
      title: t.service_ads_title,
      description: t.service_ads_desc,
      href: "/epikoinonia",
      color: "#FF6633",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F7F5EF] py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12 xl:px-16">
        {showHeading && (
          <div className="mb-14 grid items-end gap-6 md:mb-16 md:grid-cols-[1fr_0.65fr]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#FF6633]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3155F5]">
                  {isGreek ? "ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ" : "WHAT WE DO"}
                </span>
              </div>

              <h2 className="max-w-[700px] text-[clamp(2.4rem,5vw,4.8rem)] font-extrabold leading-[1.02] tracking-[-0.07em] text-[#171717]">
                {isGreek ? (
                  <>
                    Όλα όσα χρειάζεται
                    <br />
                    η επιχείρησή σας.
                  </>
                ) : (
                  <>
                    Everything your
                    <br />
                    business needs.
                  </>
                )}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="max-w-[430px] pb-1 text-[14px] leading-[1.9] text-[#171717]/60 md:justify-self-end md:text-[15px]"
            >
              {isGreek
                ? "Συνδυάζουμε στρατηγική, δημιουργικότητα και τεχνολογία για να χτίσουμε μια ολοκληρωμένη ψηφιακή παρουσία για την επιχείρησή σας."
                : "We combine strategy, creativity and technology to build a complete digital presence for your business."}
            </motion.p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={service.href}
                  className="group relative flex h-full min-h-[270px] flex-col border border-[#171717]/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#3155F5]/35 hover:shadow-[0_18px_45px_rgba(23,23,23,0.07)] md:min-h-[290px] md:p-8"
                  data-testid={`service-card-${index}`}
                  aria-label={`${service.title} — ${isGreek ? "Μάθετε περισσότερα" : "Learn more"}`}
                >
                  <div className="mb-9 flex items-start justify-between">
                    <span
                      className="flex h-12 w-12 items-center justify-center"
                      style={{
                        backgroundColor: `${service.color}12`,
                        color: service.color,
                      }}
                    >
                      <Icon size={23} strokeWidth={1.6} />
                    </span>

                    <span className="text-[10px] font-bold tracking-[0.16em] text-[#171717]/30">
                      /{service.number}
                    </span>
                  </div>

                  <h3 className="max-w-[280px] text-[19px] font-bold leading-[1.25] tracking-[-0.04em] text-[#171717] transition-colors duration-200 group-hover:text-[#3155F5]">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-[340px] text-[13px] leading-[1.8] text-[#171717]/55">
                    {service.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between pt-7">
                    <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#171717]/40 transition-colors group-hover:text-[#3155F5]">
                      {isGreek ? "ΜΑΘΕΤΕ ΠΕΡΙΣΣΟΤΕΡΑ" : "EXPLORE SERVICE"}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-[#171717]/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#3155F5]"
                    />
                  </div>

                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-300 group-hover:w-full"
                    style={{ backgroundColor: service.color }}
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
