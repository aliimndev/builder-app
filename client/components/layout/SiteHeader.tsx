import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

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
        className="shrink-0"
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
  const location = useLocation();
  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <BemLogo />
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive
                    ? "text-primary-foreground bg-primary/10"
                    : "text-foreground/80 hover:text-foreground hover:bg-accent",
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild className="shadow-sm bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/divisions">Join BEM</Link>
          </Button>
        </div>

        <button
          aria-label="Open menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="size-5"
          >
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t bg-background">
          <div className="container py-2 grid">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-1 py-2 text-sm text-foreground/90"
              >
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full">
              <Link to="/divisions">Register Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default SiteHeader;
