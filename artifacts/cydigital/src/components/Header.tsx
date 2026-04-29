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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => handleNavClick("#home")} data-testid="link-logo">
            <img src="/images/logo.png" alt="CYDigital" className="h-24 w-auto max-w-[320px] object-contain" />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm tracking-widest uppercase font-medium text-white/70 hover:text-[#D4AF37] transition-colors"
                data-testid={`link-${link.href.replace('#', '')}`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-[#D4AF37] text-black font-semibold tracking-widest uppercase text-xs px-6 py-2.5 rounded-md hover:bg-[#D4AF37]/90 transition-colors"
              data-testid="button-header-cta"
            >
              Ζητήστε Προσφορά
            </Button>
          </div>

          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border/50 shadow-lg">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-lg font-medium text-foreground hover:text-[#D4AF37] transition-colors py-2 border-b border-border/10"
                data-testid={`link-mobile-${link.href.replace('#', '')}`}
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-[#D4AF37] text-black font-semibold uppercase tracking-widest text-xs px-6 py-3 mt-4 w-full rounded-md"
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