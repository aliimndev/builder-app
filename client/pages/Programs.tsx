import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
            <span className="size-2 rounded-full bg-primary" /> Programs & Initiatives
          </div>
        </Reveal>
        <Reveal y={18} delay={120}>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Empowering Students Through Action
          </h1>
        </Reveal>
        <Reveal y={18} delay={200}>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our comprehensive range of programs designed to enhance your academic journey, 
            develop leadership skills, and create meaningful impact in the community. From advocacy 
            to innovation, we have something for every student.
          </p>
        </Reveal>
        <Reveal y={18} delay={260}>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild className="shadow bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Register Now</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function ProgramCategories() {
  const categories = [
    {
      title: "Academic Development",
      description: "Enhance your learning experience with workshops, seminars, and academic support programs.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 7l9-4 9 4-9 4-9-4z" />
          <path d="M21 10v6" />
          <path d="M3 10v6l9 4 9-4" />
        </svg>
      ),
      color: "from-blue-500/20 to-cyan-500/20",
      programs: 8,
    },
    {
      title: "Leadership & Skills",
      description: "Build essential leadership qualities and professional skills for future success.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
      color: "from-purple-500/20 to-pink-500/20",
      programs: 6,
    },
    {
      title: "Technology & Innovation",
      description: "Explore cutting-edge technology, coding competitions, and innovation challenges.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-green-500/20 to-emerald-500/20",
      programs: 12,
    },
    {
      title: "Community Service",
      description: "Make a positive impact through volunteer work and social responsibility initiatives.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 21C12 21 3 14 3 8a6 6 0 0 1 11-3 6 6 0 0 1 11 3c0 6-9 13-13 13z" />
        </svg>
      ),
      color: "from-orange-500/20 to-red-500/20",
      programs: 10,
    },
    {
      title: "Arts & Culture",
      description: "Express creativity through cultural events, art exhibitions, and performance showcases.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 3v12a4 4 0 1 1-4-4" />
          <circle cx="17" cy="7" r="3" />
        </svg>
      ),
      color: "from-indigo-500/20 to-purple-500/20",
      programs: 7,
    },
    {
      title: "Sports & Wellness",
      description: "Stay active and healthy with sports competitions, fitness programs, and wellness activities.",
      icon: (
        <svg viewBox="0 0 24 24" className="size-8" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6.5 6.5h11v11h-11z" />
          <path d="M6.5 6.5L12 12l5.5-5.5" />
          <path d="M12 12l5.5 5.5" />
          <path d="M12 12L6.5 17.5" />
        </svg>
      ),
      color: "from-teal-500/20 to-blue-500/20",
      programs: 9,
    },
  ];

  return (
    <Section>
      <div className="container">
        <div className="text-center mb-12">
          <Reveal y={16}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Program Categories</h2>
          </Reveal>
          <Reveal y={16} delay={100}>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of programs designed to support every aspect of student development.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <Reveal key={category.title} y={20} delay={150 + index * 50}>
              <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className={cn("flex size-16 items-center justify-center rounded-xl bg-gradient-to-br", category.color, "text-primary mb-4 group-hover:scale-110 transition-transform")}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      {category.programs} Programs
                    </Badge>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Explore →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function FeaturedPrograms() {
  const programs = [
    {
      title: "Tech Innovation Challenge",
      category: "Technology & Innovation",
      description: "Annual competition for students to showcase innovative tech solutions addressing real-world problems.",
      date: "March 15-30, 2024",
      participants: "150+ Students",
      status: "Ongoing",
      image: "🚀",
    },
    {
      title: "Leadership Development Workshop",
      category: "Leadership & Skills",
      description: "Intensive 3-day workshop focusing on communication, team management, and strategic thinking.",
      date: "April 5-7, 2024",
      participants: "50 Students",
      status: "Upcoming",
      image: "👥",
    },
    {
      title: "Community Coding Bootcamp",
      category: "Community Service",
      description: "Free coding bootcamp for underprivileged youth, taught by FILKOM students and alumni.",
      date: "May 10-24, 2024",
      participants: "100+ Youth",
      status: "Registration Open",
      image: "💻",
    },
    {
      title: "Academic Excellence Seminar",
      category: "Academic Development",
      description: "Expert-led sessions on study techniques, research methodology, and academic writing.",
      date: "February 20, 2024",
      participants: "200+ Students",
      status: "Completed",
      image: "📚",
    },
    {
      title: "Cultural Arts Festival",
      category: "Arts & Culture",
      description: "Annual celebration of diverse cultures through performances, exhibitions, and interactive workshops.",
      date: "June 15-17, 2024",
      participants: "300+ Attendees",
      status: "Planning",
      image: "🎨",
    },
    {
      title: "Sports Championship",
      category: "Sports & Wellness",
      description: "Inter-department sports competition featuring football, basketball, badminton, and more.",
      date: "July 1-15, 2024",
      participants: "500+ Athletes",
      status: "Registration Open",
      image: "⚽",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ongoing": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Upcoming": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Registration Open": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      case "Completed": return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      case "Planning": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  return (
    <Section className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--primary)/0.06),transparent_70%)]" />
      <div className="container">
        <div className="text-center mb-12">
          <Reveal y={16}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Featured Programs</h2>
          </Reveal>
          <Reveal y={16} delay={100}>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular and impactful programs that are making a difference in the community.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <Reveal key={program.title} y={20} delay={150 + index * 50}>
              <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{program.image}</div>
                    <Badge className={cn("text-xs", getStatusColor(program.status))}>
                      {program.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg leading-tight">{program.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {program.category}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {program.description}
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="size-4 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      <span className="text-muted-foreground">{program.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="size-4 text-muted-foreground" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      <span className="text-muted-foreground">{program.participants}</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline" size="sm">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function ProgramTabs() {
  const academicPrograms = [
    {
      title: "Research Methodology Workshop",
      description: "Learn proper research techniques and academic writing skills.",
      duration: "2 Days",
      level: "Beginner",
    },
    {
      title: "Thesis Writing Seminar",
      description: "Comprehensive guide to writing your final thesis project.",
      duration: "1 Day",
      level: "Advanced",
    },
    {
      title: "Academic Presentation Skills",
      description: "Master the art of presenting your research effectively.",
      duration: "3 Hours",
      level: "Intermediate",
    },
  ];

  const techPrograms = [
    {
      title: "Web Development Bootcamp",
      description: "Full-stack web development using modern technologies.",
      duration: "6 Weeks",
      level: "Beginner",
    },
    {
      title: "AI & Machine Learning Workshop",
      description: "Introduction to artificial intelligence and ML concepts.",
      duration: "4 Days",
      level: "Intermediate",
    },
    {
      title: "Cybersecurity Fundamentals",
      description: "Learn essential cybersecurity practices and tools.",
      duration: "3 Days",
      level: "Beginner",
    },
  ];

  const communityPrograms = [
    {
      title: "Digital Literacy for Seniors",
      description: "Teaching technology skills to elderly community members.",
      duration: "8 Weeks",
      level: "Volunteer",
    },
    {
      title: "School Computer Donation",
      description: "Collecting and refurbishing computers for underprivileged schools.",
      duration: "Ongoing",
      level: "Volunteer",
    },
    {
      title: "Tech Mentorship Program",
      description: "Pairing students with industry professionals for guidance.",
      duration: "6 Months",
      level: "Mentor/Mentee",
    },
  ];

  const ProgramList = ({ programs }: { programs: any[] }) => (
    <div className="space-y-4">
      {programs.map((program, index) => (
        <Reveal key={program.title} y={10} delay={index * 50}>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{program.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{program.description}</p>
                  <div className="flex gap-2 mt-3">
                    <Badge variant="outline" className="text-xs">
                      {program.duration}
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      {program.level}
                    </Badge>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  Register
                </Button>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      ))}
    </div>
  );

  return (
    <Section>
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <Reveal y={16}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Browse All Programs</h2>
          </Reveal>
          <Reveal y={16} delay={100}>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Explore our complete catalog of programs organized by category. Find the perfect program for your interests and goals.
            </p>
          </Reveal>
        </div>
        <Tabs defaultValue="academic" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="technology">Technology</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
          </TabsList>
          <TabsContent value="academic" className="mt-8">
            <ProgramList programs={academicPrograms} />
          </TabsContent>
          <TabsContent value="technology" className="mt-8">
            <ProgramList programs={techPrograms} />
          </TabsContent>
          <TabsContent value="community" className="mt-8">
            <ProgramList programs={communityPrograms} />
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  );
}

function CallToAction() {
  return (
    <Section className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--accent)/0.08),transparent_70%)]" />
      <div className="container text-center max-w-3xl">
        <Reveal y={16}>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Ready to Get Involved?
          </h2>
        </Reveal>
        <Reveal y={16} delay={100}>
          <p className="mt-3 text-muted-foreground">
            Join thousands of students who have benefited from our programs. 
            Take the first step towards personal and professional growth today.
          </p>
        </Reveal>
        <Reveal y={18} delay={200}>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild className="shadow bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Register for Programs</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/divisions">Join Our Team</Link>
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

export default function Programs() {
  return (
    <div>
      <Hero />
      <ProgramCategories />
      <FeaturedPrograms />
      <ProgramTabs />
      <CallToAction />
    </div>
  );
}
