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
    { label: "Social Media", href: "/ypiresies/social-media" },
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
    <footer className="relative isolate overflow-hidden bg-[#111111] text-[#F7F5EF]">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -right-40 -top-48 h-[480px] w-[480px] rounded-full bg-[#3155F5]/[0.12] blur-[140px]" />
        <div className="absolute -bottom-64 -left-40 h-[420px] w-[420px] rounded-full bg-[#FF6633]/[0.08] blur-[130px]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">
        <motion.div
          className="relative border-b border-white/10 py-16 md:py-20 lg:py-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-3xl">
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#8FA2FF]">
              {isGreek ? "Η επόμενη κίνησή σας" : "Your next move"}
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              {isGreek
                ? "Έτοιμοι να δημιουργήσουμε κάτι ξεχωριστό;"
                : "Ready to create something exceptional?"}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 md:text-base">
              {isGreek
                ? "Ας συζητήσουμε την ιδέα σας και ας τη μετατρέψουμε σε μια δυνατή ψηφιακή παρουσία."
                : "Let's talk about your ideas and turn them into a stronger digital presence for your business."}
            </p>

            <a
              href="/epikoinonia"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#F7F5EF] px-6 py-3.5 text-sm font-semibold text-[#171717] transition-all duration-300 hover:bg-[#FF6633] hover:text-white"
            >
              {isGreek ? "Ξεκινήστε ένα project" : "Start a project"}
              <ArrowUpRight size={17} />
            </a>
          </div>

          <div className="pointer-events-none absolute bottom-12 right-0 hidden select-none text-[180px] font-semibold leading-none tracking-[-0.1em] text-white/[0.025] xl:block">
            CY
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.5fr_0.85fr_1.1fr_1.1fr] lg:gap-10 lg:py-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div>
            <a href="/" className="inline-flex items-center">
              <img
                src="/images/logo-agency-transparent.png"
                alt="CY Digital Agency"
                className="h-auto w-[210px] object-contain brightness-0 invert"
              />
            </a>

            <p className="mt-6 max-w-[310px] text-sm leading-7 text-white/55">
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
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-[#3155F5] hover:bg-[#3155F5] hover:text-white"
                  >
                    <Icon size={18} strokeWidth={1.7} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90">
              {isGreek ? "Πλοήγηση" : "Explore"}
            </h3>
            <nav className="flex flex-col gap-4">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="w-fit text-sm text-white/55 transition-colors duration-200 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90">
              {isGreek ? "Υπηρεσίες" : "Services"}
            </h3>
            <nav className="flex flex-col gap-4">
              {serviceLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  className="w-fit text-sm text-white/55 transition-colors duration-200 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-6 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90">
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
                    <span className="text-sm leading-6 text-white/55 transition-colors group-hover:text-white">
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

        <div className="border-t border-white/10 py-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-white/40">
              © {new Date().getFullYear()}{" "}
              <span className="font-semibold text-white/75">CY Digital</span>
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
      </div>
    </footer>
  );
}
