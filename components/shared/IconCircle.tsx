import { type LucideIcon } from "lucide-react";

interface IconCircleProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
}

export default function IconCircle({ icon: Icon, size = 48, className = "" }: IconCircleProps) {
  return (
    <div
      className={`flex flex-shrink-0 items-center justify-center rounded-full bg-icon-circle-gray ${className}`}
      style={{ width: size, height: size }}
    >
      <Icon size={size * 0.42} className="text-primary-black" strokeWidth={1.5} />
    </div>
  );
}
