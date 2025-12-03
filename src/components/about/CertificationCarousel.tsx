"use client";

import Image from "next/image";
import { useState } from "react";

type Slide = {
  src: string;
  alt: string;
};

export function CertificationCarousel({ slides }: { slides: Slide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = slides.length;

  const goTo = (direction: 1 | -1) => {
    setActiveIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return total - 1;
      if (next >= total) return 0;
      return next;
    });
  };

  if (total === 0) return null;

  return (
    <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[32px] border border-white/60 bg-white p-6 shadow-[0_25px_60px_rgba(16,60,112,0.08)]">
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(.4,0,.2,1)]"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.src} className="w-full shrink-0 px-2">
            <div className="relative mx-auto aspect-[10/7] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-white to-[#e4edff]">
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => goTo(-1)}
        aria-label="Previous certificate"
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-3 text-slate-700 shadow-lg transition hover:bg-white"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => goTo(1)}
        aria-label="Next certificate"
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-3 text-slate-700 shadow-lg transition hover:bg-white"
      >
        ›
      </button>
      <div className="mt-6 flex justify-center gap-2">
        {slides.map((_, idx) => (
          <span
            key={String(idx)}
            className={`h-2 w-2 rounded-full transition ${
              idx === activeIndex ? "bg-sky-500" : "bg-slate-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

