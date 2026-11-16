const flakes = Array.from({ length: 36 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  delay: `-${(i * 7) % 22}s`,
  duration: `${13 + ((i * 5) % 12)}s`,
  size: `${10 + (i % 5) * 4}px`,
  opacity: 0.55 + (i % 4) * 0.12,
  drift: i % 2 === 0 ? "snow-drift-left" : "snow-drift-right",
}));

export default function Snowfall() {
  return (
    <div className="snowfall-layer" aria-hidden="true">
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className={`snowflake ${flake.drift}`}
          style={{
            left: flake.left,
            animationDelay: flake.delay,
            animationDuration: flake.duration,
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
          }}
        >
          ❄
        </span>
      ))}
    </div>
  );
}
