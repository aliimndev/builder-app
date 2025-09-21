import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import Reveal from "@/components/effects/Reveal";

function Section({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <section className={cn("py-16 md:py-24", className)}>{children}</section>;
}

function Hero() {
  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="absolute -top-32 left-1/2 size-[550px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--accent)/0.25),transparent_60%)] blur-3xl" />
      </div>
      <div className="container grid items-center gap-10 lg:grid-cols-2">
        <div>
          <Reveal y={10} delay={50}>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-foreground/70 bg-background/60 backdrop-blur">
              <span className="size-2 rounded-full bg-primary" /> Student Executive Body
            </div>
          </Reveal>
          <Reveal y={18} delay={120}>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              The Voice of Students, The Space for Aspirations
            </h1>
          </Reveal>
          <Reveal y={18} delay={200}>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              BEM FILKOM is the student executive body empowering student voices, fostering academic growth,
              and driving impactful social movements across campus and beyond.
            </p>
          </Reveal>
          <Reveal y={18} delay={260}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="shadow bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/about">Learn More About BEM</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/divisions">Get Involved</Link>
              </Button>
            </div>
          </Reveal>
        </div>
        <div className="relative">
          <div className="aspect-square w-full max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-transparent p-[2px]">
            <div className="h-full w-full rounded-2xl bg-background p-8 grid place-items-center">
              <svg viewBox="0 0 200 200" className="w-full h-full max-h-72">
                <defs>
                  <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" />
                  </linearGradient>
                </defs>
                <rect x="20" y="20" width="160" height="160" rx="20" fill="url(#grad)" />
                <path d="M50 130c24-8 32-40 40-40s16 32 40 40" stroke="white" strokeWidth="6" strokeLinecap="round" fill="none" />
                <circle cx="100" cy="70" r="8" fill="white" />
                <text x="100" y="170" textAnchor="middle" fontSize="12" fill="white" fontWeight="700">BEM FILKOM</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Programs() {
  const items = [
    {
      title: "Student Advocacy",
      desc: "Representing student aspirations and welfare through policy engagement and active listening.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V7l7-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
    },
    {
      title: "Academic Development",
      desc: "Seminars, workshops, and trainings that sharpen knowledge and professional skills.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 7l9-4 9 4-9 4-9-4z" />
          <path d="M21 10v6" />
          <path d="M3 10v6l9 4 9-4" />
        </svg>
      ),
    },
    {
      title: "Talent & Interests",
      desc: "Sports, arts, and creative competitions to celebrate diverse talents.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 3v12a4 4 0 1 1-4-4" />
          <circle cx="17" cy="7" r="3" />
        </svg>
      ),
    },
    {
      title: "Community Service",
      desc: "Volunteer initiatives and social impact programs for the broader community.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21C12 21 3 14 3 8a6 6 0 0 1 11-3 6 6 0 0 1 11 3c0 6-9 13-13 13z" />
        </svg>
      ),
    },
  ];

  return (
    <Section>
      <div className="container">
        <div className="text-center">
          <Reveal y={16}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Main Programs</h2>
          </Reveal>
          <Reveal y={16} delay={100}>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Initiatives focused on advocacy, learning, creativity, and service to empower every student.
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="group rounded-xl border bg-card p-6 shadow-sm transition hover:shadow-md">
              <div className="flex size-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                {it.icon}
              </div>
              <h3 className="mt-4 font-semibold text-lg">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--primary)/0.06),transparent_70%)]" />
      <div className="container max-w-4xl text-center">
        <div className="inline-block rounded-full border px-3 py-1 text-xs text-foreground/70">Testimonials</div>
        <blockquote className="mt-6 text-2xl md:text-3xl font-semibold leading-snug">
          “BEM FILKOM gave me the confidence and valuable organizational experience I needed.”
        </blockquote>
        <p className="mt-3 text-sm text-muted-foreground">— Student of FILKOM</p>
      </div>
    </Section>
  );
}

function Divisions() {
  const divisions = [
    {
      name: "Internal & Cadre Development",
      desc: "Growth through leadership cultivation, team building, and organizational values.",
    },
    {
      name: "External & Institutional Relations",
      desc: "Collaboration with institutions and partners to broaden impact and networks.",
    },
    { name: "Advocacy & Student Welfare", desc: "Ensuring rights, facilities, and welfare of students are prioritized." },
    { name: "Public Relations & Documentation", desc: "Brand voice, media relations, content, and archival documentation." },
    { name: "IT & Creative Media", desc: "Technology, digital products, and creative design to support initiatives." },
  ];

  return (
    <Section>
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Divisions You Can Join</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Choose the division that matches your passion and strengths. Grow together, make an impact.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d) => (
            <div key={d.name} className="flex flex-col rounded-xl border bg-card p-6 shadow-sm">
              <div className="font-semibold text-lg">{d.name}</div>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{d.desc}</p>
              <div className="mt-4">
                <Button asChild className="w-full">
                  <Link to="/contact">Register</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--accent)/0.08),transparent_70%)]" />
      <div className="container text-center max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Be part of the FILKOM student movement to create change together!
        </h2>
        <p className="mt-3 text-muted-foreground">
          Step forward, lead with purpose, and leave your mark on campus and community.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Button asChild className="shadow bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/divisions">Join Now</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/contact">Fill Out Registration Form</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default function Index() {
  return (
    <div>
      <Hero />
      <Programs />
      <Testimonials />
      <Divisions />
      <FinalCTA />
    </div>
  );
}
