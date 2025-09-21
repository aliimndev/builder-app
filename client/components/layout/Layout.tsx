import { PropsWithChildren, useEffect } from "react";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import CursorGlow from "@/components/effects/CursorGlow";

export default function Layout({ children }: PropsWithChildren) {
  useEffect(() => {
    const root = document.documentElement as HTMLElement;

    let raf = 0;
    let tx = window.innerWidth / 2;
    let ty = window.innerHeight / 2;
    let cx = tx;
    let cy = ty;

    const loop = () => {
      // Smooth follow (lerp)
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      root.style.setProperty("--spotlight-x", `${cx}px`);
      root.style.setProperty("--spotlight-y", `${cy}px`);
      raf = requestAnimationFrame(loop);
    };

    const onPointer = (e: PointerEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) {
        tx = t.clientX;
        ty = t.clientY;
      }
    };

    root.style.setProperty("--spotlight-x", `${cx}px`);
    root.style.setProperty("--spotlight-y", `${cy}px`);

    window.addEventListener("pointermove", onPointer, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onPointer as any);
      window.removeEventListener("touchmove", onTouch as any);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
