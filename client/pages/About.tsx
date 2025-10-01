import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
      <div className="container max-w-4xl text-center">
        <Reveal y={10} delay={50}>
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-foreground/70 bg-background/60 backdrop-blur">
            <span className="size-2 rounded-full bg-primary" /> About BEM FILKOM
          </div>
        </Reveal>
        <Reveal y={18} delay={120}>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            The Voice of Students, The Space for Aspirations
          </h1>
        </Reveal>
        <Reveal y={18} delay={200}>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            BEM FILKOM (Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer) is the student executive body 
            that serves as the bridge between students and the faculty administration, empowering student 
            voices and fostering academic growth across the Computer Science Faculty.
          </p>
        </Reveal>
        <Reveal y={18} delay={260}>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild className="shadow bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/divisions">Join Our Team</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function VisionMission() {
  return (
    <Section>
      <div className="container">
        <div className="text-center mb-12">
          <Reveal y={16}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Vision & Mission</h2>
          </Reveal>
          <Reveal y={16} delay={100}>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Our guiding principles that drive every initiative and decision we make.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
          <Reveal y={20} delay={150}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To become a progressive, innovative, and responsive student organization that serves as 
                  the primary platform for student aspirations, fostering academic excellence, leadership 
                  development, and social responsibility within the Computer Science Faculty community.
                </p>
              </CardContent>
            </Card>
          </Reveal>
          <Reveal y={20} delay={200}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="size-8 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-muted-foreground space-y-2 leading-relaxed">
                  <li>• Represent and advocate for student interests and welfare</li>
                  <li>• Facilitate academic and professional development programs</li>
                  <li>• Build strong relationships between students, faculty, and administration</li>
                  <li>• Promote innovation, creativity, and technological advancement</li>
                  <li>• Foster a culture of collaboration, integrity, and social responsibility</li>
                </ul>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

function History() {
  return (
    <Section className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--primary)/0.06),transparent_70%)]" />
      <div className="container">
        <div className="text-center mb-12">
          <Reveal y={16}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our History</h2>
          </Reveal>
          <Reveal y={16} delay={100}>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              A journey of growth, impact, and continuous improvement in serving the FILKOM community.
            </p>
          </Reveal>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <Reveal y={20} delay={150}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="size-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">2020</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Foundation & Establishment</h3>
                  <p className="text-muted-foreground mt-1">
                    BEM FILKOM was officially established as the student executive body, 
                    marking the beginning of organized student representation in the Computer Science Faculty.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal y={20} delay={200}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="size-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">2021</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Digital Transformation</h3>
                  <p className="text-muted-foreground mt-1">
                    Adapted to the pandemic era by implementing digital-first approaches, 
                    virtual events, and online student engagement platforms.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal y={20} delay={250}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="size-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">2022</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Expansion & Growth</h3>
                  <p className="text-muted-foreground mt-1">
                    Expanded programs and initiatives, established stronger partnerships 
                    with industry leaders, and launched comprehensive student development programs.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal y={20} delay={300}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="size-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">2023</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Innovation & Impact</h3>
                  <p className="text-muted-foreground mt-1">
                    Launched innovative tech initiatives, strengthened community outreach, 
                    and achieved significant milestones in student advocacy and welfare.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal y={20} delay={350}>
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="size-12 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-accent">2024</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">Future Forward</h3>
                  <p className="text-muted-foreground mt-1">
                    Continuing to evolve and adapt, focusing on sustainable growth, 
                    enhanced student experiences, and preparing for the challenges of tomorrow.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Leadership() {
  const leaders = [
    {
      name: "Ahmad Rizki",
      position: "President",
      division: "Executive Board",
      description: "Leading BEM FILKOM with vision and dedication, ensuring student voices are heard and represented effectively.",
    },
    {
      name: "Sarah Putri",
      position: "Vice President",
      division: "Executive Board", 
      description: "Supporting the president in strategic planning and overseeing daily operations across all divisions.",
    },
    {
      name: "Muhammad Fajar",
      position: "Secretary General",
      division: "Internal Affairs",
      description: "Managing organizational documentation, communication, and internal coordination between divisions.",
    },
    {
      name: "Dewi Sari",
      position: "Treasurer",
      division: "Finance & Administration",
      description: "Overseeing financial management, budgeting, and ensuring transparent financial practices.",
    },
  ];

  return (
    <Section>
      <div className="container">
        <div className="text-center mb-12">
          <Reveal y={16}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Leadership Team</h2>
          </Reveal>
          <Reveal y={16} delay={100}>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Meet the dedicated leaders who guide BEM FILKOM towards achieving our vision and mission.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader, index) => (
            <Reveal key={leader.name} y={20} delay={150 + index * 50}>
              <Card className="h-full">
                <CardHeader className="text-center">
                  <div className="size-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4">
                    <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <CardTitle className="text-lg">{leader.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{leader.position}</CardDescription>
                  <Badge variant="secondary" className="w-fit mx-auto">{leader.division}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-center">{leader.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Values() {
  const values = [
    {
      title: "Integrity",
      description: "We uphold the highest standards of honesty, transparency, and ethical conduct in all our actions and decisions.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4" />
          <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3" />
          <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3" />
          <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3" />
          <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3" />
        </svg>
      ),
    },
    {
      title: "Innovation",
      description: "We embrace creativity, technological advancement, and forward-thinking approaches to solve challenges.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork, mutual respect, and collective effort to achieve common goals.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do, continuously improving and setting new standards.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      title: "Service",
      description: "We are committed to serving the student community with dedication, empathy, and genuine care.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21C12 21 3 14 3 8a6 6 0 0 1 11-3 6 6 0 0 1 11 3c0 6-9 13-13 13z" />
        </svg>
      ),
    },
    {
      title: "Growth",
      description: "We foster personal and professional development, encouraging continuous learning and self-improvement.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 7l9-4 9 4-9 4-9-4z" />
          <path d="M21 10v6" />
          <path d="M3 10v6l9 4 9-4" />
        </svg>
      ),
    },
  ];

  return (
    <Section className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--accent)/0.08),transparent_70%)]" />
      <div className="container">
        <div className="text-center mb-12">
          <Reveal y={16}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Our Core Values</h2>
          </Reveal>
          <Reveal y={16} delay={100}>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              The fundamental principles that guide our actions and shape our organizational culture.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Reveal key={value.title} y={20} delay={150 + index * 50}>
              <Card className="h-full group hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex size-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 text-primary group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function CallToAction() {
  return (
    <Section className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--primary)/0.08),transparent_70%)]" />
      <div className="container text-center max-w-3xl">
        <Reveal y={16}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to Make a Difference?
          </h2>
        </Reveal>
        <Reveal y={16} delay={100}>
          <p className="mt-3 text-muted-foreground">
            Join BEM FILKOM and be part of a community that values your voice, 
            supports your growth, and creates meaningful impact together.
          </p>
        </Reveal>
        <Reveal y={18} delay={200}>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild className="shadow bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/divisions">Explore Divisions</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export default function About() {
  return (
    <div>
      <Hero />
      <VisionMission />
      <History />
      <Leadership />
      <Values />
      <CallToAction />
    </div>
  );
}
