import Image from "next/image";

interface GrayscaleImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  background?: boolean;
}

export default function GrayscaleImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = "",
  sizes,
  overlay = false,
  overlayOpacity = 0.4,
  background = false,
}: GrayscaleImageProps) {
  const resolvedSizes = sizes ?? (fill ? "100vw" : undefined);

  if (background) {
    return (
      <div className={`overflow-hidden ${className}`} aria-hidden="true">
        <Image
          src={src}
          alt=""
          fill
          priority={priority}
          className="object-cover grayscale"
          sizes={resolvedSizes}
        />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        className="border border-outline-light object-cover grayscale"
        sizes={resolvedSizes}
      />
      {overlay && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
