import { motion } from "framer-motion";
import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";
import { MapPin, Mail, Phone, Clock, ChevronRight } from "lucide-react";

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

export function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ position: "relative", overflow: "hidden" }}>

      {/* Background image with overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <img
          src="/images/hero-bg.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", opacity: 0.35 }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #0B0B0B 0%, rgba(11,11,11,0.88) 40%, rgba(11,11,11,0.92) 100%)" }} />
      </div>

      {/* Top gold divider */}
      <div style={{ position: "relative", zIndex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(212,175,55,0.5), transparent)" }} />

      <div className="container mx-auto px-4 md:px-8" style={{ position: "relative", zIndex: 1, paddingTop: "64px", paddingBottom: "0" }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
            gap: "0",
            marginBottom: "56px",
          }}
          className="footer-grid"
        >

          {/* LEFT — logo + tagline + socials */}
          <div style={{ paddingRight: "48px" }}>
            <img
              src="/images/logo-new.png"
              alt="CYDigital"
              style={{ height: "auto", width: "200px", objectFit: "contain", marginBottom: "20px" }}
            />
            <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.75, maxWidth: "260px", marginBottom: "28px" }}>
              Premium Digital Agency για επιχειρήσεις που θέλουν να ξεχωρίζουν.
            </p>

            {/* Divider */}
            <div style={{ width: "40px", height: "1px", background: "#D4AF37", opacity: 0.5, marginBottom: "20px" }} />

            {/* Social label */}
            <motion.p
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ fontSize: "10px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#D4AF37", fontWeight: 600, marginBottom: "14px" }}
            >
              Ακολουθήστε Μας
            </motion.p>

            <div style={{ display: "flex", gap: "10px" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{
                    width: "44px", height: "44px", borderRadius: "50%",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(212,175,55,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#888", transition: "all 0.3s ease", textDecoration: "none",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(212,175,55,0.15)";
                    el.style.borderColor = "rgba(212,175,55,0.5)";
                    el.style.color = "#D4AF37";
                    el.style.boxShadow = "0 0 14px rgba(212,175,55,0.3)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(255,255,255,0.05)";
                    el.style.borderColor = "rgba(212,175,55,0.2)";
                    el.style.color = "#888";
                    el.style.boxShadow = "none";
                  }}
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Vertical divider 1 */}
          <div style={{ background: "linear-gradient(to bottom, transparent, rgba(212,175,55,0.25), transparent)", margin: "0 40px" }} />

          {/* CENTER — navigation */}
          <div style={{ padding: "0 40px" }}>
            <motion.h3
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ fontSize: "12px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#D4AF37", fontWeight: 700, marginBottom: "10px" }}
            >
              Μενού
            </motion.h3>
            <div style={{ width: "32px", height: "2px", background: "#D4AF37", marginBottom: "24px" }} />
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "2px" }}>
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={e => scrollTo(e, href)}
                    style={{
                      fontSize: "15px", color: "#CCCCCC", textDecoration: "none",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      padding: "10px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = "#D4AF37";
                      const chevron = e.currentTarget.querySelector("svg") as SVGElement | null;
                      if (chevron) chevron.style.color = "#D4AF37";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = "#CCCCCC";
                      const chevron = e.currentTarget.querySelector("svg") as SVGElement | null;
                      if (chevron) chevron.style.color = "rgba(212,175,55,0.4)";
                    }}
                  >
                    {label}
                    <ChevronRight size={14} style={{ color: "rgba(212,175,55,0.4)", flexShrink: 0, transition: "color 0.2s ease" }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Vertical divider 2 */}
          <div style={{ background: "linear-gradient(to bottom, transparent, rgba(212,175,55,0.25), transparent)", margin: "0 40px" }} />

          {/* RIGHT — contact */}
          <div style={{ paddingLeft: "40px" }}>
            <motion.h3
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              style={{ fontSize: "12px", letterSpacing: "2.5px", textTransform: "uppercase", color: "#D4AF37", fontWeight: 700, marginBottom: "10px" }}
            >
              Επικοινωνία
            </motion.h3>
            <div style={{ width: "32px", height: "2px", background: "#D4AF37", marginBottom: "24px" }} />

            <div style={{ display: "flex", flexDirection: "column", gap: "18px", marginBottom: "28px" }}>
              {[
                { icon: MapPin, text: "Λάρνακα, Κύπρος",       href: undefined },
                { icon: Mail,   text: "info@cydigital.agency",  href: "mailto:info@cydigital.agency" },
                { icon: Phone,  text: "+357 94 344355",          href: "tel:+35794344355" },
              ].map(({ icon: Icon, text, href }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "36px", height: "36px", borderRadius: "50%",
                    background: "rgba(212,175,55,0.08)",
                    border: "1px solid rgba(212,175,55,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon style={{ width: "15px", height: "15px", color: "#D4AF37" }} />
                  </div>
                  {href ? (
                    <a href={href} style={{ fontSize: "14px", color: "#CCCCCC", textDecoration: "none", transition: "color 0.2s ease" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#D4AF37")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#CCCCCC")}
                    >{text}</a>
                  ) : (
                    <span style={{ fontSize: "14px", color: "#CCCCCC" }}>{text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Response time box */}
            <div style={{
              border: "1px solid rgba(212,175,55,0.3)",
              borderRadius: "8px",
              padding: "14px 16px",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              background: "rgba(212,175,55,0.05)",
            }}>
              <div style={{
                width: "36px", height: "36px", borderRadius: "50%",
                background: "rgba(212,175,55,0.1)",
                border: "1px solid rgba(212,175,55,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Clock style={{ width: "15px", height: "15px", color: "#D4AF37" }} />
              </div>
              <div>
                <p style={{ fontSize: "11px", fontWeight: 700, color: "#D4AF37", letterSpacing: "1px", textTransform: "uppercase", margin: 0 }}>
                  Απαντάμε Συνήθως
                </p>
                <p style={{ fontSize: "12px", color: "#888", margin: "2px 0 0" }}>Μέσα σε 2–4 ώρες</p>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Bottom divider with diamond */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0" }}>
          <div style={{ position: "absolute", left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(212,175,55,0.35), transparent)" }} />
          <div style={{
            position: "relative", zIndex: 1,
            width: "32px", height: "32px",
            background: "#0B0B0B",
            border: "1px solid rgba(212,175,55,0.4)",
            transform: "rotate(45deg)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{ width: "6px", height: "6px", background: "#D4AF37", borderRadius: "50%", transform: "rotate(-45deg)" }} />
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: "24px", paddingBottom: "28px",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "12px",
        }}>
          <p style={{ fontSize: "13px", color: "#555", margin: 0 }}>
            © {new Date().getFullYear()}{" "}
            <span style={{ color: "#D4AF37" }}>CYDigital</span>
            . Με επιφύλαξη παντός δικαιώματος.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {["Όροι Χρήσης", "Πολιτική Απορρήτου"].map((item, i) => (
              <span key={item} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <a href="#" style={{ fontSize: "13px", color: "#555", textDecoration: "none", transition: "color 0.2s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#D4AF37")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#555")}
                >{item}</a>
                {i === 0 && <span style={{ color: "rgba(212,175,55,0.3)", fontSize: "12px" }}>|</span>}
              </span>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
