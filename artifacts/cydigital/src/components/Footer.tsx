import { FiInstagram, FiFacebook, FiLinkedin } from "react-icons/fi";

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background pt-16 pb-8 relative">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <img
              src="/images/logo.png"
              alt="CYDigital"
              style={{ height: "130px", width: "auto" }}
              className="mb-4"
            />
            <p className="text-muted-foreground text-lg max-w-md mb-6 leading-relaxed">
              Premium Digital Agency — Κύπρος
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-[#D4AF37] hover:text-black transition-all">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-[#D4AF37] hover:text-black transition-all">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-card flex items-center justify-center text-foreground hover:bg-[#D4AF37] hover:text-black transition-all">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Μενού</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="hover:text-[#D4AF37] transition-colors">Αρχική</a></li>
              <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="hover:text-[#D4AF37] transition-colors">Υπηρεσίες</a></li>
              <li><a href="#packages" onClick={(e) => handleNavClick(e, "#packages")} className="hover:text-[#D4AF37] transition-colors">Πακέτα</a></li>
              <li><a href="#portfolio" onClick={(e) => handleNavClick(e, "#portfolio")} className="hover:text-[#D4AF37] transition-colors">Portfolio</a></li>
              <li><a href="#why-us" onClick={(e) => handleNavClick(e, "#why-us")} className="hover:text-[#D4AF37] transition-colors">Γιατί Εμάς</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Επικοινωνία</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li>Λευκωσία, Κύπρος</li>
              <li><a href="mailto:info@cydigital.com.cy" className="hover:text-[#D4AF37] transition-colors">info@cydigital.com.cy</a></li>
              <li><a href="tel:+35799123456" className="hover:text-[#D4AF37] transition-colors">+357 99 123456</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} CYDigital. Με επιφύλαξη παντός δικαιώματος.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Όροι Χρήσης</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Πολιτική Απορρήτου</a>
          </div>
        </div>
      </div>
    </footer>
  );
}