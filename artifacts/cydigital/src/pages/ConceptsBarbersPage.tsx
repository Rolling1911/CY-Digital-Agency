import { motion } from "framer-motion";
import { Link } from "wouter";
import { Scissors, ArrowLeft, ExternalLink, Star, ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

const FONT = "'Noto Serif', Georgia, serif";

const concepts = [
  {
    id: "royal-blade",
    name: "Royal Blade Barber Lounge",
    tagline: "Luxury grooming for the modern gentleman",
    desc: "Ένα premium barbershop concept με σκοτεινή αισθητική, χρυσές λεπτομέρειες και focus στην πολυτελή εμπειρία grooming.",
    url: "/concepts/royal-blade",
    live: true,
    palette: ["#1a0f05", "#2d1f0a", "#D4AF37"],
    accentColor: "#D4AF37",
    highlights: ["Online Κρατήσεις", "Premium Design", "Mobile Optimized"],
    mockBg: "linear-gradient(135deg, #1a0f05 0%, #2a1a08 40%, #1a0f05 100%)",
    mockAccent: "#D4AF37",
    mockPattern: "royal",
  },
  {
    id: "cut-studio",
    name: "The Cut Studio",
    tagline: "Modern cuts. Clean lines. Bold identity.",
    desc: "Καθαρό, minimal barbershop concept με industrial αισθητική, έμφαση στο portfolio κουρέματος και εύκολη online κράτηση.",
    url: "/concepts/the-cut-studio",
    live: true,
    palette: ["#111111", "#1e1e1e", "#e0e0e0"],
    accentColor: "#c8c8c8",
    highlights: ["Minimal Design", "Portfolio Gallery", "Fast Loading"],
    mockBg: "linear-gradient(135deg, #111111 0%, #1e1e1e 50%, #111111 100%)",
    mockAccent: "#d0d0d0",
    mockPattern: "studio",
  },
  {
    id: "heritage-barber",
    name: "Heritage Barber House",
    tagline: "Craftsmanship rooted in tradition",
    desc: "Vintage-inspired barbershop concept με warm tones, κλασική τυπογραφία και storytelling που αναδεικνύει την παράδοση του craft.",
    url: "/concepts/heritage-barber",
    live: true,
    palette: ["#1a1208", "#2a1f10", "#C4A257"],
    accentColor: "#C4A257",
    highlights: ["Vintage Aesthetic", "Story-Driven", "Trust Building"],
    mockBg: "linear-gradient(135deg, #1a1208 0%, #2a1f10 50%, #1a1208 100%)",
    mockAccent: "#C4A257",
    mockPattern: "heritage",
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

        {/* Page Hero */}
        <section className="pt-[88px] bg-[#0B0B0B] relative overflow-hidden">
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 65%)", pointerEvents: "none" }} />
          <div className="container mx-auto px-4 md:px-6 pt-12 pb-14 relative">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "32px" }}
            >
              <Link
                href="/concepts"
                style={{ display: "flex", alignItems: "center", gap: "6px", color: "rgba(255,255,255,0.4)", textDecoration: "none", fontFamily: FONT, fontSize: "12px", letterSpacing: "0.5px", transition: "color 0.2s ease" }}
                className="hover:text-[#D4AF37]"
              >
                <ArrowLeft size={13} />
                Website Concepts
              </Link>
              <ChevronRight size={12} color="rgba(255,255,255,0.2)" />
              <span style={{ fontFamily: FONT, fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>Barber Shops</span>
            </motion.div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}
                >
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.3)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Scissors size={17} color="#D4AF37" strokeWidth={1.5} />
                  </div>
                  <span style={{ fontFamily: FONT, fontSize: "11px", letterSpacing: "3px", color: "#D4AF37", textTransform: "uppercase" }}>Barber Shop Concepts</span>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  style={{ fontFamily: FONT, fontSize: "clamp(1.9rem, 4vw, 3rem)", fontWeight: 700, color: "#fff", lineHeight: 1.2, marginBottom: "12px" }}
                >
                  Barbershop Website Concepts
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  style={{ fontFamily: FONT, fontStyle: "italic", color: "rgba(255,255,255,0.5)", fontSize: "15px", maxWidth: "480px", lineHeight: 1.7 }}
                >
                  Τρία διαφορετικά design concepts για σύγχρονα κουρεία — premium, minimal και vintage.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                style={{ flexShrink: 0 }}
              >
                <Link
                  href="/epikoinonia"
                  style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#D4AF37", color: "#000", fontFamily: FONT, fontWeight: 700, fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", padding: "13px 28px", textDecoration: "none", borderRadius: "4px", transition: "all 0.3s ease", whiteSpace: "nowrap" }}
                  className="hover:shadow-[0_0_20px_rgba(212,175,55,0.35)]"
                >
                  Θέλω το δικό μου site
                  <ArrowLeft size={13} style={{ transform: "rotate(180deg)" }} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Concept Cards */}
        <section style={{ background: "#080808", padding: "60px 0 80px" }}>
          <div className="container mx-auto px-4 md:px-6">
            <div style={{ display: "flex", flexDirection: "column", gap: "48px", maxWidth: "900px", margin: "0 auto" }}>
              {concepts.map((concept, i) => (
                <ConceptCard key={concept.id} concept={concept} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Other categories teaser */}
        <section style={{ background: "#0B0B0B", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "56px 0" }}>
          <div className="container mx-auto px-4 md:px-6 text-center">
            <p style={{ fontFamily: FONT, fontSize: "11px", letterSpacing: "3px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", marginBottom: "12px" }}>Εξερευνήστε</p>
            <h2 style={{ fontFamily: FONT, fontSize: "1.5rem", fontWeight: 700, color: "#fff", marginBottom: "8px" }}>Περισσότεροι Κλάδοι</h2>
            <div style={{ width: "50px", height: "1px", background: "linear-gradient(to right, transparent, #D4AF37, transparent)", margin: "0 auto 20px" }} />
            <p style={{ fontFamily: FONT, color: "rgba(255,255,255,0.45)", fontSize: "14px", marginBottom: "28px" }}>
              Δείτε concepts για εστιατόρια, γυμναστήρια, beauty salons και άλλους κλάδους.
            </p>
            <Link
              href="/concepts"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(212,175,55,0.35)", color: "#D4AF37", fontFamily: FONT, fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", padding: "13px 28px", textDecoration: "none", borderRadius: "4px", transition: "all 0.3s ease" }}
              className="hover:bg-[rgba(212,175,55,0.08)]"
            >
              Όλα τα Concepts
              <ArrowLeft size={13} style={{ transform: "rotate(180deg)" }} />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

function ConceptCard({ concept, index }: { concept: typeof concepts[0]; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "20px",
        overflow: "hidden",
        background: "#111111",
        boxShadow: "0 4px 40px rgba(0,0,0,0.5)",
      }}
    >
      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>

        {/* Mock Browser Preview */}
        <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "100%" }} className="lg:w-[55%]">
          <MockBrowser concept={concept} />
        </div>

        {/* Info Panel */}
        <div style={{ flex: 1, padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "0" }}>
          <div style={{ marginBottom: "20px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={11} fill="#D4AF37" color="#D4AF37" />
              ))}
            </div>
            <h2 style={{ fontFamily: FONT, fontSize: "1.35rem", fontWeight: 700, color: "#fff", lineHeight: 1.25, marginBottom: "6px" }}>
              {concept.name}
            </h2>
            <p style={{ fontFamily: FONT, fontStyle: "italic", color: concept.accentColor, fontSize: "13px", marginBottom: "16px" }}>
              {concept.tagline}
            </p>
            <div style={{ width: "40px", height: "1px", background: `linear-gradient(to right, ${concept.accentColor}80, transparent)`, marginBottom: "16px" }} />
            <p style={{ fontFamily: FONT, color: "rgba(255,255,255,0.55)", fontSize: "14px", lineHeight: 1.75 }}>
              {concept.desc}
            </p>
          </div>

          {/* Feature highlights */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
            {concept.highlights.map((h) => (
              <span key={h} style={{ fontFamily: FONT, fontSize: "10px", letterSpacing: "1px", textTransform: "uppercase", color: concept.accentColor, background: `${concept.accentColor}12`, border: `1px solid ${concept.accentColor}25`, borderRadius: "20px", padding: "5px 12px" }}>
                {h}
              </span>
            ))}
          </div>

          {/* CTA */}
          {concept.live ? (
            <Link
              href={concept.url}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#D4AF37", color: "#000", fontFamily: FONT, fontWeight: 700, fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", padding: "14px 26px", textDecoration: "none", borderRadius: "6px", transition: "all 0.3s ease", alignSelf: "flex-start" }}
              className="hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:bg-[#C9A832]"
            >
              <ExternalLink size={13} />
              View Live Concept
            </Link>
          ) : (
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.3)", fontFamily: FONT, fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", padding: "13px 26px", borderRadius: "6px" }}>
                Σύντομα Διαθέσιμο
              </div>
              <p style={{ fontFamily: FONT, fontSize: "11px", color: "rgba(255,255,255,0.3)", marginTop: "10px" }}>
                Επικοινωνήστε μαζί μας για το δικό σας custom site
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function MockBrowser({ concept }: { concept: typeof concepts[0] }) {
  return (
    <div style={{ background: "#0d0d0d", borderRight: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Browser chrome */}
      <div style={{ background: "#1a1a1a", padding: "10px 14px", display: "flex", alignItems: "center", gap: "8px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ display: "flex", gap: "5px" }}>
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FF5F57" }} />
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#FFBD2E" }} />
          <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#28CA41" }} />
        </div>
        <div style={{ flex: 1, background: "#252525", borderRadius: "4px", padding: "5px 10px" }}>
          <span style={{ fontFamily: "monospace", fontSize: "10px", color: "rgba(255,255,255,0.3)" }}>
            cydigital.agency{concept.url}
          </span>
        </div>
      </div>

      {/* Mock page content */}
      <div style={{ height: "280px", background: concept.mockBg, position: "relative", overflow: "hidden" }}>
        {concept.mockPattern === "royal" && <RoyalMock accent={concept.mockAccent} />}
        {concept.mockPattern === "studio" && <StudioMock accent={concept.mockAccent} />}
        {concept.mockPattern === "heritage" && <HeritageMock accent={concept.mockAccent} />}
      </div>
    </div>
  );
}

function RoyalMock({ accent }: { accent: string }) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "32px 24px", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: `radial-gradient(ellipse at 50% 30%, ${accent}22 0%, transparent 70%)` }} />
      <div style={{ position: "absolute", top: "16px", left: "50%", transform: "translateX(-50%)", width: "100%", textAlign: "center" }}>
        <div style={{ display: "inline-flex", gap: "4px", alignItems: "center" }}>
          {[...Array(3)].map((_, i) => <div key={i} style={{ width: "18px", height: "1px", background: accent, opacity: 0.4 }} />)}
          <Scissors size={12} color={accent} style={{ opacity: 0.6 }} />
          {[...Array(3)].map((_, i) => <div key={i} style={{ width: "18px", height: "1px", background: accent, opacity: 0.4 }} />)}
        </div>
      </div>
      <div style={{ textAlign: "center", zIndex: 1 }}>
        <p style={{ fontFamily: FONT, fontSize: "9px", letterSpacing: "4px", color: accent, textTransform: "uppercase", opacity: 0.7, marginBottom: "8px" }}>LUXURY GROOMING</p>
        <h3 style={{ fontFamily: FONT, fontSize: "1.4rem", fontWeight: 700, color: "#fff", marginBottom: "6px", lineHeight: 1.2 }}>ROYAL BLADE</h3>
        <p style={{ fontFamily: FONT, fontSize: "0.6rem", letterSpacing: "3px", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>BARBER LOUNGE</p>
        <div style={{ width: "40px", height: "1px", background: accent, margin: "12px auto" }} />
        <div style={{ display: "inline-block", border: `1px solid ${accent}`, padding: "6px 18px" }}>
          <span style={{ fontFamily: FONT, fontSize: "8px", letterSpacing: "2.5px", color: accent, textTransform: "uppercase" }}>Book Now</span>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: "16px", left: 0, right: 0, display: "flex", justifyContent: "center", gap: "24px" }}>
        {["Services", "Gallery", "Contact"].map(item => (
          <span key={item} style={{ fontFamily: FONT, fontSize: "7px", letterSpacing: "2px", color: "rgba(255,255,255,0.25)", textTransform: "uppercase" }}>{item}</span>
        ))}
      </div>
    </div>
  );
}

