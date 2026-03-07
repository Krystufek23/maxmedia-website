import { ReactNode } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  children,
  align = "center",
  light = false,
}: SectionTitleProps) {
  const alignClasses = align === "center" ? "text-center" : "text-left";
  const titleColor = light ? "text-white" : "text-gray-900";
  const subtitleColor = light ? "text-gray-300" : "text-gray-600";

  return (
    <div className={`mb-12 md:mb-16 ${alignClasses}`}>
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg md:text-xl max-w-3xl ${
            align === "center" ? "mx-auto" : ""
          } ${subtitleColor}`}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
}
