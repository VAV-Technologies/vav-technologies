interface ContentViewportProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentViewport({ children, className = "" }: ContentViewportProps) {
  return (
    <div className={`mx-auto w-full max-w-[1336px] px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
