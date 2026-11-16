import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Instagram,
  Facebook,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const socials = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/cy_digital_agency/",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/Cydigitalagaency1",
    label: "Facebook",
  },
];

export function Footer() {
  const { t, language } = useLanguage();
  const isGreek = language === "el";

  const navLinks = [
    { label: t.nav_home, href: "/" },
    { label: t.nav_services, href: "/ypiresies" },
    { label: t.nav_packages, href: "/paketa" },
    { label: t.nav_why_us, href: "/giati-emas" },
    { label: t.nav_contact, href: "/epikoinonia" },
  ];

  const serviceLinks = [
    {
      label: isGreek ? "Κατασκευή Ιστοσελίδων" : "Website Development",
      href: "/ypiresies/kataskevi-istoselidas",
    },
    {
      label: "Social Media",
      href: "/ypiresies/social-media",
    },
    {
      label: isGreek ? "Γραφιστικά & Branding" : "Graphic Design & Branding",
      href: "/ypiresies/grafistika",
    },
    {
      label: isGreek ? "Δημιουργία Περιεχομένου" : "Content Creation",
      href: "/ypiresies/dimioyrgia-periekhomenou",
    },
  ];

  const contactItems = [
    {
      icon: MapPin,
      text: isGreek ? "Λάρνακα, Κύπρος" : "Larnaca, Cyprus",
    },
    {
      icon: Mail,
      text: "info@cydigital.agency",
      href: "mailto:info@cydigital.agency",
    },
    {
      icon: Phone,
      text: "+357 94 344355",
      href: "tel:+35794344355",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#171717] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-[#3155F5]/[0.10] blur-[120px]" />
        <div className="absolute -bottom-48 left-0 h-[360px] w-[360px] rounded-full bg-[#FF6633]/[0.07] blur-[110px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 pb-8 pt-16 md:px-10 md:pt-20 lg:px-16">
        <motion.div
          className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.15fr] lg:gap-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <a href="/" className="inline-flex items-center">
              <img
                src="/images/logo-agency.png"
                alt="CY Digital"
                className="h-auto w-[190px] object-contain brightness-0 invert"
              />
            </a>

            <p className="mt-6 max-w-[310px] text-sm leading-7 text-white/60">
              {isGreek
                ? "Δημιουργούμε ψηφιακές εμπειρίες με στρατηγική, δημιουργικότητα και τεχνολογία που βοηθούν τις επιχειρήσεις να εξελίσσονται."
                : "We create digital experiences through strategy, creativity and technology, helping businesses move forward."}
            </p>

            <div className="mt-8">
              <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/40">
                {isGreek ? "Ακολουθήστε μας" : "Follow us"}
              </p>

              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-200 hover:border-[#3155F5] hover:bg-[#3155F5] hover:text-white"
                  >
                    <Icon size={18} strokeWidth={1.7} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              {isGreek ? "Πλοήγηση" : "Explore"}
            </h3>

            <nav className="flex flex-col gap-3">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="w-fit text-sm text-white/60 transition-colors hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              {isGreek ? "Υπηρεσίες" : "Services"}
            </h3>

            <nav className="flex flex-col gap-3">
              {serviceLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="w-fit text-sm text-white/60 transition-colors hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white">
              {isGreek ? "Επικοινωνία" : "Get in touch"}
            </h3>

            <div className="flex flex-col gap-5">
              {contactItems.map(({ icon: Icon, text, href }) => {
                const content = (
                  <>
                    <Icon
                      size={17}
                      strokeWidth={1.6}
                      className="mt-0.5 shrink-0 text-[#8FA2FF]"
                    />
                    <span className="text-sm leading-6 text-white/60 transition-colors group-hover:text-white">
                      {text}
                    </span>
                  </>
                );

                return href ? (
                  <a
                    key={text}
                    href={href}
                    className="group flex items-start gap-3"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={text} className="flex items-start gap-3">
                    {content}
                  </div>
                );
              })}
            </div>

            <a
              href="/epikoinonia"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#FF6633]"
            >
              {isGreek ? "Ας μιλήσουμε" : "Let's talk"}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </motion.div>

        <div className="my-12 h-px bg-white/10" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white/70">CY Digital</span>
            {" · "}
            {isGreek
              ? "Με επιφύλαξη παντός δικαιώματος."
              : "All rights reserved."}
          </p>

          <p className="text-xs text-white/40">
            {isGreek
              ? "Σχεδιασμένο με σκοπό. Δημιουργημένο με προσοχή."
              : "Designed with purpose. Built with care."}
          </p>
        </div>
      </div>
    </footer>
  );
}
