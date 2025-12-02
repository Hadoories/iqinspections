"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { IconFeature } from "@/components/ui/IconFeature";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { TestimonialsPanel } from "@/components/ui/TestimonialsPanel";
import {
  certificationBadges,
  generalFAQs,
  homeProcess,
  homeValues,
  inspectorProfile,
  resourcesHighlight,
  servicesOverviewCards,
  testimonials,
} from "@/lib/content";

function useInView() {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isInView };
}

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
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className={`section-shell bg-sky-50/80 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="mx-auto max-w-6xl space-y-10 px-4 md:px-6">
        <SectionHeading
          eyebrow="Services"
          title="Inspections built for every property journey."
          description="Choose the service that matches your transaction."
        />
        <div className="grid gap-6 md:grid-cols-3">
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
                style={{ animationDelay: `${index * 100}ms` }}
                className={`group flex min-h-[240px] flex-col items-center justify-center rounded ${bgGradient} p-8 text-center transition-all hover:scale-105 hover:bg-gradient-to-br ${hoverGradient} hover:shadow-xl ${isInView ? 'animate-fade-in-up' : 'opacity-0'}`}
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
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className={`section-shell bg-[#1e3a5f] transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1fr_1.2fr] md:px-6">
        <div className="relative aspect-[4/3] overflow-hidden rounded">
          <Image
            src="/homepage/whyUs.jpeg"
            alt="Professional home inspector"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Why Choose Us</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Clear reports. Modern tools. Expert guidance.</h2>
          </div>
          <div className="space-y-4">
            <div className="grid gap-3 md:grid-cols-3">
              {homeValues.map((value) => (
                <div key={value.title} className="rounded bg-white px-4 py-3 text-center">
                  <h3 className="text-sm font-semibold text-slate-900">{value.title}</h3>
                </div>
              ))}
            </div>
            <p className="text-sm text-white/80">
              Every inspection includes HD imagery, detailed findings, and actionable recommendations delivered within 24 hours. We prioritize transparency so you can make confident decisions about your property.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className={`section-shell bg-sky-50/70 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="mx-auto max-w-6xl space-y-10 px-4 md:px-6">
        <SectionHeading
          eyebrow="Process"
          title="A guided experience from booking to final walkthrough."
          description="Stay informed at every milestone with proactive communication, modern tools, and prioritized action items."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {homeProcess.map((step) => (
            <div key={step.step} className="rounded border border-slate-200 bg-white/90 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">{step.step}</p>
              <h4 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h4>
              <p className="text-sm text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className={`section-shell bg-white/80 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="mx-auto max-w-6xl space-y-10 px-4 md:px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by agents, buyers, and investors."
          description="We measure success by how confident our clients feel after every walkthrough."
        />
        <TestimonialsPanel testimonials={testimonials} />
      </div>
    </section>
  );
}

export function ResourcesSection() {
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} id="resources" className={`section-shell bg-sky-50/80 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
        <SectionHeading eyebrow="Resources" title="Tools to keep your transaction on schedule." />
        <div className="grid gap-4 md:grid-cols-3">
          {resourcesHighlight.map((resource) => (
            <div key={resource.title} className="rounded border border-slate-200 bg-white/95 p-5">
              <h4 className="text-lg font-semibold text-slate-900">{resource.title}</h4>
              <p className="text-sm text-slate-600">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className={`section-shell transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[0.7fr_1fr] md:px-6">
        <div className="space-y-4">
          <SectionHeading
            align="left"
            eyebrow="Frequently asked"
            title="Clarity before closing."
            description="Still weighing your options? Explore the answers to our most common inspection questions."
          />
          <div className="rounded border border-slate-200 bg-white/80 p-4">
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
  );
}

export function CertificationsSection() {
  const { ref, isInView } = useInView();
  
  return (
    <section ref={ref} className={`section-shell bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-700 text-white transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-center md:px-6">
        <p className="eyebrow text-slate-200">Certifications</p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold uppercase tracking-wide text-slate-100">
          {certificationBadges.map((badge) => (
            <span key={badge} className="rounded border border-white/30 px-4 py-2 text-xs">
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
  );
}

