import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Reveal from "@/components/effects/Reveal";

function Anchor({ id, children }: React.PropsWithChildren<{ id: string }>) {
  return (
    <h2 id={id} className="scroll-mt-24 text-2xl md:text-3xl font-bold tracking-tight">
      {children}
    </h2>
  );
}

export default function News() {
  const nav = [
    { id: "overview", label: "Overview" },
    { id: "updates", label: "Updates" },
    { id: "releases", label: "Releases" },
    { id: "guidelines", label: "Guidelines" },
    { id: "faq", label: "FAQ" },
  ];

  return (
    <div className="py-10 md:py-16">
      <div className="container grid gap-8 md:grid-cols-[220px_1fr] lg:grid-cols-[260px_1fr]">
        <aside className="hidden md:block">
          <nav className="sticky top-24 space-y-1">
            {nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/10">
                {item.label}
              </a>
            ))}
          </nav>
        </aside>
        <article className="prose prose-slate dark:prose-invert max-w-none">
          <Reveal y={12}>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">News & Documentation</h1>
            <p className="mt-3 text-muted-foreground">Kumpulan pembaruan, rilis, dan pedoman terkait kegiatan BEM FILKOM dalam format dokumentasi yang mudah dibaca.</p>
          </Reveal>

          <section className="mt-10 space-y-4">
            <Anchor id="overview">Overview</Anchor>
            <p>Halaman ini merangkum semua informasi terbaru, panduan, dan pengumuman penting yang berkaitan dengan BEM FILKOM. Gunakan navigasi di sisi kiri untuk melompat ke bagian yang diinginkan.</p>
          </section>

          <section className="mt-10 space-y-4">
            <Anchor id="updates">Updates</Anchor>
            <ul className="list-disc pl-6">
              <li><strong>30 Sep 2025</strong> — Peluncuran halaman Programs dan Divisions.</li>
              <li><strong>29 Sep 2025</strong> — Penyempurnaan halaman About.</li>
              <li><strong>25 Sep 2025</strong> — Penambahan komponen UI baru dan animasi.</li>
            </ul>
          </section>

          <section className="mt-10 space-y-4">
            <Anchor id="releases">Releases</Anchor>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">v1.1.0</h3>
              <ul className="list-disc pl-6 text-sm text-muted-foreground">
                <li>Halaman Programs dengan kategori, featured, dan tabs.</li>
                <li>Halaman Divisions dengan Executive Board dan daftar divisi.</li>
                <li>Peningkatan performa dan perbaikan minor UI.</li>
              </ul>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h3 className="font-semibold">v1.0.0</h3>
              <ul className="list-disc pl-6 text-sm text-muted-foreground">
                <li>Rilis awal halaman About dan landing.</li>
                <li>Setup Tailwind, shadcn/ui, dan arsitektur routing.</li>
              </ul>
            </div>
          </section>

          <section className="mt-10 space-y-4">
            <Anchor id="guidelines">Guidelines</Anchor>
            <ol className="list-decimal pl-6">
              <li>Gunakan bahasa yang jelas dan ringkas pada setiap pengumuman.</li>
              <li>Sertakan tanggal, penanggung jawab, dan call to action.</li>
              <li>Gunakan format konsisten agar mudah dipindai.</li>
            </ol>
          </section>

          <section className="mt-10 space-y-4">
            <Anchor id="faq">FAQ</Anchor>
            <details className="rounded-md border p-4">
              <summary className="cursor-pointer font-medium">Bagaimana cara mengirim berita?</summary>
              <p className="mt-2 text-sm text-muted-foreground">Kirimkan draft berita ke email humas BEM FILKOM dengan format: judul, ringkasan, isi, media, dan kontak narahubung.</p>
            </details>
            <details className="rounded-md border p-4">
              <summary className="cursor-pointer font-medium">Siapa yang memverifikasi?</summary>
              <p className="mt-2 text-sm text-muted-foreground">Tim Humas bersama Sekretaris melakukan verifikasi dan penjadwalan publikasi.</p>
            </details>
          </section>

          <div className="mt-12 flex items-center gap-3">
            <Link to="/" className="text-accent underline-offset-4 hover:underline">Back to Home</Link>
            <span className="text-muted-foreground">·</span>
            <a href="#overview" className="text-accent underline-offset-4 hover:underline">Back to Top</a>
          </div>
        </article>
      </div>
    </div>
  );
}


