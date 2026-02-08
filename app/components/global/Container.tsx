import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "max-w-3xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-7xl",
};

/**
 * Reusable container component with consistent max-width across pages
 * @param size - Container size variant (default: "xl")
 * @param className - Additional Tailwind classes
 */
export default function Container({
  children,
  className = "",
  size = "xl",
}: ContainerProps) {
  return (
    <div className={`${sizeClasses[size]} mx-auto px-6 ${className}`}>
      {children}
    </div>
  );
}
