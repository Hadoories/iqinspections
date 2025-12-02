import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import heroBackground from "@/../public/homepage/heroBG.jpg";
import type { Statistic } from "@/lib/content";

type CTA = { label: string; href: string };

type HeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  highlights?: string[];
  stats?: Statistic[];
  primaryCta?: CTA;
  secondaryCta?: CTA;
  children?: React.ReactNode;
  backgroundImage?: string | StaticImageData | null;
};

export function Hero({
  eyebrow,
  title,
  description,
  highlights = [],
  stats = [],
  primaryCta,
  secondaryCta,
  children,
  backgroundImage,
}: HeroProps) {
  const resolvedBackground = backgroundImage ?? heroBackground;

  return (
    <section className="relative isolate overflow-hidden bg-white text-white">
      <Image
        src={resolvedBackground}
        alt=""
        priority
        fill
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full scale-110 object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[#2596be]/70" />

      <div className="section-shell py-24 md:py-32">
        <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl lg:leading-tight">
              {title}
            </h1>
            {description && (
              <p className="max-w-xl text-base leading-relaxed text-white/95 md:text-lg">
                {description}
              </p>
            )}
          </div>

          <div className="pt-2">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center gap-2 rounded bg-white px-8 py-4 text-base font-bold !text-slate-900 shadow-xl transition-transform hover:scale-110"
              >
                {primaryCta.label}
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

