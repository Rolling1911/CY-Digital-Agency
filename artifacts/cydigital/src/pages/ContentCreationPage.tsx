import { Header } from "@/components/Header";
import { ContentCreation } from "@/components/ContentCreation";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const otherServices = [
  { name: "Κατασκευή Ιστοσελίδας", href: "/ypiresies/kataskevi-istoselidaas" },
  { name: "Social Media Management", href: "/ypiresies/social-media" },
  { name: "Γραφιστικά & Branding", href: "/ypiresies/grafistika" },
];

export default function ContentCreationPage() {
  useSEO({
    title: "Δημιουργία Περιεχομένου Κύπρος | CYDigital",
    description: "Επαγγελματική φωτογράφιση και βίντεο για επιχειρήσεις στην Κύπρο. Περιεχόμενο που αναδεικνύει το brand σας και αυξάνει τις πωλήσεις.",
    path: "/ypiresies/dimioyrgia-periekhomenou",
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="pt-[88px] pb-10 bg-black text-center">
          <div className="container mx-auto px-4 md:px-6 pt-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Δημιουργία Περιεχομένου στην Κύπρο
            </h1>
            <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-4" />
            <p className="text-white/60 max-w-xl mx-auto font-display italic text-lg">
              Επαγγελματικές φωτογραφίες & βίντεο που αναδεικνύουν το brand σας
            </p>
          </div>
        </section>

        <ContentCreation />

        {/* Other Services */}
        <section className="py-12 bg-black border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-xl font-display font-bold text-white mb-6">Άλλες Υπηρεσίες</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {otherServices.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  style={{
                    border: "1px solid rgba(212,175,55,0.3)",
                    color: "rgba(212,175,55,0.8)",
                    padding: "10px 24px",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    transition: "border-color 0.2s, color 0.2s",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#D4AF37"; (e.currentTarget as HTMLElement).style.color = "#D4AF37"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.3)"; (e.currentTarget as HTMLElement).style.color = "rgba(212,175,55,0.8)"; }}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
