"use client";

import { useEffect, useRef, useState } from "react";

type UseRevealOptions = {
  threshold?: number;
  once?: boolean;
};

export function useReveal({ threshold = 0.1, once = false }: UseRevealOptions = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold, once]);

  return {
    ref,
    isInView,
    animationClass: isInView ? "section-animate-visible" : "section-animate-hidden",
  };
}

