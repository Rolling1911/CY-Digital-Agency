import { Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";

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
        <Link href="/concepts" style={{ fontFamily: FONT, color: "#D4AF37", textDecoration: "none", fontSize: "13px" }}>← Back to Concepts</Link>
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
            <span className="hidden sm:inline"> — Website Concept</span>
          </span>
        </div>

        {/* Concept name + open link */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <span style={{
            fontFamily: FONT,
            fontSize: "11px",
            color: "rgba(255,255,255,0.35)",
            whiteSpace: "nowrap",
            maxWidth: "160px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }} className="hidden md:block">
            {concept.name}
          </span>
          <a
            href={concept.url}
            target="_blank"
            rel="noopener noreferrer"
            title="Open original demo"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "#D4AF37",
              fontFamily: FONT,
              fontSize: "10px",
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              textDecoration: "none",
              border: "1px solid rgba(212,175,55,0.3)",
              borderRadius: "4px",
              padding: "4px 10px",
              transition: "all 0.2s ease",
            }}
            className="hover:bg-[rgba(212,175,55,0.1)]"
          >
            <ExternalLink size={10} />
            <span className="hidden sm:inline">Full Site</span>
          </a>
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
