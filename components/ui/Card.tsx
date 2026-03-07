import { ReactNode, MouseEvent } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseEnter?: (e: MouseEvent<HTMLDivElement>) => void;
}

export function Card({
  children,
  className = "",
  hover = true,
  padding = "md",
  onClick,
  onMouseEnter,
}: CardProps) {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const hoverClasses = hover
    ? "hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
    : "";

  return (
    <div
      className={`bg-white rounded-2xl shadow-card ${paddingClasses[padding]} ${hoverClasses} ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </div>
  );
}
