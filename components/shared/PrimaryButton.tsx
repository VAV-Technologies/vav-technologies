import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  showArrow?: boolean;
  className?: string;
  disabled?: boolean;
  variant?: "dark" | "light";
}

const variantClasses = {
  dark: "bg-primary-black text-panel-white hover:bg-dark-gray",
  light: "bg-panel-white text-primary-black hover:bg-off-white",
};

export default function PrimaryButton({
  children,
  href,
  onClick,
  type = "button",
  showArrow = true,
  className = "",
  disabled = false,
  variant = "dark",
}: PrimaryButtonProps) {
  const classes = `inline-flex items-center gap-2 px-6 py-3 text-sm font-medium uppercase tracking-widest transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
        {showArrow && <ArrowUpRight size={14} strokeWidth={2} />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} disabled={disabled}>
      {children}
      {showArrow && <ArrowUpRight size={14} strokeWidth={2} />}
    </button>
  );
}
