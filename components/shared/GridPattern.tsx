interface GridPatternProps {
  variant?: "light" | "dark";
}

export default function GridPattern({ variant = "light" }: GridPatternProps) {
  const color = variant === "dark" ? "rgba(255,255,255,0.03)" : "rgba(22,22,22,0.04)";
  const patternId = `grid-${variant}`;

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <pattern id={patternId} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
}
