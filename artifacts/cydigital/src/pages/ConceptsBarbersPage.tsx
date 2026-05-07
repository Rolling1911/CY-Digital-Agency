import { motion } from "framer-motion";
import { Link } from "wouter";
import { Scissors, ArrowLeft, ChevronRight, Play, Zap, Smartphone, Star } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const FONT = "'Noto Serif', Georgia, serif";

const concepts = [
  {
    number: "01",
    id: "royal-blade",
    name: "Royal Blade Barber Lounge",
    tagline: "Luxury Grooming for Modern Gentlemen",
    desc: "Premium barbershop με dark luxury αισθητική, χρυσές λεπτομέρειες και online κρατήσεις. Σχεδιασμένο για κουρεία που θέλουν να προβάλουν αποκλειστικότητα και να προσελκύουν premium πελάτες.",
    image: "/images/concept-royal-blade.jpg",
    href: "/concepts/royal-blade",
    accentColor: "#C8A84B",
    features: ["Online Κρατήσεις", "Gallery", "Pricing", "Mobile Optimized"],
    style: "Luxury Dark",
  },
  {
    number: "02",
    id: "cut-studio",
    name: "The Cut Studio",
    tagline: "Fresh Cuts. Clean Style.",
    desc: "Μοντέρνο, καθαρό barbershop concept με navy & gold αισθητική. Ιδανικό για σύγχρονα κουρεία που θέλουν έναν επαγγελματικό ιστότοπο με απλό booking και δυνατή παρουσία.",
    image: "/images/concept-cut-studio.jpg",
    href: "/concepts/the-cut-studio",
    accentColor: "#8FAFC0",
    features: ["Appointment Booking", "Services Menu", "Gallery", "Contact Form"],
    style: "Modern Navy",
  },
  {
    number: "03",
    id: "heritage-barber",
    name: "Heritage Barber House",
    tagline: "Traditional Barbering. Modern Standards.",
    desc: "Vintage-inspired barbershop με warm earth tones και κλασική τυπογραφία. Ιδανικό για κουρεία με ιστορία που θέλουν να αναδείξουν την παράδοση και το craft τους.",
    image: "/images/concept-heritage-barber.jpg",
    href: "/concepts/heritage-barber",
    accentColor: "#C4714A",
    features: ["Story-Driven Design", "Team Profiles", "Reviews", "Booking"],
    style: "Vintage Warm",
  },
];

