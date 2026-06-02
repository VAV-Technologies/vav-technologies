"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

function parseValue(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([^0-9]*)(\d+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  return { prefix: match[1], number: parseInt(match[2], 10), suffix: match[3] };
}

export default function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(value);
  const { prefix, number, suffix } = parseValue(value);

  useEffect(() => {
    if (!isInView || number === 0) return;

    const controls = animate(0, number, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplay(`${prefix}${Math.round(latest)}${suffix}`);
      },
    });

    return () => controls.stop();
  }, [isInView, number, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
