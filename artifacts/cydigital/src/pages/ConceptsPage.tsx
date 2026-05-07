import { motion } from "framer-motion";
import { Link } from "wouter";
import { Scissors, Utensils, Dumbbell, Sparkles, Coffee, Car, Building2, ArrowRight, ExternalLink } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const FONT = "'Noto Serif', Georgia, serif";

const categories = [
  {
    id: "barbers",
    Icon: Scissors,
    title: "Barber Shops",
    desc: "Premium barbershop concepts με κλασική και σύγχρονη αισθητική για επαγγελματίες κουρείς.",
    href: "/concepts/barbers",
    count: 3,
    gradient: "linear-gradient(135deg, #1a1208 0%, #0d0d0d 60%, #0B0B0B 100%)",
    accent: "#C4A257",
    ready: true,
  },
  {
    id: "restaurants",
    Icon: Utensils,
    title: "Restaurants & Takeaways",
    desc: "Elegant dining experiences που οδηγούν σε περισσότερες κρατήσεις και παραγγελίες online.",
    href: "/concepts/restaurants",
    count: 3,
    gradient: "linear-gradient(135deg, #120d08 0%, #0d0d0d 60%, #0B0B0B 100%)",
    accent: "#C4763A",
    ready: false,
  },
  {
    id: "gyms",
    Icon: Dumbbell,
    title: "Gyms & Fitness",
    desc: "High-energy fitness brand sites που μετατρέπουν επισκέπτες σε μέλη γυμναστηρίου.",
    href: "/concepts/gyms",
    count: 3,
    gradient: "linear-gradient(135deg, #0d1212 0%, #0d0d0d 60%, #0B0B0B 100%)",
    accent: "#4CAF7D",
    ready: false,
  },
  {
    id: "beauty",
    Icon: Sparkles,
    title: "Beauty Salons",
    desc: "Luxurious salon concepts που αναδεικνύουν το στυλ και την εξειδίκευσή σας.",
    href: "/concepts/beauty",
    count: 3,
    gradient: "linear-gradient(135deg, #120810 0%, #0d0d0d 60%, #0B0B0B 100%)",
    accent: "#D4A0B0",
    ready: false,
  },
  {
    id: "cafes",
    Icon: Coffee,
    title: "Cafes & Coffee Shops",
    desc: "Ζεστά, φιλόξενα coffee shop concepts με δυνατή brand identity και online παρουσία.",
    href: "/concepts/cafes",
    count: 3,
    gradient: "linear-gradient(135deg, #120f08 0%, #0d0d0d 60%, #0B0B0B 100%)",
    accent: "#C49A6C",
    ready: false,
  },
  {
    id: "car-rentals",
    Icon: Car,
    title: "Car Rentals",
    desc: "Sleek vehicle rental platforms με διαισθητικές ροές κράτησης και premium παρουσίαση.",
    href: "/concepts/car-rentals",
    count: 3,
    gradient: "linear-gradient(135deg, #080d12 0%, #0d0d0d 60%, #0B0B0B 100%)",
    accent: "#5B8DB8",
    ready: false,
  },
  {
    id: "real-estate",
    Icon: Building2,
    title: "Real Estate",
    desc: "Premium property showcases κατασκευασμένα για να παράγουν σοβαρά leads.",
    href: "/concepts/real-estate",
    count: 3,
    gradient: "linear-gradient(135deg, #10100d 0%, #0d0d0d 60%, #0B0B0B 100%)",
    accent: "#A8956A",
    ready: false,
  },
];