export default function ConceptsBarbersPage() {
  useSEO({
    title: "Barber Shop Concepts | CYDigital — Demo Ιστοσελίδες Κουρεία Κύπρος",
    description: "Premium demo website concepts για κουρεία και barbershops στην Κύπρο. Δείτε live previews από την CYDigital.",
    path: "/concepts/barbers",
  });

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white flex flex-col">
      <Header />
      <main className="flex-1">

        {/* Hero */}
        <section className="pt-[88px] bg-[#0B0B0B] relative overflow-hidden">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 60%)", pointerEvents: "none" }} />
          <div className="container mx-auto px-4 md:px-6 pt-10 pb-14 relative">

            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "36px" }}
            >
              <Link href="/concepts" style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.4)", textDecoration: "none", fontFamily: FONT, fontSize: "12px", transition: "color 0.2s" }} className="hover:text-[#D4AF37]">
                <ArrowLeft size={13} /> Website Concepts
              </Link>
              <ChevronRight size={12} color="rgba(255,255,255,0.2)" />
              <span style={{ fontFamily: FONT, fontSize: "12px", color: "rgba(255,255,255,0.55)" }}>Barber Shops</span>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.1 }}
                  style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Scissors size={17} color="#D4AF37" strokeWidth={1.5} />
                  </div>
                  <span style={{ fontFamily: FONT, fontSize: "10px", letterSpacing: "3.5px", color: "#D4AF37", textTransform: "uppercase" }}>Barber Shop Concepts</span>
                </motion.div>

                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
                  style={{ fontFamily: FONT, fontSize: "clamp(2rem, 4.5vw, 3.2rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: "14px" }}>
                  Barbershop Website Concepts
                </motion.h1>
                <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5, delay: 0.3 }} style={{ width: "60px", height: "1px", background: "linear-gradient(to right, #D4AF37, transparent)", marginBottom: "14px", transformOrigin: "left" }} />
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.35 }}
                  style={{ fontFamily: FONT, fontStyle: "italic", color: "rgba(255,255,255,0.5)", fontSize: "15px", maxWidth: "500px", lineHeight: 1.75 }}>
                  Τρία διαφορετικά design directions — luxury, modern και vintage — για σύγχρονα κουρεία στην Κύπρο.
                </motion.p>
              </div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }} style={{ flexShrink: 0 }}>
                <a href="/epikoinonia" style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#D4AF37", color: "#000", fontFamily: FONT, fontWeight: 700, fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", padding: "14px 28px", textDecoration: "none", borderRadius: "4px", whiteSpace: "nowrap" }}
                  className="hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:bg-[#C9A832] transition-all duration-300">
                  Θέλω το δικό μου site
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Concept Cards */}
        <section style={{ background: "#080808", paddingBottom: "80px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "4px" }}>
            {concepts.map((concept, i) => (
              <ConceptRow key={concept.id} concept={concept} index={i} />
            ))}
          </div>
        </section>

        {/* CTA Bottom */}
        <section style={{ background: "#0B0B0B", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "64px 0" }} className="text-center">
          <div className="container mx-auto px-4 md:px-6">
            <p style={{ fontFamily: FONT, fontSize: "10px", letterSpacing: "3px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "14px" }}>Εξερευνήστε</p>
            <h2 style={{ fontFamily: FONT, fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>Θέλετε site για άλλο κλάδο;</h2>
            <div style={{ width: "50px", height: "1px", background: "linear-gradient(to right, transparent, #D4AF37, transparent)", margin: "0 auto 20px" }} />
            <p style={{ fontFamily: FONT, color: "rgba(255,255,255,0.4)", fontSize: "14px", marginBottom: "28px", fontStyle: "italic" }}>
              Δείτε concepts για εστιατόρια, γυμναστήρια, beauty salons και άλλους κλάδους.
            </p>
            <a href="/concepts" style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(212,175,55,0.35)", color: "#D4AF37", fontFamily: FONT, fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", padding: "13px 28px", textDecoration: "none", borderRadius: "4px" }}
              className="hover:bg-[rgba(212,175,55,0.08)] transition-all duration-300">
              Όλα τα Concepts
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ConceptRow({ concept, index }: { concept: typeof concepts[0]; index: number }) {
  const flip = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay: 0.05 }}
      style={{ marginBottom: "64px" }}
    >
      {/* Number label */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "20px" }}>
        <span style={{ fontFamily: FONT, fontSize: "11px", letterSpacing: "3px", color: "rgba(255,255,255,0.18)", textTransform: "uppercase" }}>
          {concept.number}
        </span>
        <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.06)" }} />
      </div>

      {/* Card */}
      <div
        className={`flex flex-col ${flip ? "lg:flex-row-reverse" : "lg:flex-row"} gap-0`}
        style={{ border: "1px solid rgba(255,255,255,0.07)", borderRadius: "20px", overflow: "hidden", background: "#111111", boxShadow: "0 8px 48px rgba(0,0,0,0.5)" }}
      >
        {/* Screenshot Image */}
        <div style={{ flex: "0 0 auto", position: "relative", overflow: "hidden", background: "#0a0a0a" }} className="w-full lg:w-[58%] h-[260px] sm:h-[340px] lg:h-auto lg:min-h-[440px]">
          <img
            src={concept.image}
            alt={concept.name}
            style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center top", display: "block" }}
            loading="lazy"
          />
          {/* Subtle right fade to blend into card on desktop */}
          <div style={{
            position: "absolute", inset: 0,
            background: flip
              ? "linear-gradient(to left, rgba(17,17,17,0.6) 0%, transparent 25%)"
              : "linear-gradient(to right, rgba(17,17,17,0.6) 0%, transparent 25%)",
            pointerEvents: "none",
          }} className="hidden lg:block" />
          {/* Mobile overlay bottom */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40px", background: "linear-gradient(to top, #111111, transparent)", pointerEvents: "none" }} className="lg:hidden" />

          {/* Style badge */}
          <div style={{ position: "absolute", top: "16px", left: "16px", background: "rgba(0,0,0,0.6)", backdropFilter: "blur(8px)", border: `1px solid ${concept.accentColor}40`, borderRadius: "20px", padding: "5px 12px" }}>
            <span style={{ fontFamily: FONT, fontSize: "10px", letterSpacing: "1.5px", color: concept.accentColor, textTransform: "uppercase" }}>{concept.style}</span>
          </div>
        </div>

        {/* Info Panel */}
        <div style={{ flex: 1, padding: "clamp(28px, 4vw, 48px)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          {/* Stars */}
          <div style={{ display: "flex", gap: "4px", marginBottom: "18px" }}>
            {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#D4AF37" color="#D4AF37" />)}
          </div>

          <h2 style={{ fontFamily: FONT, fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "8px" }}>
            {concept.name}
          </h2>
          <p style={{ fontFamily: FONT, fontStyle: "italic", color: concept.accentColor, fontSize: "14px", marginBottom: "20px" }}>
            {concept.tagline}
          </p>
          <div style={{ width: "40px", height: "1px", background: `linear-gradient(to right, ${concept.accentColor}, transparent)`, marginBottom: "18px" }} />
          <p style={{ fontFamily: FONT, color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: 1.8, marginBottom: "26px" }}>
            {concept.desc}
          </p>

          {/* Feature tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
            {concept.features.map((f) => (
              <span key={f} style={{ fontFamily: FONT, fontSize: "10px", letterSpacing: "0.8px", color: concept.accentColor, background: `${concept.accentColor}12`, border: `1px solid ${concept.accentColor}25`, borderRadius: "20px", padding: "5px 12px" }}>
                {f}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
            <Link
              href={concept.href}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#D4AF37", color: "#000", fontFamily: FONT, fontWeight: 700, fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", padding: "14px 26px", textDecoration: "none", borderRadius: "6px", transition: "all 0.3s ease" }}
              className="hover:shadow-[0_0_22px_rgba(212,175,55,0.4)] hover:bg-[#C9A832]"
            >
              <Play size={12} fill="#000" />
              Live Preview
            </Link>
            <a
              href="/epikoinonia"
              style={{ display: "inline-flex", alignItems: "center", gap: "6px", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)", fontFamily: FONT, fontSize: "11px", letterSpacing: "1.5px", textTransform: "uppercase", padding: "13px 22px", textDecoration: "none", borderRadius: "6px", transition: "all 0.3s ease" }}
              className="hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              <Zap size={12} />
              Θέλω παρόμοιο
            </a>
          </div>

          {/* Mobile info */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "24px" }}>
            <Smartphone size={11} color="rgba(255,255,255,0.25)" />
            <span style={{ fontFamily: FONT, fontSize: "11px", color: "rgba(255,255,255,0.25)" }}>Πλήρως responsive σε όλες τις συσκευές</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
