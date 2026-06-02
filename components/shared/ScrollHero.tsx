"use client";

import { useRef, useEffect, useLayoutEffect, useCallback } from "react";

const NAV_HEIGHT = 73;
const SCROLL_RANGE_FACTOR = 0.5;
const MAX_CONTENT_WIDTH = 1336;

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function getResponsivePad(vw: number): number {
  if (vw >= 1024) return 32;
  if (vw >= 640) return 24;
  return 16;
}

interface ScrollHeroProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollHero({ children, className = "" }: ScrollHeroProps) {
  const spacerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const rafId = useRef(0);
  const boxedHRef = useRef(0);

  const measureBoxedH = useCallback(() => {
    const section = sectionRef.current;
    const wrapper = wrapperRef.current;
    if (!section || !wrapper) return;

    // Measure at final-state width for accurate text reflow
    const prevMaxW = wrapper.style.maxWidth;
    const prevPad = wrapper.style.paddingInline;
    const prevH = section.style.height;
    const prevMinH = section.style.minHeight;
    wrapper.style.maxWidth = `${MAX_CONTENT_WIDTH}px`;
    wrapper.style.paddingInline = `${getResponsivePad(window.innerWidth)}px`;
    section.style.height = "auto";
    section.style.minHeight = "";

    boxedHRef.current = Math.max(200, section.offsetHeight);

    section.style.height = prevH;
    section.style.minHeight = prevMinH;
    wrapper.style.maxWidth = prevMaxW;
    wrapper.style.paddingInline = prevPad;
  }, []);

  const update = useCallback(() => {
    const spacer = spacerRef.current;
    const wrapper = wrapperRef.current;
    const section = sectionRef.current;
    if (!spacer || !wrapper || !section) return;

    const vh = window.innerHeight;
    const vw = window.innerWidth;
    const scrollRange = vh * SCROLL_RANGE_FACTOR;
    const p = Math.min(1, Math.max(0, window.scrollY / scrollRange));

    const fullH = vh - NAV_HEIGHT;
    const boxedH = Math.min(boxedHRef.current || fullH * 0.6, fullH);

    // Vertical: hero height shrinks, top offset keeps center stationary
    const sectionH = lerp(fullH, boxedH, p);
    const topOffset = lerp(0, (fullH - boxedH) / 2, p);

    // Horizontal: max-width + auto margin + padding (mirrors ContentViewport)
    const maxW = lerp(vw, MAX_CONTENT_WIDTH, p);
    const sidePad = lerp(0, getResponsivePad(vw), p);

    // Spacer — sized so sticky releases at exactly p=1
    spacer.style.height = `${scrollRange + (fullH + boxedH) / 2}px`;

    // Wrapper — sticky, animated top + width constraint + side padding
    wrapper.style.top = `${NAV_HEIGHT + topOffset}px`;
    wrapper.style.maxWidth = `${maxW}px`;
    wrapper.style.paddingInline = `${sidePad}px`;

    // Section — animated height + border
    section.style.height = `${sectionH}px`;
    section.style.borderColor = `rgba(255,255,255,${lerp(0, 0.15, p)})`;

    // Performance hints
    const animating = p > 0 && p < 1;
    wrapper.style.willChange = animating ? "top, max-width, padding" : "";
    section.style.willChange = animating ? "height, border-color" : "";
  }, []);

  useIsomorphicLayoutEffect(() => {
    measureBoxedH();
    update();

    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(update);
    };
    const onResize = () => {
      measureBoxedH();
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [update, measureBoxedH]);

  return (
    <div
      ref={spacerRef}
      style={{ height: "calc(150vh - 73px)", marginTop: "-16px" }}
    >
      <div
        ref={wrapperRef}
        style={{
          position: "sticky",
          top: "73px",
          marginInline: "auto",
          paddingInline: "0px",
        }}
      >
        <section
          ref={sectionRef}
          className={`flex flex-col justify-center border bg-primary-black px-6 py-10 text-panel-white sm:px-10 sm:py-14 lg:px-[60px] lg:py-[80px] ${className}`}
          style={{
            height: "calc(100vh - 73px)",
            borderColor: "transparent",
          }}
        >
          {children}
        </section>
      </div>
    </div>
  );
}