function StudioMock({ accent }: { accent: string }) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", overflow: "hidden" }}>
      <div style={{ width: "45%", background: "#111", borderRight: "1px solid rgba(255,255,255,0.06)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "28px 20px" }}>
        <p style={{ fontFamily: FONT, fontSize: "7px", letterSpacing: "3px", color: accent, textTransform: "uppercase", opacity: 0.6, marginBottom: "8px" }}>EST. 2020</p>
        <h3 style={{ fontFamily: FONT, fontSize: "1.1rem", fontWeight: 700, color: "#fff", lineHeight: 1.1, marginBottom: "10px" }}>THE CUT<br />STUDIO</h3>
        <div style={{ width: "24px", height: "2px", background: accent, opacity: 0.5, marginBottom: "10px" }} />
        <div style={{ display: "inline-block", background: accent, padding: "5px 14px", alignSelf: "flex-start" }}>
          <span style={{ fontFamily: FONT, fontSize: "7px", letterSpacing: "2px", color: "#000", fontWeight: 700, textTransform: "uppercase" }}>Book</span>
        </div>
      </div>
      <div style={{ flex: 1, background: "#1a1a1a", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px", padding: "2px" }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} style={{ background: `rgba(255,255,255,${0.03 + i * 0.01})`, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Scissors size={14} color={accent} style={{ opacity: 0.25 }} />
          </div>
        ))}
      </div>
    </div>
  );
}

