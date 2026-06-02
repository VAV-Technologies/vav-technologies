interface LabeledDividerProps {
  label: string;
  className?: string;
}

export default function LabeledDivider({ label, className = "" }: LabeledDividerProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-1 border-t border-divider-gray" />
      <span className="text-xs uppercase tracking-widest text-muted-gray">{label}</span>
      <div className="flex-1 border-t border-divider-gray" />
    </div>
  );
}
