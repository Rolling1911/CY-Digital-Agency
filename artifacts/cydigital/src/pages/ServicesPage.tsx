import { Header } from "@/components/Header";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const serviceLinks = [
  { name: "Κατασκευή Ιστοσελίδας", href: "/ypiresies/kataskevi-istoselidaas", desc: "Custom websites που μετατρέπουν επισκέπτες σε πελάτες." },
  { name: "Social Media Management", href: "/ypiresies/social-media", desc: "Στρατηγική & περιεχόμενο που αυξάνει το engagement." },
  { name: "Γραφιστικά & Branding", href: "/ypiresies/grafistika", desc: "Οπτική ταυτότητα που αναδεικνύει το brand σας." },
  { name: "Δημιουργία Περιεχομένου", href: "/ypiresies/dimioyrgia-periekhomenou", desc: "Επαγγελματικές φωτογραφίες & βίντεο για το brand σας." },
];

export default function ServicesPage() {
  useSEO({
    title: "Υπηρεσίες | CYDigital - Digital Agency Κύπρος",
    description: "Ολοκληρωμένες ψηφιακές υπηρεσίες στην Κύπρο: κατασκευή ιστοσελίδας, social media management, γραφιστικά, branding και δημιουργία περιεχομένου.",
    path: "/ypiresies",
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="pt-[88px] pb-10 bg-black text-center">
          <div className="container mx-auto px-4 md:px-6 pt-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Οι Υπηρεσίες μας
            </h1>
            <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-4" />
            <p className="text-white/60 max-w-xl mx-auto font-display italic text-lg">
              Ολοκληρωμένες ψηφιακές λύσεις για επιχειρήσεις στην Κύπρο
            </p>
          </div>
        </section>

        {/* Services grid */}
        <Services showHeading={false} />

        {/* Service sub-pages internal links */}
        <section className="py-14 bg-black border-t border-white/5">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white text-center mb-3">
              Εξερευνήστε κάθε Υπηρεσία
            </h2>
            <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
              {serviceLinks.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  style={{
                    display: "block",
                    padding: "24px 20px",
                    background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                    border: "1px solid rgba(212,175,55,0.15)",
                    borderRadius: "12px",
                    textDecoration: "none",
                    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.5)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(212,175,55,0.1)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(212,175,55,0.15)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <h3 style={{ color: "#D4AF37", fontSize: "14px", fontWeight: 700, marginBottom: "8px", fontFamily: "'Cormorant Garamond', serif" }}>
                    {s.name}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", lineHeight: 1.6, margin: 0 }}>
                    {s.desc}
                  </p>
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
