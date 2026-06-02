interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return <hr className={`border-t border-divider-gray ${className}`} />;
}
