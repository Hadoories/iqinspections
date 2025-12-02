import Link from "next/link";

import { Hero } from "@/components/ui/Hero";
import { IconFeature } from "@/components/ui/IconFeature";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TestimonialsPanel } from "@/components/ui/TestimonialsPanel";
import {
  certificationBadges,
  generalFAQs,
  homeHero,
  homeProcess,
  homeValues,
  inspectorProfile,
  resourcesHighlight,
  servicesOverviewCards,
  testimonials,
} from "@/lib/content";

export default function Home() {
  const heroContent = {
    eyebrow: "Certified • Modern • Detailed",
    title: "Clear. Reliable. Professional Inspections You Can Trust.",
    description:
      "Serving Dearborn, Wayne County, and surrounding areas with detailed home inspections and specialty services.",
    highlights: [] as string[],
    stats: homeHero.stats,
    primaryCta: { label: "Schedule Your Inspection Today", href: homeHero.primaryCta?.href ?? "/contact" },
    secondaryCta: { label: "Explore services", href: homeHero.secondaryCta?.href ?? "/services" },
  };

  return (
    <>
      <Hero
        {...heroContent}
        backgroundImage="/homepage/heroBG.jpg"
        overlayClassName="bg-sky-900/70"
      />

      <section className="section-shell bg-sky-50/80">
        <div className="mx-auto max-w-6xl space-y-10 px-4 md:px-6">
          <SectionHeading
            eyebrow="Services"
            title="Inspections built for every property journey."
            description="Choose the service that matches your transaction. Each option includes HD media, repair guidance, and direct conversations with your inspector."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {servicesOverviewCards.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[0.95fr_1fr] md:px-6">
          <div className="card space-y-4 bg-gradient-to-br from-sky-600 via-indigo-600 to-sky-700 p-8 text-white">
            <p className="eyebrow text-slate-200">Inspector Spotlight</p>
            <h3 className="text-3xl font-semibold text-white">
              {inspectorProfile.name}
            </h3>
            <p className="text-sm uppercase tracking-wide text-slate-200">
              {inspectorProfile.credentials}
            </p>
            <p className="text-base text-slate-100">{inspectorProfile.shortBio}</p>
            <ul className="space-y-2 text-sm text-slate-100">
              {inspectorProfile.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-white/70" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <SectionHeading
              align="left"
              eyebrow="Why IQ Inspections"
              title="Decisions become simple when the report is crystal clear."
              description="Our reports blend narrative storytelling with analytics so everyone—buyers, sellers, and lenders—understands the property in minutes."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {homeValues.map((value) => (
                <IconFeature
                  key={value.title}
                  icon="★"
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-sky-50/70">
        <div className="mx-auto max-w-6xl space-y-10 px-4 md:px-6">
          <SectionHeading
            eyebrow="Process"
            title="A guided experience from booking to final walkthrough."
            description="Stay informed at every milestone with proactive communication, modern tools, and prioritized action items."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {homeProcess.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-slate-200 bg-white/90 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  {step.step}
                </p>
                <h4 className="mt-2 text-lg font-semibold text-slate-900">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell bg-white/80">
        <div className="mx-auto max-w-6xl space-y-10 px-4 md:px-6">
          <SectionHeading
            eyebrow="Testimonials"
            title="Trusted by agents, buyers, and investors."
            description="We measure success by how confident our clients feel after every walkthrough."
          />
          <TestimonialsPanel testimonials={testimonials} />
        </div>
      </section>

      <section id="resources" className="section-shell bg-sky-50/80">
        <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
          <SectionHeading
            eyebrow="Resources"
            title="Tools to keep your transaction on schedule."
          />
          <div className="grid gap-4 md:grid-cols-3">
            {resourcesHighlight.map((resource) => (
              <div
                key={resource.title}
                className="rounded-2xl border border-slate-200 bg-white/95 p-5"
              >
                <h4 className="text-lg font-semibold text-slate-900">
                  {resource.title}
                </h4>
                <p className="text-sm text-slate-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[0.7fr_1fr] md:px-6">
          <div className="space-y-4">
            <SectionHeading
              align="left"
              eyebrow="Frequently asked"
              title="Clarity before closing."
              description="Still weighing your options? Explore the answers to our most common inspection questions."
            />
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-4">
              <p className="text-sm text-slate-600">
                Need immediate availability? Call{" "}
                <a href="tel:+13136525104" className="font-semibold text-slate-900">
                  {inspectorProfile.name} · (313) 652-5104
                </a>
              </p>
            </div>
          </div>
          <FAQAccordion items={generalFAQs} />
        </div>
      </section>

      <section className="section-shell bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-700 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-center md:px-6">
          <p className="eyebrow text-slate-200">Certifications</p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold uppercase tracking-wide text-slate-100">
            {certificationBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/30 px-4 py-2 text-xs"
              >
                {badge}
              </span>
            ))}
          </div>
          <p className="text-2xl font-semibold">
            Ready for clarity?{" "}
            <Link href="/contact" className="text-sky-300 underline decoration-sky-500">
              Request your inspection today.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
