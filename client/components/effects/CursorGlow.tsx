export default function CursorGlow() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Small cursor dot */}
      <div
        className="absolute"
        style={{
          left: "calc(var(--spotlight-x) - 4px)",
          top: "calc(var(--spotlight-y) - 4px)",
          width: 8,
          height: 8,
          borderRadius: 9999,
          background: "rgba(255,255,255,0.95)",
          boxShadow:
            "0 0 8px rgba(255,255,255,0.85), 0 0 18px rgba(255,255,255,0.35)",
          mixBlendMode: "normal",
          willChange: "transform",
        }}
      />
      {/* Tight halo glow */}
      <div
        className="absolute"
        style={{
          left: "calc(var(--spotlight-x) - 70px)",
          top: "calc(var(--spotlight-y) - 70px)",
          width: 140,
          height: 140,
          borderRadius: 9999,
          background:
            "radial-gradient(70px 70px at center, rgba(255,255,255,0.18), rgba(255,255,255,0))",
          willChange: "transform",
        }}
      />
      {/* Outer soft glow */}
      <div
        className="absolute"
        style={{
          left: "calc(var(--spotlight-x) - 120px)",
          top: "calc(var(--spotlight-y) - 120px)",
          width: 240,
          height: 240,
          borderRadius: 9999,
          background:
            "radial-gradient(120px 120px at center, rgba(255,255,255,0.12), rgba(255,255,255,0))",
          willChange: "transform",
        }}
      />
    </div>
  );
}
