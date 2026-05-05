import { motion } from "framer-motion";
import { Share2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const features = [
  "Μηνιαία content strategy & πλάνο δημοσιεύσεων",
  "Δημιουργία custom γραφιστικών & reels",
  "Διαχείριση Facebook & Instagram",
  "Community management & replies",
  "Αύξηση followers & organic reach",
  "Μηνιαία αναφορά αποτελεσμάτων",
];

const otherServices = [
  { name: "Κατασκευή Ιστοσελίδας", href: "/ypiresies/kataskevi-istoselidaas" },
  { name: "Γραφιστικά & Branding", href: "/ypiresies/grafistika" },
  { name: "Δημιουργία Περιεχομένου", href: "/ypiresies/dimioyrgia-periekhomenou" },
];

function CheckIcon() {
  return (
    <div style={{ width: "20px", height: "20px", borderRadius: "50%", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M1.5 5l2.5 2.5 4.5-5" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function SocialMediaPage() {
  useSEO({
    title: "Social Media Management Κύπρος | CYDigital",
    description: "Επαγγελματικό Social Media Management στην Κύπρο. Αυξήστε το engagement, χτίστε κοινότητα και αποκτήστε νέους πελάτες μέσω Facebook & Instagram.",
    path: "/ypiresies/social-media",
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="pt-[88px] pb-10 bg-black text-center">
          <div className="container mx-auto px-4 md:px-6 pt-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/08 mb-6">
              <Share2 style={{ color: "#D4AF37", width: "26px", height: "26px" }} strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Social Media Management στην Κύπρο
            </h1>
            <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-4" />
            <p className="text-white/60 max-w-xl mx-auto font-display italic text-lg">
              Περιεχόμενο που αυξάνει το engagement και χτίζει κοινότητα
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-[#080808]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                  Social Media που φέρνουν πελάτες
                </h2>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontSize: "15px", marginBottom: "20px" }}>
                  Δημιουργούμε στρατηγικό περιεχόμενο που αυξάνει το engagement και χτίζει κοινότητα γύρω από το brand σας. Από τη στρατηγική έως τη δημοσίευση, αναλαμβάνουμε τα πάντα.
                </p>
                <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontSize: "15px", marginBottom: "32px" }}>
                  Κάθε post, reel και story σχεδιάζεται με στόχο την αύξηση της αναγνωρισιμότητας και την προσέλκυση νέων πελατών για την επιχείρησή σας.
                </p>
                <a
                  href="/epikoinonia"
                  className="inline-block bg-[#D4AF37] text-black font-semibold uppercase tracking-widest text-xs px-8 py-4 hover:bg-[#D4AF37]/90 transition-all duration-300"
                >
                  Ζητήστε Προσφορά
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                style={{
                  padding: "32px",
                  background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
                  border: "1px solid rgba(212,175,55,0.15)",
                  borderRadius: "16px",
                }}
              >
                <h3 className="text-lg font-display font-bold text-white mb-6">Τι περιλαμβάνει</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {features.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <CheckIcon />
                      <span style={{ color: "rgba(255,255,255,0.72)", fontSize: "14px", lineHeight: 1.6 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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
      </main>
      <Footer />
    </div>
  );
}
