import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Αρχική", href: "#home" },
  { name: "Υπηρεσίες", href: "#services" },
  { name: "Πακέτα", href: "#packages" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Γιατί Εμάς", href: "#why-us" },
  { name: "Επικοινωνία", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10">
        <div
          className="flex items-center justify-between"
          style={{ height: "80px" }}
        >
          {/* Logo */}
          <div
            className="cursor-pointer flex-shrink-0 group"
            onClick={() => handleNavClick("#home")}
            data-testid="link-logo"
            style={{ lineHeight: 0 }}
          >
            <img
              src="/images/logo.png"
              alt="CYDigital"
              style={{
                height: "48px",
                width: "auto",
                display: "block",
                transition: "transform 0.3s ease, filter 0.3s ease",
              }}
              className="group-hover:scale-[1.03] group-hover:[filter:drop-shadow(0_0_10px_rgba(212,175,55,0.6))]"
            />
          </div>

          {/* Desktop Nav — centered */}
          <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-xs tracking-[0.15em] uppercase font-medium text-white/65 hover:text-[#D4AF37] transition-colors duration-300 whitespace-nowrap"
                data-testid={`link-${link.href.replace("#", "")}`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA — right */}
          <div className="hidden md:block flex-shrink-0">
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-[#D4AF37] text-black font-semibold tracking-[0.12em] uppercase text-xs px-6 py-2.5 rounded-sm hover:bg-[#D4AF37]/90 transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.35)]"
              data-testid="button-header-cta"
            >
              Ζητήστε Προσφορά
            </Button>
          </div>

          {/* Mobile hamburger */}
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
                className="text-left text-base font-medium text-white/70 hover:text-[#D4AF37] transition-colors py-3 border-b border-white/5 tracking-wide"
                data-testid={`link-mobile-${link.href.replace("#", "")}`}
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-[#D4AF37] text-black font-semibold uppercase tracking-widest text-xs px-6 py-3 mt-6 w-full rounded-sm"
              data-testid="button-mobile-header-cta"
            >
              Ζητήστε Προσφορά
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
