export default function CursorGlow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] mix-blend-screen"
    >
      <div
        className="absolute"
        style={{
          left: "calc(var(--spotlight-x) - 180px)",
          top: "calc(var(--spotlight-y) - 180px)",
          width: 360,
          height: 360,
          borderRadius: 9999,
          background:
            "radial-gradient(180px 180px at center, rgba(255,255,255,0.28), rgba(255,255,255,0))",
          filter: "blur(0.3px)",
          willChange: "transform",
        }}
      />
      <div
        className="absolute"
        style={{
          left: "calc(var(--spotlight-x) - 320px)",
          top: "calc(var(--spotlight-y) - 320px)",
          width: 640,
          height: 640,
          borderRadius: 9999,
          background:
            "radial-gradient(320px 320px at center, rgba(255,255,255,0.16), rgba(255,255,255,0))",
          willChange: "transform",
        }}
      />
    </div>
  );
}
