import { motion } from "framer-motion";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import { MapPin, Mail, Phone } from "lucide-react";

const navLinks = [
  { label: "Αρχική",    href: "#home" },
  { label: "Υπηρεσίες", href: "#services" },
  { label: "Πακέτα",    href: "#packages" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Γιατί Εμάς", href: "#why-us" },
  { label: "Επικοινωνία", href: "#contact" },
];

const socials = [
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FiFacebook,  href: "#", label: "Facebook" },
  { icon: FiLinkedin,  href: "#", label: "LinkedIn" },
];

const contactItems = [
  { icon: MapPin, text: "Λευκωσία, Κύπρος",      href: undefined },
  { icon: Mail,   text: "info@cydigital.agency",  href: "mailto:info@cydigital.agency" },
  { icon: Phone,  text: "+357 99 123456",          href: "tel:+35799123456" },
];

export function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "linear-gradient(to top, rgba(212,175,55,0.05) 0%, transparent 60%), #0B0B0B",
        position: "relative",
      }}
    >
      {/* Top gold divider */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(212,175,55,0.4), transparent)",
        }}
      />

      <div className="container mx-auto px-4 md:px-6" style={{ paddingTop: "72px", paddingBottom: "0" }}>

        {/* 3-column grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16"
          style={{ marginBottom: "64px" }}
        >

          {/* LEFT — logo + tagline + socials */}
          <div>
            <img
              src="/images/logo.png"
              alt="CYDigital"
              style={{ height: "52px", width: "auto", maxWidth: "200px", objectFit: "contain", marginBottom: "20px" }}
            />
            <p
              style={{
                fontSize: "13.5px",
                color: "#888",
                lineHeight: 1.75,
                maxWidth: "260px",
                marginBottom: "28px",
              }}
            >
              Premium Digital Agency για επιχειρήσεις που θέλουν να ξεχωρίζουν.
            </p>
            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#888",
                    transition: "all 0.3s ease",
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(212,175,55,0.12)";
                    el.style.borderColor = "rgba(212,175,55,0.35)";
                    el.style.color = "#D4AF37";
                    el.style.boxShadow = "0 0 14px rgba(212,175,55,0.25)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(255,255,255,0.04)";
                    el.style.borderColor = "rgba(255,255,255,0.06)";
                    el.style.color = "#888";
                    el.style.boxShadow = "none";
                  }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* CENTER — navigation */}
          <div>
            <motion.h3
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#D4AF37",
                fontWeight: 600,
                marginBottom: "24px",
              }}
            >
              Μενού
            </motion.h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={e => scrollTo(e, href)}
                    style={{
                      fontSize: "14px",
                      color: "#888",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#D4AF37")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#888")}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — contact info */}
          <div>
            <motion.h3
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              style={{
                fontSize: "11px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#D4AF37",
                fontWeight: 600,
                marginBottom: "24px",
              }}
            >
              Επικοινωνία
            </motion.h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {contactItems.map(({ icon: Icon, text, href }) => (
                <li key={text} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <Icon
                    style={{ width: "15px", height: "15px", color: "#D4AF37", flexShrink: 0 }}
                  />
                  {href ? (
                    <a
                      href={href}
                      style={{ fontSize: "13.5px", color: "#888", textDecoration: "none", transition: "color 0.2s ease" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#D4AF37")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#888")}
                    >
                      {text}
                    </a>
                  ) : (
                    <span style={{ fontSize: "13.5px", color: "#888" }}>{text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </motion.div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            paddingTop: "28px",
            paddingBottom: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "12px", color: "#555" }}>
            © {new Date().getFullYear()} CYDigital. Με επιφύλαξη παντός δικαιώματος.
          </p>
          <div style={{ display: "flex", gap: "24px" }}>
            {["Όροι Χρήσης", "Πολιτική Απορρήτου"].map(item => (
              <a
                key={item}
                href="#"
                style={{ fontSize: "12px", color: "#555", textDecoration: "none", transition: "color 0.2s ease" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#D4AF37")}
                onMouseLeave={e => (e.currentTarget.style.color = "#555")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
