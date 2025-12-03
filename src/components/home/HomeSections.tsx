"use client";

import Image from "next/image";
import Link from "next/link";

import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TestimonialsPanel } from "@/components/ui/TestimonialsPanel";
import { useReveal } from "@/hooks/useReveal";
import {
  generalFAQs,
  homeValues,
  inspectorProfile,
  servicesOverviewCards,
  testimonials,
} from "@/lib/content";
import { siteConfig } from "@/lib/site";

const simpleServices = [
  {
    title: "Home Inspection",
    description: "Full inspection for buyers to understand their future home.",
    href: "/services/home-inspection",
  },
  {
    title: "Sewer Scope",
    description: "Camera inspection to identify underground line issues.",
    href: "/services/sewer-scope",
  },
  {
    title: "Radon Testing",
    description: "48-hour monitoring to detect hazardous radon levels.",
    href: "/services/radon-testing",
  },
  {
    title: "Pool Inspection",
    description: "Safety and equipment checks for pools and spas.",
    href: "/services/pool-inspection",
  },
  {
    title: "Commercial Inspection",
    description: "Due diligence reporting for commercial properties.",
    href: "/services/commercial-inspection",
  },
  {
    title: "Pre-Listing Inspection",
    description: "Document property condition before listing.",
    href: "/services/pre-listing-inspection",
  },
];

