interface SectionPanelProps {
  children: React.ReactNode;
  variant?: "white" | "muted" | "dark";
  className?: string;
  noPadding?: boolean;
}

export default function SectionPanel({
  children,
  variant = "white",
  className = "",
  noPadding = false,
}: SectionPanelProps) {
  const paddingClasses = noPadding ? "" : "px-6 py-10 sm:px-10 sm:py-14 lg:px-[60px] lg:py-[80px]";

  const variantClasses = {
    white: "bg-panel-white border border-outline-light",
    muted: "bg-off-white border border-outline-light",
    dark: "bg-primary-black text-panel-white border border-outline-dark-bg",
  };

  return (
    <section className={`${paddingClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </section>
  );
}
