import { useState, useEffect, useRef } from "react";

const FONT = "'Noto Serif', Georgia, serif";
const PASSWORD = "DIANI2026";
const PORTAL_URL = "https://dianiproject.replit.app";
const SESSION_KEY = "diani_access";

export default function InvestorsDianiPage() {
  const [input, setInput] = useState("");
  const [granted, setGranted] = useState(false);
  const [error, setError] = useState(false);
  const [shaking, setShaking] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // noindex / nofollow
    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!robotsMeta) {
      robotsMeta = document.createElement("meta");
      robotsMeta.setAttribute("name", "robots");
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute("content", "noindex, nofollow, noarchive, nosnippet");

    document.title = "Private Investor Portal";

    // Remove canonical if present so crawlers get no signal
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) canonical.removeAttribute("href");

    // Restore on unmount
    return () => {
      document.title = "CYDigital - Premium Digital Agency Κύπρος";
      if (robotsMeta) robotsMeta.setAttribute("content", "index, follow");
    };
  }, []);

  useEffect(() => {
    // Persist access in session storage so refresh doesn't kick user out
    if (sessionStorage.getItem(SESSION_KEY) === "1") {
      setGranted(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim().toUpperCase() === PASSWORD) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setGranted(true);
      setError(false);
    } else {
      setError(true);
      setShaking(true);
      setInput("");
      setTimeout(() => setShaking(false), 600);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  };

  if (granted) {
    return (
      <div style={{ position: "fixed", inset: 0, background: "#000", zIndex: 9999 }}>
        <iframe
          src={PORTAL_URL}
          title="Diani Investor Portal"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
          }}
          allow="fullscreen"
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-top-navigation"
        />
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: "#090909",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -60%)",
        width: "600px",
        height: "600px",
        background: "radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 65%)",
        borderRadius: "50%",
        pointerEvents: "none",
      }} />

      {/* Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(212,175,55,0.18)",
          borderRadius: "20px",
          padding: "clamp(36px, 6vw, 56px) clamp(28px, 5vw, 48px)",
          boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
          backdropFilter: "blur(12px)",
          position: "relative",
          zIndex: 1,
          animation: shaking ? "shake 0.5s ease" : "none",
        }}
      >
        {/* Logo mark */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "32px" }}>
          <img
            src="/images/logo-agency.png"
            alt="CYDigital"
            style={{ height: "44px", width: "auto", objectFit: "contain", opacity: 0.9 }}
          />
        </div>

        {/* Gold divider */}
        <div style={{
          width: "48px",
          height: "1px",
          background: "linear-gradient(to right, transparent, #D4AF37, transparent)",
          margin: "0 auto 28px",
        }} />

        {/* Heading */}
        <p style={{
          fontFamily: FONT,
          fontSize: "10px",
          letterSpacing: "3.5px",
          color: "#D4AF37",
          textTransform: "uppercase",
          textAlign: "center",
          marginBottom: "10px",
        }}>
          Private Access
        </p>
        <h1 style={{
          fontFamily: FONT,
          fontSize: "clamp(1.3rem, 4vw, 1.7rem)",
          fontWeight: 700,
          color: "#ffffff",
          textAlign: "center",
          marginBottom: "10px",
          lineHeight: 1.2,
        }}>
          Investor Portal
        </h1>
        <p style={{
          fontFamily: FONT,
          fontSize: "13px",
          color: "rgba(255,255,255,0.35)",
          textAlign: "center",
          marginBottom: "36px",
          lineHeight: 1.7,
          fontStyle: "italic",
        }}>
          Private investor portal. Access by invitation only.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ position: "relative" }}>
            <input
              ref={inputRef}
              type="password"
              value={input}
              onChange={(e) => { setInput(e.target.value); setError(false); }}
              placeholder="Enter access code"
              autoComplete="off"
              autoFocus
              style={{
                width: "100%",
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${error ? "rgba(220,60,60,0.6)" : "rgba(212,175,55,0.22)"}`,
                borderRadius: "8px",
                padding: "15px 18px",
                fontFamily: FONT,
                fontSize: "14px",
                color: "#fff",
                outline: "none",
                transition: "border-color 0.25s",
                letterSpacing: "3px",
                boxSizing: "border-box",
              }}
              onFocus={(e) => {
                if (!error) e.target.style.borderColor = "rgba(212,175,55,0.55)";
              }}
              onBlur={(e) => {
                if (!error) e.target.style.borderColor = "rgba(212,175,55,0.22)";
              }}
            />
          </div>

          {error && (
            <p style={{
              fontFamily: FONT,
              fontSize: "12px",
              color: "rgba(220,80,80,0.85)",
              textAlign: "center",
              margin: "0",
            }}>
              Incorrect access code. Please try again.
            </p>
          )}

          <button
            type="submit"
            style={{
              background: "#D4AF37",
              color: "#000",
              fontFamily: FONT,
              fontWeight: 700,
              fontSize: "11px",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              padding: "16px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "all 0.25s ease",
              marginTop: "4px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#C9A832";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 24px rgba(212,175,55,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = "#D4AF37";
              (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
            }}
          >
            Access Portal
          </button>
        </form>

        {/* Footer note */}
        <p style={{
          fontFamily: FONT,
          fontSize: "11px",
          color: "rgba(255,255,255,0.18)",
          textAlign: "center",
          marginTop: "28px",
        }}>
          cydigital.agency · Confidential
        </p>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          15%       { transform: translateX(-8px); }
          30%       { transform: translateX(8px); }
          45%       { transform: translateX(-6px); }
          60%       { transform: translateX(6px); }
          75%       { transform: translateX(-3px); }
          90%       { transform: translateX(3px); }
        }
      `}</style>
    </div>
  );
}
