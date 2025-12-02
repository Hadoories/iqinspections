import Image from "next/image";
import Link from "next/link";

import { Statistic } from "@/lib/content";

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
  backgroundImage?: string;
  overlayClassName?: string;
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
  overlayClassName = "bg-sky-900/75",
}: HeroProps) {
  const inverted = Boolean(backgroundImage);

  return (
    <section className={`section-shell relative overflow-hidden ${inverted ? "py-20 md:py-24" : ""}`}>
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 -z-10 object-cover"
          />
          <div className={`absolute inset-0 -z-10 ${overlayClassName}`} />
        </>
      )}
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.1fr_0.9fr] md:items-center md:px-6">
        <div className="space-y-6">
          {eyebrow && <p className={`eyebrow ${inverted ? "text-white/80" : ""}`}>{eyebrow}</p>}
          <h1
            className={`text-4xl font-semibold tracking-tight md:text-5xl ${
              inverted ? "text-white" : "text-slate-900"
            }`}
          >
            {title}
          </h1>
          {description && (
            <p className={`text-lg ${inverted ? "text-white/90" : "text-slate-600"}`}>{description}</p>
          )}
          {highlights.length > 0 && (
            <ul className={`space-y-2 text-sm ${inverted ? "text-white/85" : "text-slate-600"}`}>
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-gradient-to-br from-sky-400 to-indigo-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex flex-wrap gap-3">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className={`btn ${
                  inverted
                    ? "bg-white text-sky-700 shadow-lg shadow-sky-900/10 hover:bg-white/90"
                    : "btn-primary"
                }`}
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className={`btn ${
                  inverted
                    ? "border border-white/70 text-white hover:bg-white/10"
                    : "btn-outline"
                }`}
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
          {stats.length > 0 && (
            <div
              className={`grid gap-6 rounded-2xl border p-4 sm:grid-cols-3 ${
                inverted ? "border-white/30 bg-white/10 text-white" : "border-sky-100 bg-white/70"
              }`}
            >
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className={`text-2xl font-semibold ${inverted ? "text-white" : "text-slate-900"}`}>
                    {stat.value}
                  </p>
                  <p className={`text-xs uppercase tracking-wide ${inverted ? "text-white/70" : "text-slate-500"}`}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative">
          <div className="card h-full w-full rounded-[2rem] bg-gradient-to-br from-sky-500 via-indigo-500 to-sky-600 p-8 text-white shadow-2xl shadow-sky-500/30">
            {children ? (
              children
            ) : (
              <div className="space-y-4 text-sm text-slate-200">
                <p>
                  “They deliver the most transparent reports in the state. My
                  clients walk away understanding the property, not fearing it.”
                </p>
                <p className="font-semibold text-white">
                  Trusted by agents across Michigan
                </p>
              </div>
            )}
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white/80 p-4 text-sm font-semibold text-slate-700 shadow-xl shadow-sky-200/60 backdrop-blur md:block">
            4.9 ★ average client rating
          </div>
        </div>
      </div>
    </section>
  );
}

