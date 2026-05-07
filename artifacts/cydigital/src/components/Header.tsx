import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const NAV_FONT = "'Noto Serif', Georgia, serif";

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t.nav_home,      href: "/" },
    { name: t.nav_services,  href: "/ypiresies" },
    { name: t.nav_packages,  href: "/paketa" },
    { name: t.nav_portfolio, href: "/portfolio" },
    { name: "Live Previews", href: "/concepts" },
    { name: "AI Υπηρεσίες", href: "/#ai-services" },
    { name: t.nav_why_us,   href: "/giati-emas" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.includes("#")) return;
    const id = href.split("#")[1];
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Not on home page — navigate then scroll after load
      window.location.href = href;
      e.preventDefault();
    }
  }

  return (
    <header
      style={{ height: "88px" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center transition-all duration-500 ${
        isScrolled ? "bg-black/85 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div
        style={{ maxWidth: "1440px", margin: "0 auto", width: "100%", padding: "0 40px" }}
        className="flex items-center justify-between header-inner"
      >
        {/* LEFT — Logo */}
        <Link
          href="/"
          className="flex items-center cursor-pointer group"
          data-testid="link-logo"
          style={{ flex: "0 0 auto" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
        >
          <img
            src="/images/logo-agency.png"
            alt="CYDigital"
            style={{
              height: "auto", width: "280px", objectFit: "contain", display: "block",
              transition: "transform 0.3s ease, filter 0.3s ease",
            }}
            className="header-logo group-hover:scale-[1.03] group-hover:[filter:drop-shadow(0_0_10px_rgba(212,175,55,0.55))]"
          />
        </Link>

        {/* CENTER — Nav (desktop) */}
        <nav className="hidden md:flex items-center" style={{ gap: "28px" }}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="uppercase text-white/70 hover:text-[#D4AF37] transition-colors duration-300 whitespace-nowrap"
              style={{
                fontFamily: NAV_FONT,
                fontSize: "11px",
                letterSpacing: "2px",
                fontWeight: 600,
              }}
              data-testid={`link-${link.href.replace("/", "").replace(/\//g, "-") || "home"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* RIGHT — CTA + hamburger */}
        <div className="flex items-center" style={{ gap: "16px" }}>
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-[#D4AF37] text-black font-semibold tracking-[0.1em] uppercase text-xs px-6 py-2.5 rounded-sm hover:bg-[#D4AF37]/90 transition-all duration-300 hover:shadow-[0_0_18px_rgba(212,175,55,0.3)]"
              style={{ fontFamily: NAV_FONT, letterSpacing: "2.5px", fontSize: "11px" }}
              data-testid="button-header-cta"
            >
              <Link href="/epikoinonia">{t.nav_cta}</Link>
            </Button>
          </div>

          <button
            className="md:hidden text-white/80 hover:text-[#D4AF37] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0B0B0B]/97 backdrop-blur-xl border-b border-white/5">
          <div className="flex flex-col px-6 py-8 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => { handleNavClick(e, link.href); setMobileMenuOpen(false); }}
                className="text-left text-white/70 hover:text-[#D4AF37] transition-colors py-3 border-b border-white/5 uppercase block"
                style={{
                  fontFamily: NAV_FONT,
                  fontSize: "12px",
                  letterSpacing: "3px",
                  fontWeight: 600,
                }}
                data-testid={`link-mobile-${link.href.replace("/", "").replace(/\//g, "-") || "home"}`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              asChild
              className="bg-[#D4AF37] text-black font-semibold uppercase tracking-widest text-xs px-6 py-3 mt-5 w-full rounded-sm"
              style={{ fontFamily: NAV_FONT, letterSpacing: "2.5px", fontSize: "11px" }}
              data-testid="button-mobile-header-cta"
            >
              <Link href="/epikoinonia" onClick={() => setMobileMenuOpen(false)}>
                {t.nav_cta}
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