export default function ConceptsPage() {
  useSEO({
    title: "Website Concepts | CYDigital — Demo Ιστοσελίδες για Κύπρο",
    description: "Δείτε demo website concepts για διαφορετικούς κλάδους στην Κύπρο — Κουρεία, Εστιατόρια, Γυμναστήρια, Beauty Salons και άλλα.",
    path: "/concepts",
  });

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col">
      <Header />
      <main className="flex-1">

        {/* Page Hero */}
        <section className="pt-[88px] bg-[#0B0B0B] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div style={{ position: "absolute", top: "60px", left: "50%", transform: "translateX(-50%)", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)", borderRadius: "50%" }} />
          </div>
          <div className="container mx-auto px-4 md:px-6 pt-14 pb-16 text-center relative">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ fontFamily: FONT, fontSize: "11px", letterSpacing: "3px", color: "#D4AF37", textTransform: "uppercase", marginBottom: "20px" }}
            >
              CYDigital Agency
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: FONT, fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700, color: "#ffffff", lineHeight: 1.15, marginBottom: "20px" }}
            >
              Website Concepts
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ width: "80px", height: "1px", background: "linear-gradient(to right, transparent, #D4AF37, transparent)", margin: "0 auto 20px" }}
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ fontFamily: FONT, fontSize: "1.05rem", color: "rgba(255,255,255,0.55)", maxWidth: "520px", margin: "0 auto", lineHeight: 1.8, fontStyle: "italic" }}
            >
              Creative website concepts designed for modern businesses in Cyprus.
            </motion.p>
          </div>
        </section>

        {/* Category Grid */}
        <section className="pb-20 bg-[#0B0B0B]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 max-w-7xl mx-auto">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  {cat.ready ? (
                    <Link href={cat.href}>
                      <CategoryCard cat={cat} />
                    </Link>
                  ) : (
                    <div style={{ cursor: "default" }}>
                      <CategoryCard cat={cat} comingSoon />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Bottom note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mt-16"
            >
              <div style={{ display: "inline-block", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "50px", padding: "14px 28px", background: "rgba(212,175,55,0.04)" }}>
                <p style={{ fontFamily: FONT, fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>
                  Θέλετε ένα custom concept για τον κλάδο σας;{" "}
                  <Link href="/epikoinonia" style={{ color: "#D4AF37", textDecoration: "none" }}>
                    Επικοινωνήστε μαζί μας
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Banner */}
        <section style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "64px 0" }} className="text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p style={{ fontFamily: FONT, fontSize: "11px", letterSpacing: "3px", color: "#D4AF37", textTransform: "uppercase", marginBottom: "16px" }}>Έτοιμοι να ξεκινήσουμε;</p>
            <h2 style={{ fontFamily: FONT, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, color: "#fff", marginBottom: "12px" }}>
              Μεταμορφώστε την online παρουσία σας
            </h2>
            <div style={{ width: "60px", height: "1px", background: "linear-gradient(to right, transparent, #D4AF37, transparent)", margin: "0 auto 20px" }} />
            <p style={{ fontFamily: FONT, fontStyle: "italic", color: "rgba(255,255,255,0.5)", marginBottom: "32px", fontSize: "15px" }}>
              Τα concepts αυτά είναι μόνο η αρχή. Κάθε website χτίζεται custom για εσάς.
            </p>
            <Link
              href="/epikoinonia"
              style={{ display: "inline-block", background: "#D4AF37", color: "#000", fontFamily: FONT, fontWeight: 700, fontSize: "11px", letterSpacing: "2.5px", textTransform: "uppercase", padding: "16px 40px", textDecoration: "none", transition: "all 0.3s ease" }}
              className="hover:shadow-[0_0_24px_rgba(212,175,55,0.35)] hover:bg-[#C9A832]"
            >
              Ζητήστε Προσφορά
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function CategoryCard({ cat, comingSoon }: { cat: typeof categories[0]; comingSoon?: boolean }) {
  return (
    <motion.div
      whileHover={!comingSoon ? { y: -6, borderColor: "rgba(212,175,55,0.45)" } : {}}
      style={{
        background: cat.gradient,
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "16px",
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        height: "100%",
        minHeight: "260px",
        transition: "all 0.35s ease",
        boxShadow: "0 2px 20px rgba(0,0,0,0.4)",
        position: "relative",
        overflow: "hidden",
        cursor: comingSoon ? "default" : "pointer",
      }}
    >
      {comingSoon && (
        <div style={{ position: "absolute", top: "14px", right: "14px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "20px", padding: "3px 10px" }}>
          <span style={{ fontFamily: FONT, fontSize: "9px", letterSpacing: "1.5px", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>Σύντομα</span>
        </div>
      )}

      {/* Subtle corner glow */}
      <div style={{ position: "absolute", top: 0, right: 0, width: "120px", height: "120px", background: `radial-gradient(circle at top right, ${cat.accent}18, transparent 70%)`, borderRadius: "16px", pointerEvents: "none" }} />

      {/* Icon */}
      <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${cat.accent}18`, border: `1px solid ${cat.accent}30`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
        <cat.Icon size={22} color={cat.accent} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <h3 style={{ fontFamily: FONT, fontSize: "1.05rem", fontWeight: 700, color: "#ffffff", marginBottom: "10px", lineHeight: 1.3 }}>
        {cat.title}
      </h3>
      <p style={{ fontFamily: FONT, fontSize: "13px", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, flex: 1, marginBottom: "24px" }}>
        {cat.desc}
      </p>

      {/* Footer */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: FONT, fontSize: "11px", color: cat.accent, letterSpacing: "0.5px" }}>
          {cat.count} Concepts
        </span>
        {!comingSoon && (
          <div style={{ display: "flex", alignItems: "center", gap: "6px", color: cat.accent }}>
            <span style={{ fontFamily: FONT, fontSize: "11px", letterSpacing: "1px", textTransform: "uppercase" }}>Δείτε</span>
            <ArrowRight size={13} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
