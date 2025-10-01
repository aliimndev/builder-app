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
            <span className="size-2 rounded-full bg-primary" /> Organizational Structure
          </div>
        </Reveal>
        <Reveal y={18} delay={120}>
          <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Meet Our Team
          </h1>
        </Reveal>
        <Reveal y={18} delay={200}>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover the dedicated leaders and passionate members who make BEM FILKOM a driving force 
            for student advocacy and community development. Each division plays a crucial role in 
            achieving our collective vision.
          </p>
        </Reveal>
        <Reveal y={18} delay={260}>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild className="shadow bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Join Our Team</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/programs">View Programs</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function ExecutiveBoard() {
  const executives = [
    {
      name: "Ahmad Rizki Pratama",
      position: "Ketua Umum",
      role: "President",
      description: "Leading BEM FILKOM with vision and dedication, ensuring student voices are heard and represented effectively across all initiatives.",
      responsibilities: [
        "Strategic planning and decision making",
        "Representing students to faculty administration",
        "Overseeing all organizational activities",
        "Building partnerships and collaborations"
      ],
      image: "👨‍💼",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "Sarah Putri Maharani",
      position: "Wakil Ketua",
      role: "Vice President",
      description: "Supporting the president in strategic planning and overseeing daily operations across all divisions with exceptional leadership.",
      responsibilities: [
        "Supporting presidential duties",
        "Coordinating inter-division activities",
        "Managing organizational resources",
        "Leading special projects and initiatives"
      ],
      image: "👩‍💼",
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      name: "Muhammad Fajar Nugroho",
      position: "Sekretaris",
      role: "Secretary",
      description: "Managing organizational documentation, communication, and internal coordination between divisions with meticulous attention to detail.",
      responsibilities: [
        "Documentation and record keeping",
        "Internal communication management",
        "Meeting coordination and minutes",
        "Administrative support for all divisions"
      ],
      image: "📝",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      name: "Dewi Sari Wulandari",
      position: "Bendahara",
      role: "Treasurer",
      description: "Overseeing financial management, budgeting, and ensuring transparent financial practices across all organizational activities.",
      responsibilities: [
        "Financial planning and budgeting",
        "Expense tracking and reporting",
        "Fundraising and sponsorship",
        "Financial transparency and accountability"
      ],
      image: "💰",
      color: "from-orange-500/20 to-red-500/20",
    },
  ];

  return (
    <Section>
      <div className="container">
        <div className="text-center mb-12">
          <Reveal y={16}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Executive Board</h2>
          </Reveal>
          <Reveal y={16} delay={100}>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Meet the executive leadership team that guides BEM FILKOM towards achieving our vision and mission.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {executives.map((executive, index) => (
            <Reveal key={executive.name} y={20} delay={150 + index * 50}>
              <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className={cn("flex size-20 mx-auto rounded-full bg-gradient-to-br", executive.color, "items-center justify-center mb-4 text-3xl group-hover:scale-110 transition-transform")}>
                    {executive.image}
                  </div>
                  <CardTitle className="text-lg leading-tight">{executive.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{executive.position}</CardDescription>
                  <Badge variant="secondary" className="w-fit mx-auto text-xs">
                    {executive.role}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {executive.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-foreground">Key Responsibilities:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {executive.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
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

function DivisionsSection() {
  const divisions = [
    {
      name: "Divisi Kremas",
      fullName: "Divisi Kreativitas dan Seni",
      description: "Fostering creativity and artistic expression through cultural events, art exhibitions, and performance showcases.",
      head: "Rizki Aditya",
      members: 15,
      responsibilities: [
        "Organizing cultural festivals and art exhibitions",
        "Managing creative workshops and talent shows",
        "Promoting artistic expression and cultural diversity",
        "Collaborating with local artists and cultural organizations"
      ],
      programs: [
        "Cultural Arts Festival",
        "Talent Show Competition",
        "Art Exhibition",
        "Creative Writing Workshop"
      ],
      image: "🎨",
      color: "from-indigo-500/20 to-purple-500/20",
    },
    {
      name: "Divisi Netkomas",
      fullName: "Divisi Networking dan Komunikasi",
      description: "Building strong relationships and effective communication channels between students, faculty, and external partners.",
      head: "Siti Nurhaliza",
      members: 12,
      responsibilities: [
        "Managing external partnerships and collaborations",
        "Organizing networking events and meetups",
        "Facilitating communication between stakeholders",
        "Building alumni and industry connections"
      ],
      programs: [
        "Industry Networking Event",
        "Alumni Meetup",
        "Professional Development Seminar",
        "Partnership Building Workshop"
      ],
      image: "🤝",
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "Divisi Peninfo",
      fullName: "Divisi Penelitian dan Informasi",
      description: "Conducting research, gathering information, and providing data-driven insights to support organizational decision-making.",
      head: "Budi Santoso",
      members: 18,
      responsibilities: [
        "Conducting student satisfaction surveys",
        "Researching best practices and trends",
        "Data analysis and reporting",
        "Information management and dissemination"
      ],
      programs: [
        "Student Research Competition",
        "Data Analysis Workshop",
        "Information Literacy Seminar",
        "Research Methodology Training"
      ],
      image: "🔍",
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      name: "Divisi Himpunan",
      fullName: "Divisi Himpunan Mahasiswa",
      description: "Managing student organization activities, member development, and fostering a strong sense of community among students.",
      head: "Maya Sari",
      members: 20,
      responsibilities: [
        "Student organization management",
        "Member recruitment and development",
        "Community building activities",
        "Student welfare and support services"
      ],
      programs: [
        "New Member Orientation",
        "Leadership Development Program",
        "Community Service Projects",
        "Student Welfare Initiatives"
      ],
      image: "👥",
      color: "from-orange-500/20 to-red-500/20",
    },
  ];

  return (
    <Section className="relative">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--primary)/0.06),transparent_70%)]" />
      <div className="container">
        <div className="text-center mb-12">
          <Reveal y={16}>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Divisions</h2>
          </Reveal>
          <Reveal y={16} delay={100}>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Each division specializes in specific areas, working together to create comprehensive programs and initiatives.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {divisions.map((division, index) => (
            <Reveal key={division.name} y={20} delay={150 + index * 100}>
              <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={cn("flex size-16 items-center justify-center rounded-xl bg-gradient-to-br", division.color, "text-2xl group-hover:scale-110 transition-transform")}>
                      {division.image}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{division.name}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {division.fullName}
                      </CardDescription>
                      <div className="flex gap-2 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {division.members} Members
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Head: {division.head}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {division.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Responsibilities:</h4>
                      <ul className="text-xs text-muted-foreground space-y-1">
                        {division.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Main Programs:</h4>
                      <div className="flex flex-wrap gap-1">
                        {division.programs.map((program, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {program}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full" variant="outline" size="sm">
                    Join This Division
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

function DivisionTabs() {
  const kremasMembers = [
    { name: "Rizki Aditya", role: "Head of Division", year: "2022" },
    { name: "Sari Dewi", role: "Event Coordinator", year: "2023" },
    { name: "Ahmad Fauzi", role: "Creative Director", year: "2023" },
    { name: "Maya Putri", role: "Art Curator", year: "2024" },
  ];

  const netkomasMembers = [
    { name: "Siti Nurhaliza", role: "Head of Division", year: "2022" },
    { name: "Budi Pratama", role: "Partnership Manager", year: "2023" },
    { name: "Dewi Sari", role: "Communication Specialist", year: "2023" },
    { name: "Rizki Nugroho", role: "Event Coordinator", year: "2024" },
  ];

  const peninfoMembers = [
    { name: "Budi Santoso", role: "Head of Division", year: "2022" },
    { name: "Sari Indah", role: "Research Coordinator", year: "2023" },
    { name: "Ahmad Rizki", role: "Data Analyst", year: "2023" },
    { name: "Maya Sari", role: "Information Officer", year: "2024" },
  ];

  const himpunanMembers = [
    { name: "Maya Sari", role: "Head of Division", year: "2022" },
    { name: "Fajar Nugroho", role: "Member Development", year: "2023" },
    { name: "Putri Maharani", role: "Community Manager", year: "2023" },
    { name: "Rizki Pratama", role: "Welfare Coordinator", year: "2024" },
  ];

  const MemberList = ({ members }: { members: any[] }) => (
    <div className="space-y-3">
      {members.map((member, index) => (
        <Reveal key={member.name} y={10} delay={index * 50}>
          <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{member.name}</h3>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {member.year}
                </Badge>
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
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Division Members</h2>
          </Reveal>
          <Reveal y={16} delay={100}>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate individuals who lead and drive each division forward with dedication and expertise.
            </p>
          </Reveal>
        </div>
        <Tabs defaultValue="kremas" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="kremas">Kremas</TabsTrigger>
            <TabsTrigger value="netkomas">Netkomas</TabsTrigger>
            <TabsTrigger value="peninfo">Peninfo</TabsTrigger>
            <TabsTrigger value="himpunan">Himpunan</TabsTrigger>
          </TabsList>
          <TabsContent value="kremas" className="mt-8">
            <MemberList members={kremasMembers} />
          </TabsContent>
          <TabsContent value="netkomas" className="mt-8">
            <MemberList members={netkomasMembers} />
          </TabsContent>
          <TabsContent value="peninfo" className="mt-8">
            <MemberList members={peninfoMembers} />
          </TabsContent>
          <TabsContent value="himpunan" className="mt-8">
            <MemberList members={himpunanMembers} />
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
            Ready to Join Our Team?
          </h2>
        </Reveal>
        <Reveal y={16} delay={100}>
          <p className="mt-3 text-muted-foreground">
            Become part of a dynamic team that's making a real difference in the student community. 
            Choose the division that matches your passion and skills.
          </p>
        </Reveal>
        <Reveal y={18} delay={200}>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild className="shadow bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Apply Now</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/programs">View Programs</Link>
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

export default function Divisions() {
  return (
    <div>
      <Hero />
      <ExecutiveBoard />
      <DivisionsSection />
      <DivisionTabs />
      <CallToAction />
    </div>
  );
}
