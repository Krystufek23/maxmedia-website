import { ReactNode } from "react";
import { Container } from "./Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "light" | "dark" | "gradient";
  containerSize?: "default" | "narrow" | "wide";
}

export function Section({
  children,
  className = "",
  id,
  background = "white",
  containerSize = "default",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    light: "bg-gray-100",
    dark: "bg-secondary text-white",
    gradient: "bg-gradient-to-br from-secondary via-secondary-light to-gray-800 text-white",
  };

  return (
    <section
      id={id}
      className={`section-padding ${backgrounds[background]} ${className}`}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
