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
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-primary cursor-pointer" onClick={() => handleNavClick("#home")}>
            CYDigital
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                data-testid={`link-${link.href.replace('#', '')}`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border/50 shadow-lg">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-lg font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-border/10"
                data-testid={`link-mobile-${link.href.replace('#', '')}`}
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => handleNavClick("#contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold mt-4 w-full"
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
