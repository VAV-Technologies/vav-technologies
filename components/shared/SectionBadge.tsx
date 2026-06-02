interface SectionBadgeProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
}

export default function SectionBadge({ children, variant = "light", className = "" }: SectionBadgeProps) {
  const variantClasses = {
    light: "border-outline-subtle text-medium-gray",
    dark: "border-white/20 text-white/70",
  };

  return (
    <span
      className={`inline-block border px-2.5 py-[5px] text-sm font-medium uppercase tracking-widest ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
