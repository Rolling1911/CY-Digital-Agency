import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage, Language, languageNames } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { name: t.nav_home, href: "#home" },
    { name: t.nav_services, href: "#services" },
    { name: t.nav_packages, href: "#packages" },
    { name: t.nav_portfolio, href: "#portfolio" },
    { name: t.nav_why_us, href: "#why-us" },
    { name: t.nav_contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const langs = (["el", "en", "sv", "fi"] as Language[]);

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
        <div
          className="flex items-center cursor-pointer group"
          onClick={() => handleNavClick("#home")}
          data-testid="link-logo"
          style={{ flex: "0 0 auto" }}
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
        </div>

        {/* CENTER — Nav menu (desktop) */}
        <nav className="hidden md:flex items-center" style={{ gap: "34px" }}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className="uppercase text-white/70 hover:text-[#D4AF37] transition-colors duration-300 whitespace-nowrap"
              style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif", fontSize: "11px", letterSpacing: "3px", fontWeight: 400 }}
              data-testid={`link-${link.href.replace("#", "")}`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* RIGHT — Theme toggle + Language switcher + CTA + hamburger */}
        <div className="flex items-center" style={{ gap: "12px" }}>

          {/* Theme toggle — desktop + mobile */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            data-testid="button-theme-toggle"
            title={theme === "dark" ? "Light mode" : "Dark mode"}
          >
            {theme === "dark"
              ? <Sun size={16} strokeWidth={1.6} />
              : <Moon size={16} strokeWidth={1.6} />
            }
          </button>

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              onBlur={() => setTimeout(() => setLangOpen(false), 150)}
              className="flex items-center gap-1 text-white/60 hover:text-[#D4AF37] transition-colors duration-200"
              style={{ fontSize: "11px", letterSpacing: "2px", fontWeight: 700, fontFamily: "'Cinzel', serif" }}
            >
              {languageNames[lang]}
              <svg width="8" height="5" viewBox="0 0 8 5" fill="currentColor" style={{ opacity: 0.6, marginTop: "1px" }}>
                <path d="M0 0l4 5 4-5H0z" />
              </svg>
            </button>
            {langOpen && (
              <div
                className="absolute right-0 top-full mt-2 py-1 rounded-lg overflow-hidden"
                style={{ background: "#0f0f0f", border: "1px solid rgba(212,175,55,0.2)", minWidth: "64px", zIndex: 100 }}
              >
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false); }}
                    className="w-full text-left px-4 py-2 transition-colors duration-150 hover:bg-[rgba(212,175,55,0.08)]"
                    style={{
                      fontSize: "11px", letterSpacing: "2px", fontWeight: 700,
                      fontFamily: "'Cinzel', serif",
                      color: l === lang ? "#D4AF37" : "rgba(255,255,255,0.6)",
                    }}
                  >
                    {languageNames[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="hidden md:block">
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-[#D4AF37] text-black font-semibold tracking-[0.1em] uppercase text-xs px-6 py-2.5 rounded-sm hover:bg-[#D4AF37]/90 transition-all duration-300 hover:shadow-[0_0_18px_rgba(212,175,55,0.3)]"
              data-testid="button-header-cta"
            >
              {t.nav_cta}
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
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-white/70 hover:text-[#D4AF37] transition-colors py-3 border-b border-white/5 uppercase"
                style={{ fontFamily: "'Cinzel', 'Cormorant Garamond', Georgia, serif", fontSize: "12px", letterSpacing: "3px", fontWeight: 400 }}
                data-testid={`link-mobile-${link.href.replace("#", "")}`}
              >
                {link.name}
              </button>
            ))}

            {/* Mobile: Language + Theme row */}
            <div className="flex items-center justify-between pt-4 pb-1">
              <div className="flex gap-3">
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setMobileMenuOpen(false); }}
                    style={{
                      fontSize: "11px", letterSpacing: "2px", fontWeight: 700,
                      fontFamily: "'Cinzel', serif",
                      color: l === lang ? "#D4AF37" : "rgba(255,255,255,0.45)",
                      padding: "4px 0",
                      borderBottom: l === lang ? "1px solid #D4AF37" : "1px solid transparent",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {languageNames[l]}
                  </button>
                ))}
              </div>

              {/* Mobile theme toggle */}
              <button
                onClick={toggleTheme}
                className="theme-toggle-btn"
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                data-testid="button-theme-toggle-mobile"
                style={{ marginLeft: "auto" }}
              >
                {theme === "dark"
                  ? <Sun size={15} strokeWidth={1.6} />
                  : <Moon size={15} strokeWidth={1.6} />
                }
              </button>
            </div>

            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-[#D4AF37] text-black font-semibold uppercase tracking-widest text-xs px-6 py-3 mt-4 w-full rounded-sm"
              data-testid="button-mobile-header-cta"
            >
              {t.nav_cta}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
