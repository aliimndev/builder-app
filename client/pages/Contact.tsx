import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Reveal from "@/components/effects/Reveal";

function Section({ className, children }: React.PropsWithChildren<{ className?: string }>) {
  return <section className={cn("py-16 md:py-24", className)}>{children}</section>;
}

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("Please fill in name, email, and message.");
      return;
    }

    try {
      setSubmitting(true);
      setStatus(null);
      // Placeholder submit; replace with API endpoint if needed
      await new Promise((r) => setTimeout(r, 800));
      form.reset();
      setStatus("Your message has been sent. Thank you!");
    } catch (err) {
      setStatus("Failed to send. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div>
      <Section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute -top-32 left-1/2 size-[550px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,hsl(var(--accent)/0.25),transparent_60%)] blur-3xl" />
        </div>
        <div className="container text-center max-w-3xl">
          <Reveal y={10}>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-foreground/70 bg-background/60 backdrop-blur">
              <span className="size-2 rounded-full bg-primary" /> Contact BEM FILKOM
            </div>
          </Reveal>
          <Reveal y={18} delay={100}>
            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Let's Connect
            </h1>
          </Reveal>
          <Reveal y={18} delay={160}>
            <p className="mt-4 text-muted-foreground">
              Have questions, ideas, or feedback? Send us a message and we'll respond soon.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="container grid gap-8 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form and our team will get back to you.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="Subject" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." className="min-h-[140px]" required />
                </div>
                {status && <p className="text-sm text-muted-foreground">{status}</p>}
                <Button type="submit" disabled={submitting} className="bg-primary text-primary-foreground">
                  {submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach us through the following channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><span>📍</span><span>FILKOM, Universitas Brawijaya, Malang</span></div>
                <div className="flex items-center gap-2"><span>✉️</span><span>bemfilkom@example.com</span></div>
                <div className="flex items-center gap-2"><span>📞</span><span>+62 812-3456-7890</span></div>
                <div className="flex items-center gap-2"><span>🕘</span><span>Mon–Fri, 09:00–17:00 WIB</span></div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Location</CardTitle>
                <CardDescription>Map placeholder (embed your map provider here).</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video w-full rounded-lg border bg-card/50 grid place-items-center text-muted-foreground">
                  Map Embed Here
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  );
}


