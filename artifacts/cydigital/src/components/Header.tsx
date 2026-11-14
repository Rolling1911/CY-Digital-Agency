import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t.nav_home, href: "/" },
    { name: t.nav_services, href: "/ypiresies" },
    { name: t.nav_packages, href: "/paketa" },
    { name: t.nav_portfolio, href: "/portfolio" },
    { name: language === "el" ? "AI Υπηρεσίες" : "AI Services", href: "/#ai-services" },
    { name: t.nav_why_us, href: "/giati-emas" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (href.includes("#")) {
      const id = href.split("#")[1];
      const el = document.getElementById(id);

      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        e.preventDefault();
        sessionStorage.setItem("scrollTo", id);
        window.location.href = "/";
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }

    setMobileMenuOpen(false);
  }

  function toggleLanguage() {
    setLanguage(language === "el" ? "en" : "el");
    setMobileMenuOpen(false);
  }

  const languageSwitch = (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === "el" ? "Switch to English" : "Switch to Greek"}
      className="inline-flex items-center gap-1 rounded-full border border-[#171717]/15 px-3 py-2 text-[11px] font-bold tracking-wider text-[#171717] transition-colors hover:border-[#3155F5] hover:text-[#3155F5]"
      data-testid="button-language-switch"
    >
      <span className={language === "el" ? "text-[#3155F5]" : "text-[#171717]/45"}>EL</span>
      <span className="text-[#171717]/25">/</span>
      <span className={language === "en" ? "text-[#3155F5]" : "text-[#171717]/45"}>EN</span>
    </button>
  );

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 flex h-[76px] items-center border-b transition-all duration-300 ${
        isScrolled
          ? "border-[#171717]/10 bg-[#F7F5EF]/95 shadow-[0_4px_24px_rgba(23,23,23,0.06)] backdrop-blur-xl"
          : "border-[#171717]/5 bg-[#F7F5EF]/90 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between px-5 md:px-8 xl:px-10">
        <Link
          href="/"
          className="group flex shrink-0 items-center"
          data-testid="link-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
        >
          <img
            src="/images/logo-agency.png"
            alt="CYDigital"
            className="header-logo h-auto w-[155px] object-contain transition-transform duration-300 group-hover:scale-[1.03] md:w-[175px]"
            style={{ filter: "brightness(0) saturate(100%)" }}
          />
        </Link>

        <nav className="hidden items-center gap-4 lg:flex xl:gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.09em] text-[#171717]/65 transition-colors duration-200 hover:text-[#3155F5] xl:text-[11px]"
              data-testid={`link-${link.href.replace("/", "").replace(/\//g, "-") || "home"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          {languageSwitch}
          <Button
            asChild
            className="rounded-full bg-[#3155F5] px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white shadow-none transition-all hover:bg-[#2444D8] hover:shadow-[0_5px_18px_rgba(49,85,245,0.2)]"
            data-testid="button-header-cta"
          >
            <Link href="/epikoinonia">{t.nav_cta}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          {languageSwitch}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className="rounded-full p-2 text-[#171717] transition-colors hover:bg-[#171717]/5 hover:text-[#3155F5]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-[#171717]/10 bg-[#F7F5EF] shadow-xl lg:hidden">
          <nav className="mx-auto flex max-w-[1440px] flex-col px-6 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="border-b border-[#171717]/10 py-3.5 text-xs font-bold uppercase tracking-[0.1em] text-[#171717]/75 transition-colors hover:text-[#3155F5]"
                data-testid={`link-mobile-${link.href.replace("/", "").replace(/\//g, "-") || "home"}`}
              >
                {link.name}
              </Link>
            ))}

            <Button
              asChild
              className="mt-5 w-full rounded-full bg-[#3155F5] py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#2444D8]"
              data-testid="button-mobile-header-cta"
            >
              <Link
                href="/epikoinonia"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.nav_cta}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
