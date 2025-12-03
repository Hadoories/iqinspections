"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { RevealSection } from "@/components/ui/RevealSection";

type Breadcrumb = { label: string; href: string };
type KnowledgeEntry = { title: string; body: string };
type FeaturePanel = { eyebrow: string; title: string; bullets: string[] };

export type ServicePageContent = {
  slug: string;
  breadcrumbs: Breadcrumb[];
  hero: {
    title: string;
    headline: string;
    description: string;
    image: { src: string; alt: string };
  };
  detailImage?: { src: string; alt: string };
  featurePanel?: FeaturePanel;
  knowledge: {
    eyebrow?: string;
    title: string;
    entries: KnowledgeEntry[];
  };
  cta: {
    eyebrow?: string;
    title: string;
    description?: string;
    buttonLabel: string;
    buttonHref: string;
  };
};

export function ServicePageLayout({ content }: { content: ServicePageContent }) {
  return (
    <div className="bg-gradient-to-b from-white via-[#f7f9ff] to-white">
      <RevealSection as="section" className="relative isolate overflow-hidden bg-slate-900 text-white">
        <Image
          src={content.hero.image.src}
          alt={content.hero.image.alt}
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0f3d73]/85 via-[#0f4c81]/70 to-[#1f6ac4]/60" />
        <div className="section-shell py-20 md:py-28">
          <div className="mx-auto max-w-6xl space-y-6 px-4 md:px-6">
            <nav className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
              {content.breadcrumbs.map((crumb, index) => (
                <span key={`${crumb.href}-${crumb.label}`}>
                  {index > 0 && <span className="mx-2 text-white/40">/</span>}
                  <Link href={crumb.href} className="hover:text-white">
                    {crumb.label}
                  </Link>
                </span>
              ))}
            </nav>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">{content.hero.title}</p>
              <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">{content.hero.headline}</h1>
              <p className="max-w-3xl text-base text-white/90 md:text-lg">{content.hero.description}</p>
            </div>
            <div className="pt-2">
              <Link
                href={content.cta.buttonHref}
                className="inline-flex items-center gap-2 rounded bg-white px-8 py-4 text-base font-semibold text-[#0f4c81] shadow-xl transition hover:scale-105"
              >
                <span className="whitespace-nowrap text-[#0f4c81]">{content.cta.buttonLabel}</span>
                <svg className="h-5 w-5 text-[#0f4c81]" fill="none" stroke="currentColor" strokeWidth={2.4} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0-5-5m5 5-5 5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection as="section" className="section-shell pt-6 md:pt-10">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.15fr_0.85fr] md:px-6">
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-[0_25px_60px_rgba(15,79,171,0.12)]">
            <Image
              src={(content.detailImage ?? content.hero.image).src}
              alt={(content.detailImage ?? content.hero.image).alt}
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
          </div>
          <div className="space-y-6">
            {content.featurePanel && (
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_15px_45px_rgba(16,47,92,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
                  {content.featurePanel.eyebrow}
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">{content.featurePanel.title}</h2>
                <ul className="mt-6 space-y-4 text-sm text-slate-600">
                  {content.featurePanel.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-xs text-sky-700">
                        ✓
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-3xl bg-gradient-to-br from-[#0f4c81] via-[#1a68b5] to-[#2f7dd6] p-6 text-white shadow-lg shadow-blue-900/30">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                {content.cta.eyebrow ?? "Schedule A Call"}
              </p>
              <h3 className="mt-2 text-xl font-semibold">{content.cta.title}</h3>
              {content.cta.description && <p className="mt-3 text-sm text-white/80">{content.cta.description}</p>}
              <div className="mt-5 flex justify-start">
                <Link
                  href={content.cta.buttonHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#0f4c81] transition hover:bg-slate-50"
                >
                  <span className="whitespace-nowrap text-[#0f4c81]">{content.cta.buttonLabel}</span>
                  <span aria-hidden="true" className="text-[#0f4c81]">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection as="section" className="section-shell pt-0">
        <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
          <div className="text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
              {content.knowledge.eyebrow ?? "Knowledge"}
            </p>
            <h2 className="text-3xl font-bold text-slate-900">{content.knowledge.title}</h2>
          </div>
          <div className="flex flex-wrap gap-6">
            {content.knowledge.entries.map((entry, index) => (
              <div key={entry.title} className="w-full md:w-[calc(50%-0.75rem)]">
                <KnowledgeCard index={index} title={entry.title} body={entry.body} initialOpen={false} />
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </div>
  );
}

function KnowledgeCard({
  title,
  body,
  index,
  initialOpen = false,
}: {
  title: string;
  body: string;
  index: number;
  initialOpen?: boolean;
}) {
  const [open, setOpen] = useState(initialOpen);
  return (
    <div
      className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-200/70 transition-all duration-500"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-t-2xl bg-gradient-to-r from-[#0f4c81] to-[#2f7dd6] px-5 py-3 text-left text-white"
      >
        <h3 className="text-base font-semibold">{title}</h3>
        <span aria-hidden="true" className="text-lg">
          {open ? "−" : "+"}
        </span>
      </button>
      <div
        className="grid transition-all duration-500"
        style={{
          gridTemplateRows: open ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div className="px-5 py-4 text-sm text-slate-600">{body}</div>
        </div>
      </div>
    </div>
  );
}
