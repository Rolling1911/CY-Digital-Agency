import { motion } from "framer-motion";
import { FiInstagram, FiFacebook } from "react-icons/fi";
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
];

const contactItems = [
  { icon: MapPin, text: "Λάρνακα, Κύπρος",       href: undefined },
  { icon: Mail,   text: "info@cydigital.agency",  href: "mailto:info@cydigital.agency" },
  { icon: Phone,  text: "+357 94 344355",          href: "tel:+35794344355" },
];

/** Luxury vertical gold divider with diamond ornaments top & bottom */
function VDivider() {
  return (
    <div className="footer-vdivider">
      <div className="footer-vdivider-dot" />
      <div className="footer-vdivider-dot" style={{ marginTop: "auto" }} />
    </div>
  );
}

export function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer-premium" style={{ padding: "80px 40px 36px" }}>

      {/* Gold wave background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="/images/hero-bg.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.45 }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(5,5,5,0.82) 0%, rgba(5,5,5,0.78) 60%, rgba(5,5,5,0.88) 100%)",
        }} />
      </div>

      {/* Top gold hairline */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1px",
        background: "linear-gradient(to right, transparent, rgba(212,175,55,0.5), transparent)",
        zIndex: 2,
      }} />

      <div className="container mx-auto" style={{ position: "relative", zIndex: 2 }}>

        {/* 5-column grid: col | divider | col | divider | col */}
        <motion.div
          className="footer-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >

          {/* ── COL 1: Brand ── */}
          <div className="footer-col">
            <div style={{ position: "relative", display: "block", marginBottom: "8px" }}>
              <div style={{
                position: "absolute", inset: "-24px", borderRadius: "50%",
                background: "radial-gradient(circle, rgba(212,175,55,0.16), transparent 70%)",
                filter: "blur(22px)", pointerEvents: "none",
              }} />
              <img
                src="/images/logo-agency.png"
                alt="CYDigital"
                style={{ position: "relative", height: "auto", width: "340px", objectFit: "contain", display: "block", marginLeft: "-56px" }}
              />
            </div>

            <p className="footer-brand-desc" style={{ color: "#BFBFBF", margin: "14px 0 18px", lineHeight: 1.7, fontSize: "13.5px", maxWidth: "260px" }}>
              Premium Digital Agency για επιχειρήσεις που θέλουν να ξεχωρίζουν.
            </p>

            <div style={{ width: "70px", height: "1px", background: "linear-gradient(to right, transparent, #D4AF37, transparent)", marginBottom: "18px" }} className="footer-col-divider" />

            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#D4AF37", fontWeight: 700, marginBottom: "12px" }}
            >
              Ακολουθήστε Μας
            </motion.p>

            <div className="footer-social-icon-row" style={{ display: "flex", gap: "10px", justifyContent: "flex-start" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="footer-social-icon">
                  <Icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* ── DIVIDER 1 ── */}
          <VDivider />

          {/* ── COL 2: Menu ── */}
          <div className="footer-col">
            <motion.h3
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ color: "#D4AF37", fontSize: "11px", letterSpacing: "2.5px", textTransform: "uppercase", fontWeight: 700, marginBottom: "8px" }}
            >
              Μενού
            </motion.h3>
            <div style={{ width: "60px", height: "1px", background: "linear-gradient(to right, transparent, #D4AF37, transparent)", marginBottom: "18px" }} className="footer-col-divider" />

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

          {/* ── DIVIDER 2 ── */}
          <VDivider />

          {/* ── COL 3: Contact ── */}
          <div className="footer-col">
            <motion.h3
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              style={{ color: "#D4AF37", fontSize: "11px", letterSpacing: "2.5px", textTransform: "uppercase", fontWeight: 700, marginBottom: "8px" }}
            >
              Επικοινωνία
            </motion.h3>
            <div style={{ width: "60px", height: "1px", background: "linear-gradient(to right, transparent, #D4AF37, transparent)", marginBottom: "22px" }} className="footer-col-divider" />

            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
              {contactItems.map(({ icon: Icon, text, href }) => (
                <div key={text} className="footer-contact-item" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "38px", height: "38px", borderRadius: "50%", flexShrink: 0,
                    border: "1px solid rgba(212,175,55,0.2)",
                    background: "rgba(212,175,55,0.06)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <Icon style={{ width: "15px", height: "15px", color: "#D4AF37" }} />
                  </div>
                  {href ? (
                    <a href={href}
                      style={{ fontSize: "14px", color: "#BFBFBF", textDecoration: "none", transition: "color 0.2s ease" }}
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
            <div className="footer-response-box" style={{
              padding: "10px 14px", borderRadius: "10px",
              border: "1px solid rgba(212,175,55,0.22)",
              background: "rgba(255,255,255,0.02)",
              display: "inline-flex", alignItems: "center", gap: "10px",
            }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "50%", flexShrink: 0,
                border: "1px solid rgba(212,175,55,0.25)",
                background: "rgba(212,175,55,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Clock style={{ width: "13px", height: "13px", color: "#D4AF37" }} />
              </div>
              <div>
                <p style={{ fontSize: "10px", fontWeight: 700, color: "#D4AF37", letterSpacing: "1px", textTransform: "uppercase", margin: 0 }}>
                  Απαντάμε Συνήθως
                </p>
                <p style={{ fontSize: "11px", color: "#888", margin: "2px 0 0" }}>Μέσα σε 24 ώρες</p>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Diamond bottom divider */}
        <div className="footer-bottom-divider"><span /></div>

        {/* Bottom bar */}
        <div className="footer-bottom-bar" style={{
          maxWidth: "1300px", margin: "0 auto",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "12px", paddingBottom: "8px",
          position: "relative", zIndex: 2,
        }}>
          <p style={{ fontSize: "14px", color: "#888", margin: 0 }}>
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "#D4AF37" }}>CYDigital</span>
            . Με επιφύλαξη παντός δικαιώματος.
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            {["Όροι Χρήσης", "Πολιτική Απορρήτου"].map((item, i) => (
              <span key={item} style={{ display: "flex", alignItems: "center" }}>
                <a href="#"
                  style={{ fontSize: "14px", color: "#888", textDecoration: "none", transition: "color 0.2s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#D4AF37")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#888")}
                >{item}</a>
                {i === 0 && <span style={{ color: "rgba(212,175,55,0.3)", margin: "0 12px" }}>|</span>}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
