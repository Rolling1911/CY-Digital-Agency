import { motion } from "framer-motion";
import { ArrowRight, Play, Rocket, TrendingUp, Star, Target } from "lucide-react";
import { useEffect, useRef } from "react";

const FONT = "'Noto Serif', Georgia, serif";

const stats = [
  { icon: Rocket, number: "120+", label: "ΟΛΟΚΛΗΡΩΜΕΝΑ ΕΡΓΑ" },
  { icon: TrendingUp, number: "300%", label: "ΜΕΣΗ ΑΥΞΗΣΗ ΠΕΛΑΤΩΝ" },
  { icon: Star, number: "5.0", label: "ΑΞΙΟΛΟΓΗΣΗ ΠΕΛΑΤΩΝ" },
  { icon: Target, number: "100%", label: "ΠΡΟΣΑΝΑΤΟΛΙΣΜΟΣ ΣΤΟ ΑΠΟΤΕΛΕΣΜΑ" },
];

function GoldenWaves() {
  return (
    <svg
      style={{ position: "absolute", top: 0, right: 0, width: "62%", height: "100%", pointerEvents: "none", zIndex: 5 }}
      viewBox="0 0 700 600"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
    >
      <motion.path
        d="M700 80 C580 120, 460 60, 340 140 C220 220, 160 160, 80 200"
        stroke="url(#gold1)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.6 }}
        transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
      />
      <motion.path
        d="M700 140 C560 190, 420 100, 300 200 C200 280, 130 240, 0 280"
        stroke="url(#gold2)"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.45 }}
        transition={{ duration: 3, ease: "easeOut", delay: 0.8 }}
      />
      <motion.path
        d="M700 200 C600 160, 500 220, 380 170 C260 120, 180 200, 60 160"
        stroke="url(#gold3)"
        strokeWidth="0.8"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.35 }}
        transition={{ duration: 3.5, ease: "easeOut", delay: 1.1 }}
      />
      <motion.path
        d="M700 60 C620 100, 540 40, 440 100 C340 160, 260 100, 160 140 C80 170, 40 130, -20 160"
        stroke="url(#gold1)"
        strokeWidth="0.6"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.25 }}
        transition={{ duration: 4, ease: "easeOut", delay: 1.4 }}
      />
      <defs>
        <linearGradient id="gold1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
          <stop offset="40%" stopColor="#F5D96B" stopOpacity="1" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient id="gold2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B8922E" stopOpacity="0" />
          <stop offset="50%" stopColor="#D4AF37" stopOpacity="1" />
          <stop offset="100%" stopColor="#F5D96B" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="gold3" x1="100%" y1="0%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#E8C84A" stopOpacity="1" />
          <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function FloatingParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: 45 + Math.random() * 55,
    y: 5 + Math.random() * 85,
    size: 1 + Math.random() * 2,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 4,
  }));

  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 6 }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: "50%",
            background: "#D4AF37",
          }}
          animate={{
            y: [-8, 8, -8],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document.querySelector("#portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        height: "100dvh",
        minHeight: "640px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        background: "#0a0a0a",
      }}
    >
      {/* Background image */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <img
          src="/images/hero-cyprus-night.jpg"
          alt="Cyprus night cityscape"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "55% center",
            opacity: 1,
          }}
        />
        {/* Left overlay — dark on far left for text readability, fades to show sea + city */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgba(5,5,5,0.88) 0%, rgba(5,5,5,0.70) 25%, rgba(5,5,5,0.30) 48%, rgba(5,5,5,0.05) 65%, rgba(5,5,5,0.0) 80%)",
        }} />
        {/* Bottom fade into stats bar */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "160px",
          background: "linear-gradient(to top, rgba(5,5,5,1) 0%, rgba(5,5,5,0.85) 40%, transparent 100%)",
        }} />
        {/* Top vignette */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "120px",
          background: "linear-gradient(to bottom, rgba(5,5,5,0.5) 0%, transparent 100%)",
        }} />
      </div>

      {/* Animated golden waves */}
      <GoldenWaves />

      {/* Floating particles */}
      <FloatingParticles />

      {/* Ambient glow */}
      <div style={{
        position: "absolute",
        top: "20%",
        right: "20%",
        width: "400px",
        height: "400px",
        background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 4,
      }} />

      {/* Main content */}
      <div style={{
        position: "relative",
        zIndex: 10,
        flex: 1,
        display: "flex",
        alignItems: "center",
        padding: "0",
      }}>
        <div style={{ width: "100%", padding: "0 0 0 clamp(20px, 4vw, 56px)" }}>
          <div style={{ maxWidth: "720px", paddingTop: "88px" }}>

            {/* Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}
            >
              <span style={{
                fontFamily: FONT,
                fontSize: "11px",
                letterSpacing: "3px",
                color: "#D4AF37",
                textTransform: "uppercase",
                fontWeight: 600,
              }}>
                Cyprus Digital Agency
              </span>
              <div style={{ width: "40px", height: "1px", background: "linear-gradient(to right, #D4AF37, transparent)" }} />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: FONT,
                fontWeight: 700,
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: "4px",
                fontSize: "clamp(2.6rem, 5.2vw, 5rem)",
              }}
            >
              Χτίζουμε ψηφιακές εμπειρίες που φέρνουν
            </motion.h1>

            {/* Gold accent word */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: FONT,
                fontWeight: 700,
                fontSize: "clamp(2.6rem, 5.2vw, 5rem)",
                lineHeight: 1.2,
                marginBottom: "24px",
                background: "linear-gradient(135deg, #C8960C 0%, #F5D96B 40%, #D4AF37 70%, #A0750A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ΑΠΟΤΕΛΕΣΜΑΤΑ.
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontFamily: FONT,
                fontSize: "clamp(14px, 1.5vw, 16px)",
                lineHeight: 1.8,
                color: "rgba(255,255,255,0.6)",
                marginBottom: "36px",
                maxWidth: "480px",
              }}
            >
              Premium ιστοσελίδες, branding και digital στρατηγική για επιχειρήσεις που θέλουν να ξεχωρίσουν και να αναπτυχθούν.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center" }}
            >
              <button
                onClick={scrollToContact}
                data-testid="button-hero-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#D4AF37",
                  color: "#000",
                  fontFamily: FONT,
                  fontWeight: 700,
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "15px 28px",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  borderRadius: "2px",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#C9A832";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 28px rgba(212,175,55,0.45)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = "#D4AF37";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                }}
              >
                ΚΛΕΙΣΤΕ ΜΙΑ ΣΥΝΑΝΤΗΣΗ
                <ArrowRight size={13} />
              </button>

              <button
                onClick={scrollToPortfolio}
                data-testid="button-hero-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.85)",
                  fontFamily: FONT,
                  fontWeight: 600,
                  fontSize: "11px",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  padding: "14px 26px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  borderRadius: "2px",
                  whiteSpace: "nowrap",
                  backdropFilter: "blur(4px)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#D4AF37";
                  (e.currentTarget as HTMLButtonElement).style.color = "#D4AF37";
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(212,175,55,0.06)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.2)";
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(255,255,255,0.85)";
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.05)";
                }}
              >
                <Play size={12} fill="currentColor" />
                ΔΕΙΤΕ ΤΗ ΔΟΥΛΕΙΑ ΜΑΣ
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 20,
          borderTop: "1px solid rgba(212,175,55,0.18)",
          background: "#0c0c0c",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 clamp(24px, 5vw, 80px)", display: "flex" }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "18px 16px",
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <stat.icon size={18} color="#D4AF37" strokeWidth={1.5} style={{ flexShrink: 0, opacity: 0.75 }} />
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", flexWrap: "wrap" }}>
                <span style={{
                  fontFamily: FONT,
                  fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)",
                  fontWeight: 700,
                  color: "#D4AF37",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                }}>
                  {stat.number}
                </span>
                <span style={{
                  fontFamily: FONT,
                  fontSize: "clamp(8px, 0.65vw, 9px)",
                  letterSpacing: "1.5px",
                  color: "rgba(255,255,255,0.38)",
                  textTransform: "uppercase",
                  lineHeight: 1.2,
                }}>
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
