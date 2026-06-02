import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-gray">
      <Link href="/" className="transition-colors hover:text-primary-black">Home</Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight size={12} />
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-primary-black">
              {item.label}
            </Link>
          ) : (
            <span className="text-primary-black">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
