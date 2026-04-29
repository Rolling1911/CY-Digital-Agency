import { motion } from "framer-motion";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const navLinks = [
  { label: "Αρχική",      href: "#home" },
  { label: "Υπηρεσίες",   href: "#services" },
  { label: "Πακέτα",      href: "#packages" },
  { label: "Portfolio",   href: "#portfolio" },
  { label: "Γιατί Εμάς",  href: "#why-us" },
  { label: "Επικοινωνία", href: "#contact" },
];

const socials = [
  { icon: FiInstagram, href: "#", label: "Instagram" },
  { icon: FiFacebook,  href: "#", label: "Facebook" },
  { icon: FiLinkedin,  href: "#", label: "LinkedIn" },
];

const contactItems = [
  { icon: MapPin, text: "Λάρνακα, Κύπρος",       href: undefined },
  { icon: Mail,   text: "info@cydigital.agency",  href: "mailto:info@cydigital.agency" },
  { icon: Phone,  text: "+357 94 344355",          href: "tel:+35794344355" },
];

export function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer-premium" style={{ padding: "100px 40px 40px" }}>

      {/* Top hairline divider */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(to right, transparent, rgba(212,175,55,0.45), transparent)",
        zIndex: 2,
      }} />

      <div className="container mx-auto" style={{ position: "relative", zIndex: 2 }}>

        {/* 3-column grid */}
        <motion.div
          className="footer-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >

          {/* ── LEFT: Brand ── */}
          <div>
            <img
              src="/images/logo-new.png"
              alt="CYDigital"
              style={{ height: "auto", width: "210px", objectFit: "contain", marginBottom: "20px" }}
            />

            <p className="footer-description" style={{ color: "#BFBFBF", margin: "16px 0 20px", lineHeight: 1.7, fontSize: "14px", maxWidth: "280px" }}>
              Premium Digital Agency για επιχειρήσεις που θέλουν να ξεχωρίζουν.
            </p>

            {/* Gold divider */}
            <div style={{ width: "60px", height: "2px", background: "#D4AF37", margin: "20px 0" }} />

            {/* Social label */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#D4AF37", fontWeight: 700, marginBottom: "14px" }}
            >
              Ακολουθήστε Μας
            </motion.p>

            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="footer-social-icon">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* ── CENTER: Menu ── */}
          <div>
            <motion.h3
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ color: "#D4AF37", fontSize: "11px", letterSpacing: "2.5px", textTransform: "uppercase", fontWeight: 700, marginBottom: "8px" }}
            >
              Μενού
            </motion.h3>
            <div style={{ width: "32px", height: "2px", background: "#D4AF37", marginBottom: "20px" }} />

            <nav style={{ display: "flex", flexDirection: "column" }}>
              {navLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={e => scrollTo(e, href)}
                  className="footer-link"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* ── RIGHT: Contact ── */}
          <div>
            <motion.h3
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              style={{ color: "#D4AF37", fontSize: "11px", letterSpacing: "2.5px", textTransform: "uppercase", fontWeight: 700, marginBottom: "8px" }}
            >
              Επικοινωνία
            </motion.h3>
            <div style={{ width: "32px", height: "2px", background: "#D4AF37", marginBottom: "24px" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "28px" }}>
              {contactItems.map(({ icon: Icon, text, href }) => (
                <div key={text} className="contact-item" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "38px", height: "38px", borderRadius: "50%",
                    border: "1px solid rgba(212,175,55,0.2)",
                    background: "rgba(212,175,55,0.06)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon style={{ width: "15px", height: "15px", color: "#D4AF37" }} />
                  </div>
                  {href ? (
                    <a href={href} style={{ fontSize: "14px", color: "#BFBFBF", textDecoration: "none", transition: "color 0.2s ease" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#D4AF37")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#BFBFBF")}
                    >{text}</a>
                  ) : (
                    <span style={{ fontSize: "14px", color: "#BFBFBF" }}>{text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Response time box */}
            <div style={{
              marginTop: "8px", padding: "15px 16px", borderRadius: "12px",
              border: "1px solid rgba(212,175,55,0.22)",
              background: "rgba(255,255,255,0.02)",
              display: "flex", alignItems: "center", gap: "12px",
            }}>
              <div style={{
                width: "38px", height: "38px", borderRadius: "50%",
                border: "1px solid rgba(212,175,55,0.25)",
                background: "rgba(212,175,55,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Clock style={{ width: "15px", height: "15px", color: "#D4AF37" }} />
              </div>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#D4AF37", letterSpacing: "1px", textTransform: "uppercase", margin: 0 }}>
                  Απαντάμε Συνήθως
                </p>
                <p style={{ fontSize: "12px", color: "#888", margin: "3px 0 0" }}>Μέσα σε 2–4 ώρες</p>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Diamond divider */}
        <div className="footer-bottom-divider">
          <span />
        </div>

        {/* Bottom bar */}
        <div style={{
          position: "relative", zIndex: 2,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "12px",
          paddingBottom: "8px",
        }}>
          <p style={{ fontSize: "14px", color: "#888", margin: 0 }}>
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "#D4AF37" }}>CYDigital</span>
            . Με επιφύλαξη παντός δικαιώματος.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {["Όροι Χρήσης", "Πολιτική Απορρήτου"].map((item, i) => (
              <span key={item} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <a href="#" style={{ fontSize: "14px", color: "#888", textDecoration: "none", marginLeft: i > 0 ? "0" : "0", transition: "color 0.2s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#D4AF37")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#888")}
                >{item}</a>
                {i === 0 && <span style={{ color: "rgba(212,175,55,0.3)", margin: "0 8px" }}>|</span>}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
