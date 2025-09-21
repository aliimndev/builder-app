import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/divisions", label: "Divisions" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
];

function BemLogo({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2 group", className)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-[1.03]"
      >
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
        </defs>
        <rect x="4" y="4" width="40" height="40" rx="8" fill="url(#g)" />
        <path
          d="M14 30c6-2 8-10 10-10s4 8 10 10"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="24" cy="18.5" r="2" fill="white" />
      </svg>
      <div className="flex flex-col leading-none">
        <span className="text-base font-extrabold tracking-tight text-foreground">
          BEM FILKOM
        </span>
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
          Djuanda University
        </span>
      </div>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number>(0);
  const pending = useRef<{ y: number; h: number } | null>(null);

  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      const dh = document.documentElement.scrollHeight - window.innerHeight;
      pending.current = { y, h: dh > 0 ? dh : 1 };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(() => {
          const p = pending.current!;
          setScrolled(p.y > 8);
          setProgress(Math.min(100, Math.max(0, (p.y / p.h) * 100)));
          rafRef.current && cancelAnimationFrame(rafRef.current);
          rafRef.current = 0;
        });
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll as any);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b backdrop-blur transition-all duration-300",
        scrolled
          ? "bg-background/85 supports-[backdrop-filter]:bg-background/65 shadow-lg"
          : "bg-background/40 supports-[backdrop-filter]:bg-background/30",
      )}
    >
      {/* Scroll progress bar */}
      <div
        className="absolute left-0 top-0 h-[2px] bg-accent/90"
        style={{ width: `${progress}%` }}
      />

      <div className={cn("container flex items-center justify-between", scrolled ? "h-14" : "h-16")}>        
        <BemLogo />
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "relative px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  "after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:scale-x-0 after:origin-left after:transition-transform after:bg-accent hover:after:scale-x-100",
                  isActive
                    ? "text-foreground bg-secondary/30 after:scale-x-100"
                    : "text-foreground/80 hover:text-foreground hover:bg-secondary/20",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="group relative overflow-hidden shadow-sm bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/divisions">
              <span className="relative z-10">Join BEM</span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.35),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-full"
              />
            </Link>
          </Button>
        </div>

        <button
          aria-label="Open menu"
          className={cn(
            "md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border transition-colors",
            open ? "bg-secondary/30" : "bg-background/60",
          )}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-5">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-sm transition-all">
          <div className="container py-2 grid">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-1 py-2 text-sm text-foreground/90 hover:bg-secondary/20 rounded-md transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="group mt-2 w-full relative overflow-hidden bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/divisions">
                <span className="relative z-10">Register Now</span>
                <span aria-hidden className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent,rgba(255,255,255,.35),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-full" />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default SiteHeader;