export function ServicesSection() {
  const { ref, isInView, animationClass } = useReveal();
  
  return (
    <section
      ref={ref}
      className={`section-shell bg-sky-50/80 transition-all duration-700 ${animationClass}`}
    >
      <div className="relative mx-auto max-w-6xl space-y-10 px-4 md:px-6">
        <div
          aria-hidden="true"
          className="absolute -top-8 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-white via-sky-100 to-transparent blur-2xl"
        />
        <SectionHeading
          eyebrow="Services"
          title="Inspections built for every property journey."
          description="Choose the service that matches your transaction."
        />
        <div className="grid gap-6 grid-cols-2 lg:grid-cols-3">
          {simpleServices.map((service, index) => {
            const column = index % 3; // 0 = left, 1 = middle, 2 = right
            
            let bgGradient, hoverGradient, textColor, descColor;
            
            if (column === 0) {
              // Left column - lightest
              bgGradient = "bg-gradient-to-br from-white to-[#a8c8e1]";
              hoverGradient = "hover:from-[#f0f7fc] hover:to-[#8fb3d5]";
              textColor = "text-slate-900";
              descColor = "text-slate-700";
            } else if (column === 1) {
              // Middle column - medium
              bgGradient = "bg-gradient-to-br from-[#5a9bc8] to-[#3a7aa8]";
              hoverGradient = "hover:from-[#4a8bb8] hover:to-[#2a6a98]";
              textColor = "text-white";
              descColor = "text-white/90";
            } else {
              // Right column - darkest
              bgGradient = "bg-gradient-to-br from-[#3a7aa8] to-[#1f4a66]";
              hoverGradient = "hover:from-[#2a6a98] hover:to-[#0f3a56]";
              textColor = "text-white";
              descColor = "text-white/90";
            }
            
            return (
              <Link
                key={service.title}
                href={service.href}
                style={{ transitionDelay: `${index * 120}ms` }}
                className={`group flex min-h-[240px] flex-col items-center justify-center rounded ${bgGradient} p-8 text-center transition-all duration-500 hover:scale-105 hover:bg-gradient-to-br ${hoverGradient} hover:shadow-xl ${isInView ? 'section-animate-visible' : 'section-animate-hidden'}`}
              >
                <Image
                  src="/homepage/servicesIcon.svg"
                  alt=""
                  width={40}
                  height={40}
                  className="mb-3"
                />
                <h3 className={`text-xl font-semibold ${textColor}`}>
                  {service.title}
                </h3>
                <p className={`mt-3 text-sm ${descColor}`}>{service.description}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function InspectorSpotlightSection() {
  const { ref, animationClass } = useReveal();
  const highlights = [
    "Thorough & Unbiased Property Reports",
    "Detailed Inspection of All Major Systems",
    "Trusted by Buyers, Sellers, and Realtors",
    "Fast Turnaround with Digital Reports",
  ];
  
  return (
    <section
      ref={ref}
      className={`section-shell transition-all duration-700 ${animationClass}`}
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1fr_1.05fr] md:px-6">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-100 shadow-2xl shadow-slate-900/10">
          <Image
            src="/homepage/whyUs.jpeg"
            alt="Friendly IQ Inspections professional with equipment"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6 rounded-3xl bg-[#0f4c81] p-8 text-white shadow-2xl shadow-blue-900/30">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sky-100">
            Who We Are
          </p>
          <div className="space-y-4">
            <h2 className="text-4xl font-bold leading-tight">
              Certified inspectors focused on confident decisions
            </h2>
            <p className="text-base text-white/85">
              We flag the biggest issues fast, explain them in plain language, and document next steps.
            </p>
            <p className="text-base text-white/85">
              Licensed, insured, and responsive whenever you need a quick answer.
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold text-white"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-200 text-[#0a3261]">
                  ✔
                </span>
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#0f4c81] transition hover:bg-slate-100 hover:text-[#0f4c81] focus-visible:text-[#0f4c81]"
            >
              <span className="text-[#0f4c81]">About Us</span>
              <span aria-hidden="true" className="text-lg text-[#0f4c81]">
                →
              </span>
            </Link>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-3 text-base font-semibold text-white"
            >
              <span className="text-sky-200">☎</span>
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const { ref, animationClass } = useReveal();
  const simpleSteps = [
    {
      id: "01.",
      title: "Schedule Your Inspection",
      description: "Pick a time online or call—just tell us the basics about the property.",
    },
    {
      id: "02.",
      title: "We Arrive On-Site",
      description: "A licensed inspector shows up on time with everything needed to document the home.",
    },
    {
      id: "03.",
      title: "Receive Your Detailed Report",
      description: "Review a clean report with photos, priorities, and next steps the very same day.",
    },
  ];
  
  return (
    <section ref={ref} className={`section-shell transition-all duration-700 ${animationClass}`}>
      <div className="relative mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-10 bottom-6 hidden h-36 w-36 rounded-[46px] bg-gradient-to-br from-[#d7e9ff] via-white to-transparent blur-3xl md:block"
        />
        <div className="overflow-hidden border border-slate-100 bg-white shadow-[0_25px_60px_rgba(15,79,171,0.18)]">
          <div className="grid gap-0 md:grid-cols-[1fr_1.1fr] bg-gradient-to-r from-[#0c4c8e] via-[#2d77c0] to-[#dceaff]">
            <div className="space-y-6 px-12 py-16 text-white md:px-14 md:py-18">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                  Simple Steps
                </p>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                  Three quick steps to get inspected
                </h2>
                <p className="text-base text-white/90">
                  Book, meet us on-site, then review a clear summary the same day.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-white/90 px-6 py-3 text-sm font-semibold text-[#0f5fab] shadow-lg shadow-blue-900/20 transition hover:bg-white hover:text-[#0f5fab] focus-visible:text-[#0f5fab]"
              >
                <span className="text-[#0f5fab]">Schedule A Call</span>
                <span aria-hidden="true" className="text-lg text-[#0f5fab]">
                  →
                </span>
              </Link>
            </div>
            <div className="grid gap-12 px-12 py-16 text-white md:grid-cols-3 md:px-14 md:py-18">
              {simpleSteps.map((step, index) => (
                <div
                  key={step.id}
                  className="space-y-4 transition-all duration-500"
                  style={{ transitionDelay: `${index * 120}ms` }}
                >
                  <span className="text-3xl font-extrabold text-white drop-shadow-[0_0_8px_rgba(10,60,120,0.45)]">
                    {step.id}
                  </span>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/85">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const whyWorkHighlights = [
  {
    title: "Certified, professional inspections.",
    description: "Licensed experts who cover the entire property without rushing.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8M8 12h8M8 17h5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Easy-to-read reports delivered quickly.",
    description: "Modern visuals and bullet summaries delivered within 24 hours.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M7 3h7l5 5v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v5h5" />
        <path d="M9 12h6M9 16h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Trusted by buyers, sellers, and pros.",
    description: "Balanced reporting tailored to whoever needs the info.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
        <path d="M3 21a7 7 0 0 1 14 0" />
        <circle cx="19" cy="7" r="2" />
        <path d="M21 21a4 4 0 0 0-3-3.87" />
      </svg>
    ),
  },
];

export function WhyWorkSection() {
  const { ref, animationClass } = useReveal();

  return (
    <section ref={ref} className={`section-shell py-12 md:py-16 transition-all duration-700 ${animationClass}`}>
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.05fr_1fr] md:px-6">
        <div
          aria-hidden="true"
          className="absolute -left-10 top-6 hidden h-40 w-40 rounded-[40px] bg-gradient-to-br from-sky-200/70 via-white/70 to-transparent blur-3xl md:block"
        />
        <div
          aria-hidden="true"
          className="absolute -right-8 bottom-0 hidden h-32 w-32 rotate-6 rounded-2xl border border-sky-200/70 md:block"
        />
        <div className="relative min-h-[360px] overflow-hidden">
          <Image
            src="/homepage/AdobeStock_293713548_Preview.jpeg"
            alt="Inspector documenting findings during a property walkthrough"
            fill
            className="rounded-2xl object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={false}
          />
          <div className="absolute left-6 top-6 hidden h-16 w-16 -rotate-6 border-2 border-white/40 md:block" />
        </div>
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">Why Choose IQ Inspections</p>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-slate-900">Why Work With Us?</h2>
            <p className="text-base text-slate-600">
              Small, responsive team. Big-property expertise. Same-day clarity.
            </p>
          </div>
          <div className="space-y-4">
            {whyWorkHighlights.map((item, index) => (
              <div
                key={item.title}
                className="flex flex-col gap-2 rounded-2xl bg-gradient-to-r from-[#1f5da0] via-[#3e80ce] to-[#cfe1ff] p-5 text-white shadow-lg shadow-blue-900/20 transition-all duration-500 sm:flex-row sm:items-center sm:gap-4"
                style={{ transitionDelay: `${index * 140}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">{item.icon}</div>
                <div>
                  <p className="text-base font-semibold">{item.title}</p>
                  <p className="text-sm text-white/90">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const credibilityStats = [
  { value: "500+", label: "Inspections Completed" },
  { value: "24 hrs", label: "Average Report Delivery" },
  { value: "4.9/5", label: "Client Satisfaction" },
];

const partnerBadges = ["Metro Detroit Realtors", "Local Investors", "Property Managers"];

export function CredibilityBandSection() {
  const { ref, animationClass } = useReveal();

  return (
    <section
      ref={ref}
      className={`section-shell py-12 md:py-16 bg-gradient-to-r from-[#102f5c] via-[#174c8f] to-[#2f7dd6] text-white ${animationClass}`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 md:px-6">
        <div className="grid gap-6 text-center md:grid-cols-3">
          {credibilityStats.map((stat, index) => (
            <div
              key={stat.label}
              className="rounded-2xl bg-white/10 p-5 shadow-lg shadow-black/10 transition-all duration-500"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="rounded-3xl bg-white/10 p-5 text-center shadow-lg shadow-black/10">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
            Trusted By
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            {partnerBadges.map((badge, index) => (
              <span
                key={badge}
                className="rounded-full border border-white/40 px-4 py-2 text-sm font-medium text-white/90 transition-all duration-500"
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const { ref, isInView, animationClass } = useReveal();
  
  return (
    <section
      ref={ref}
      className={`bg-gradient-to-r from-[#0f4c81] via-[#1a74c7] to-[#b4d4ff] transition-all duration-700 ${animationClass}`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-16 text-white md:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Testimonials
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Trusted by agents, buyers, and investors.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/85">
            We measure success by how confident our clients feel after every
            walkthrough. Here’s what they say about working with IQ Inspections.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <figure
              key={testimonial.author}
              className="flex h-full flex-col gap-4 rounded-2xl border border-white/30 bg-white/90 p-6 text-slate-900 shadow-xl shadow-blue-900/10 transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <p className="text-slate-600">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <figcaption className="mt-auto border-t border-slate-200 pt-4 text-sm font-semibold text-slate-900">
                {testimonial.author}
                <span className="block text-xs font-normal uppercase tracking-wide text-slate-500">
                  {testimonial.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const { ref, isInView, animationClass } = useReveal();
  
  return (
    <section
      ref={ref}
      className={`section-shell py-12 md:py-16 bg-gradient-to-b from-[#f3f7ff] via-white to-white transition-all duration-700 ${animationClass}`}
    >
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[0.75fr_1fr] md:px-6">
        <div
          aria-hidden="true"
          className="absolute -right-10 top-0 hidden h-36 w-36 rounded-full bg-gradient-to-br from-[#9dc2ff]/40 via-white to-transparent blur-3xl md:block"
        />
        <div className="space-y-6">
          <SectionHeading
            align="left"
            eyebrow="Frequently asked"
            title="Clarity before closing."
            description="Quick answers to the questions we hear every day."
          />
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 shadow-lg shadow-slate-200/60">
            <p className="text-sm text-slate-600">
              Need immediate availability? Call{" "}
              <a href="tel:+13136525104" className="font-semibold text-slate-900">
                {inspectorProfile.name} · (313) 652-5104
              </a>
            </p>
          </div>
          <div className="rounded-2xl border border-dashed border-slate-200 bg-white/90 p-5 shadow-inner shadow-slate-200/60">
            <p className="text-sm text-slate-600">
              Prefer email?{" "}
              <a href={siteConfig.contact.emailHref} className="font-semibold text-slate-900">
                {siteConfig.contact.email}
              </a>
            </p>
            <p className="text-sm text-slate-500">
              We reply within one business day and can send sample reports.
            </p>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-100 bg-white shadow-[0_25px_60px_rgba(15,79,171,0.08)]">
          <FAQAccordion items={generalFAQs} />
        </div>
      </div>
    </section>
  );
}

