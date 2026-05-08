import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

const FONT = "'Noto Serif', Georgia, serif";

const CONCEPTS: Record<string, { name: string; url: string; category: string; categoryHref: string }> = {
  "royal-blade": {
    name: "Royal Blade Barber Lounge",
    url: "https://royal-blade-lounge.replit.app",
    category: "Barber Shops",
    categoryHref: "/concepts/barbers",
  },
  "the-cut-studio": {
    name: "The Cut Studio",
    url: "https://barber-studio-cyprus.replit.app",
    category: "Barber Shops",
    categoryHref: "/concepts/barbers",
  },
  "heritage-barber": {
    name: "Heritage Barber House",
    url: "https://barber-shop-demo-3.replit.app",
    category: "Barber Shops",
    categoryHref: "/concepts/barbers",
  },
  "mare-vista": {
    name: "Mare Vista",
    url: "https://MareVista.replit.app",
    category: "Restaurants & Takeaways",
    categoryHref: "/concepts/restaurants",
  },
  "smash-district": {
    name: "SMASH District",
    url: "https://SmashDistrict.replit.app",
    category: "Restaurants & Takeaways",
    categoryHref: "/concepts/restaurants",
  },
  "evora-mediterranean": {
    name: "Évora Mediterranean",
    url: "https://EvoraBistro.replit.app",
    category: "Restaurants & Takeaways",
    categoryHref: "/concepts/restaurants",
  },
  "titan-house": {
    name: "Titan House",
    url: "https://titanhouse.replit.app",
    category: "Gyms & Fitness",
    categoryHref: "/concepts/gyms",
  },
  "aura-wellness": {
    name: "Aura Wellness Club",
    url: "https://wellnessstudio.replit.app",
    category: "Gyms & Fitness",
    categoryHref: "/concepts/gyms",
  },
  "velocity-lab": {
    name: "Velocity Lab",
    url: "https://velocitylab.replit.app",
    category: "Gyms & Fitness",
    categoryHref: "/concepts/gyms",
  },
};

interface ConceptViewerPageProps {
  conceptId: string;
}

export default function ConceptViewerPage({ conceptId }: ConceptViewerPageProps) {
  const concept = CONCEPTS[conceptId];

  if (!concept) {
    return (
      <div style={{ minHeight: "100vh", background: "#0B0B0B", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "16px" }}>
        <p style={{ fontFamily: FONT, color: "rgba(255,255,255,0.5)", fontSize: "16px" }}>Concept not found.</p>
        <Link href="/concepts" style={{ fontFamily: FONT, color: "#D4AF37", textDecoration: "none", fontSize: "13px" }}>← Back to Live Previews</Link>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100dvh", background: "#0B0B0B", overflow: "hidden" }}>

      {/* Top bar */}
      <div style={{
        flexShrink: 0,
        height: "48px",
        background: "#111111",
        borderBottom: "1px solid rgba(212,175,55,0.18)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        gap: "12px",
        zIndex: 10,
      }}>
        {/* Back button */}
        <Link
          href={concept.categoryHref}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "rgba(255,255,255,0.55)",
            textDecoration: "none",
            fontFamily: FONT,
            fontSize: "11px",
            letterSpacing: "0.5px",
            transition: "color 0.2s ease",
            flexShrink: 0,
            whiteSpace: "nowrap",
          }}
          className="hover:text-[#D4AF37]"
        >
          <ArrowLeft size={13} />
          <span className="hidden sm:inline">← {concept.category}</span>
          <span className="sm:hidden">←</span>
        </Link>

        {/* Center label */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <span style={{
            fontFamily: FONT,
            fontSize: "11px",
            letterSpacing: "2px",
            color: "rgba(255,255,255,0.45)",
            textTransform: "uppercase",
          }}>
            <span style={{ color: "#D4AF37" }}>CY Digital Agency</span>
            <span className="hidden sm:inline"> — Live Preview</span>
          </span>
        </div>

        {/* Right: CTA + external icon */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
          <Link
            href="/epikoinonia"
            style={{
              display: "flex",
              alignItems: "center",
              background: "#D4AF37",
              color: "#000",
              fontFamily: FONT,
              fontWeight: 700,
              fontSize: "10px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "4px",
              padding: "6px 14px",
              whiteSpace: "nowrap",
              transition: "background 0.2s ease",
            }}
            className="hover:bg-[#C9A832]"
          >
            Ζητήστε Προσφορά
          </Link>
        </div>
      </div>

      {/* Full-screen iframe */}
      <iframe
        src={concept.url}
        title={concept.name}
        style={{
          flex: 1,
          width: "100%",
          border: "none",
          display: "block",
          background: "#0B0B0B",
        }}
        allow="fullscreen"
        loading="lazy"
      />
    </div>
  );
}
