import { Link } from "react-router-dom";

export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--primary)/0.08),transparent_70%)]" />
      <div className="container max-w-4xl text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">{title}</h1>
        <p className="mt-4 text-muted-foreground">
          This page is a placeholder. Tell me what content you want here and I will build it.
        </p>
        <div className="mt-8">
          <Link to="/" className="text-accent underline-offset-4 hover:underline">Back to Home</Link>
        </div>
      </div>
    </section>
  );
}
