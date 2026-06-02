interface CornerMarkProps {
  variant?: "light" | "dark";
  className?: string;
}

export default function CornerMark({ variant = "light", className = "" }: CornerMarkProps) {
  const borderColor = variant === "dark" ? "border-white/10" : "border-primary-black/10";
  const armSize = "w-5 h-5";
  // Match SectionPanel padding: px-6 py-10 → sm:px-10 sm:py-14 → lg:px-[60px] lg:py-[80px]
  const pos = {
    x: "left-3 sm:left-5 lg:left-8",
    y: "top-4 sm:top-6 lg:top-8",
    xEnd: "right-3 sm:right-5 lg:right-8",
    yEnd: "bottom-4 sm:bottom-6 lg:bottom-8",
  };

  return (
    <div className={`pointer-events-none absolute inset-0 z-0 ${className}`} aria-hidden="true">
      {/* Top-left */}
      <div className={`absolute ${pos.x} ${pos.y} ${armSize} border-l border-t ${borderColor}`} />
      {/* Top-right */}
      <div className={`absolute ${pos.xEnd} ${pos.y} ${armSize} border-r border-t ${borderColor}`} />
      {/* Bottom-left */}
      <div className={`absolute ${pos.x} ${pos.yEnd} ${armSize} border-b border-l ${borderColor}`} />
      {/* Bottom-right */}
      <div className={`absolute ${pos.xEnd} ${pos.yEnd} ${armSize} border-b border-r ${borderColor}`} />
    </div>
  );
}
