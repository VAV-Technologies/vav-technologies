interface FirmLogoPlaceholderProps {
  name: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

function getMonogram(name: string): string {
  const words = name.split(/\s+/).filter(Boolean);
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  return name.slice(0, 2).toUpperCase();
}

const sizeClasses = {
  sm: "h-11 w-11 text-sm",
  md: "h-16 w-16 text-xl",
  lg: "h-20 w-20 text-2xl",
};

export default function FirmLogoPlaceholder({ name, size = "md", className = "" }: FirmLogoPlaceholderProps) {
  return (
    <div
      className={`flex flex-shrink-0 items-center justify-center border border-outline-light bg-page-bg font-semibold ${sizeClasses[size]} ${className}`}
    >
      {getMonogram(name)}
    </div>
  );
}
