"use client";

import type { ElementType, HTMLAttributes, ReactNode, RefObject } from "react";

import { useReveal } from "@/hooks/useReveal";

type RevealSectionProps<T extends ElementType> = {
  as?: T;
  threshold?: number;
  once?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<HTMLAttributes<HTMLElement>, "children" | "className">;

export function RevealSection<T extends ElementType = "section">({
  as,
  threshold,
  once,
  className = "",
  children,
  ...rest
}: RevealSectionProps<T>) {
  const Component = (as ?? "section") as ElementType;
  const { ref, animationClass } = useReveal({ threshold, once });

  return (
    <Component
      ref={ref as RefObject<HTMLElement>}
      className={`transition-all duration-700 ${animationClass} ${className}`.trim()}
      {...rest}
    >
      {children}
    </Component>
  );
}

