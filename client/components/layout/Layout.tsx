import { PropsWithChildren, useEffect } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function Layout({ children }: PropsWithChildren) {
  useEffect(() => {
    const root = document.documentElement as HTMLElement;
    let raf = 0;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;

    const update = (x: number, y: number) => {
      mx = x;
      my = y;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          root.style.setProperty("--spotlight-x", `${mx}px`);
          root.style.setProperty("--spotlight-y", `${my}px`);
          raf = 0;
        });
      }
    };

    const onPointer = (e: PointerEvent) => update(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) update(t.clientX, t.clientY);
    };

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });

    // init position center
    root.style.setProperty("--spotlight-x", `${mx}px`);
    root.style.setProperty("--spotlight-y", `${my}px`);

    return () => {
      window.removeEventListener("pointermove", onPointer as any);
      window.removeEventListener("touchmove", onTouch as any);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
