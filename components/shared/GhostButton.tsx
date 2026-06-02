import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface GhostButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  showArrow?: boolean;
  variant?: "light" | "dark";
  className?: string;
}

export default function GhostButton({
  children,
  href,
  onClick,
  type = "button",
  showArrow = true,
  variant = "light",
  className = "",
}: GhostButtonProps) {
  const variantClasses = {
    light:
      "border-primary-black/20 text-primary-black hover:bg-primary-black hover:text-panel-white",
    dark: "border-white/20 text-panel-white hover:bg-panel-white hover:text-primary-black",
  };

  const classes = `inline-flex items-center gap-2 border bg-transparent px-6 py-3 text-sm font-medium uppercase tracking-widest transition-colors ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {showArrow && <ArrowUpRight size={14} strokeWidth={2} />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {showArrow && <ArrowUpRight size={14} strokeWidth={2} />}
    </button>
  );
}
