import { Link } from "react-router-dom";

const footerLinks = [
  { to: "/about", label: "About" },
  { to: "/programs", label: "Programs" },
  { to: "/divisions", label: "Structure" },
  { to: "/news", label: "Documentation" },
  { to: "/contact", label: "Contact" },
];

function SocialIcon({ type }: { type: "instagram" | "youtube" | "tiktok" | "line" }) {
  const common = "size-5";
  switch (type) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
          <path d="M23 7.5a4 4 0 0 0-2.8-2.8C18.5 4 12 4 12 4s-6.5 0-8.2.7A4 4 0 0 0 1 7.5 41 41 0 0 0 1 12a41 41 0 0 0 .8 4.5 4 4 0 0 0 2.8 2.8C5.5 20 12 20 12 20s6.5 0 8.2-.7a4 4 0 0 0 2.8-2.8 41 41 0 0 0 .8-4.5 41 41 0 0 0-.8-4.5zM10 15V9l6 3-6 3z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
          <path d="M14 3c0 3 2.5 5.5 5.5 5.5V12c-2.3 0-4.3-.8-5.5-2v5.3a5.8 5.8 0 1 1-5.8-5.8c.4 0 .8 0 1.2.1V12a2.8 2.8 0 1 0 2.8 2.8V3h2.3z" />
        </svg>
      );
    case "line":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
          <path d="M12 3c-5 0-9 3.1-9 7 0 3.2 2.6 5.9 6.3 6.7-.2.6-.8 2.3-.9 2.7-.1.5.2.5.4.4.2 0 2.4-1.6 3.4-2.3.6.1 1.2.1 1.8.1 5 0 9-3.1 9-7s-4-7-9-7zM8.2 12.7h-.9V8.8h.9v3.9zm2.5 0H9.8V8.8h.9v3.9zm2.6 0h-1V8.8h1v3.9zm3.5-3h-1.2v3h-.9V8.8h2.1v.9z" />
        </svg>
      );
  }
}

export default function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container grid gap-6 py-10 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-md bg-gradient-to-br from-primary to-accent" />
            <div className="font-extrabold tracking-tight">BEM FILKOM</div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Be the voice and the change. Empowering student aspirations, academic excellence, and social impact.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-4">
          {footerLinks.map((l) => (
            <Link key={l.to} to={l.to} className="text-sm text-foreground/80 hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-3">
          <div className="text-sm font-semibold">Follow us</div>
          <div className="flex items-center gap-3 text-foreground/80">
            <a href="#" aria-label="Instagram" className="hover:text-foreground"><SocialIcon type="instagram" /></a>
            <a href="#" aria-label="YouTube" className="hover:text-foreground"><SocialIcon type="youtube" /></a>
            <a href="#" aria-label="TikTok" className="hover:text-foreground"><SocialIcon type="tiktok" /></a>
            <a href="#" aria-label="Line" className="hover:text-foreground"><SocialIcon type="line" /></a>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} BEM FILKOM Djuanda. All rights reserved.
      </div>
    </footer>
  );
}