function HeritageMock({ accent }: { accent: string }) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "28px", position: "relative" }}>
      <div style={{ position: "absolute", inset: "12px", border: `1px solid ${accent}20`, borderRadius: "4px", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: "20px", border: `1px solid ${accent}10`, borderRadius: "2px", pointerEvents: "none" }} />
      <div style={{ textAlign: "center", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center", marginBottom: "10px" }}>
          <div style={{ width: "30px", height: "1px", background: accent, opacity: 0.4 }} />
          <Scissors size={13} color={accent} style={{ opacity: 0.5 }} />
          <div style={{ width: "30px", height: "1px", background: accent, opacity: 0.4 }} />
        </div>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "8px", letterSpacing: "4px", color: accent, textTransform: "uppercase", opacity: 0.6, marginBottom: "6px" }}>SINCE 1987</p>
        <h3 style={{ fontFamily: "Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: "#fff", marginBottom: "4px" }}>Heritage</h3>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.65rem", letterSpacing: "2px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase" }}>BARBER HOUSE</p>
        <div style={{ display: "flex", gap: "6px", justifyContent: "center", marginTop: "14px" }}>
          {[...Array(3)].map((_, i) => <div key={i} style={{ width: "4px", height: "4px", borderRadius: "50%", background: accent, opacity: 0.4 + i * 0.2 }} />)}
        </div>
      </div>
    </div>
  );
}
