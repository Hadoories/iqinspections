import Image from "next/image";
import Link from "next/link";

import { CertificationCarousel } from "@/components/about/CertificationCarousel";
import { RevealSection } from "@/components/ui/RevealSection";

const inspectorHighlights = [
  "Certified Professional Inspector",
  "Experienced in home systems and construction",
  "Dedicated to clear communication and client education",
];

const visionFeatures = [
  {
    title: "Always Deliver Exceptional Service",
    description:
      "From your first call to your final report, we go above and beyond to provide thorough, reliable, and friendly service.",
  },
  {
    title: "Licensed & Certified Expertise",
    description:
      "Our inspectors are fully certified, bringing years of experience and legal compliance to every inspection.",
  },
  {
    title: "Simple Online Booking",
    description:
      "Easily schedule your inspection at your convenience with our fast, user-friendly online booking system.",
  },
  {
    title: "Flexible Service Hours",
    description:
      "We work around your schedule, offering extended hours to ensure you get the inspection you need when you need it.",
  },
];

const businessStoryCopy = [
  "Buying or selling a home is a big decision—and having the right inspection can make all the difference. Our certified team has inspected hundreds of properties, identifying issues early and giving clients the knowledge they need to move forward with confidence.",
  "We combine advanced technology, years of expertise, and a commitment to accuracy to provide detailed, easy-to-understand reports. From structural integrity to safety concerns, we ensure every detail is covered so you can protect your investment.",
];

const certificateSlides = [
  {
    src: "/homepage/ICA AWARD-1024x794.png",
    alt: "Inspection Certification Associates award for Hassan Alzubaidi",
  },
  {
    src: "/homepage/HASSSS completion_4701-1024x794.png",
    alt: "Certificate of completion for sewer camera inspection training",
  },
  {
    src: "/homepage/ICA HASSSSS-e1754926807998-1024x791.jpeg",
    alt: "ICA Certified Home Inspector certificate awarded to Hassan Alzubaidi",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      <RevealSection className="relative isolate overflow-hidden bg-[#0e4f8a] text-white">
        <Image
          src="/homepage/heroBG.jpg"
          alt="Inspector reviewing home systems on site"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0f2d5c]/90 via-[#0f4c81]/75 to-[#1f6ac4]/60" />
        <div className="section-shell py-20 md:py-28">
          <div className="mx-auto max-w-5xl space-y-6 px-4 md:px-6">
            <nav className="text-sm font-semibold text-white/80">
              <Link href="/" className="transition hover:text-white">
                Homepage
              </Link>
              <span className="mx-2 text-white/60">›</span>
              <span>About Us</span>
            </nav>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">
                About Us
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                About IQ Inspections
              </h1>
              <p className="max-w-3xl text-base leading-relaxed text-white/90 md:text-lg">
                At IQ Inspections, we take pride in providing professional,
                detailed, and easy-to-read inspection reports. Our mission is
                simple: help homeowners, buyers, sellers, and real estate
                professionals make confident decisions with clarity and peace of
                mind.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-[1.05fr_0.95fr] md:px-6">
          <div className="relative min-h-[360px] overflow-hidden rounded-[32px] shadow-2xl">
            <Image
              src="/homepage/AdobeStock_293713548_Preview.jpeg"
              alt="Smiling adult craftsman showing card with lettering home inspection while sitting near broken panel"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/10" />
          </div>
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
              Inspector
            </p>
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-slate-900">
                Inspector: Hassan Alzubaidi
              </h2>
            </div>
            <ul className="space-y-3 text-base text-slate-600">
              {inspectorHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell bg-[#f6f8ff] py-16">
        <div className="mx-auto max-w-6xl space-y-10 px-4 md:px-6">
          <div className="space-y-3 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
              Our Vision
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Delivering Safe, Reliable, and Stress-Free Home Ownership
            </h2>
            <p className="text-base text-slate-600">
              We’re committed to ensuring every client enjoys peace of mind
              through trusted inspections, expert advice, and exceptional
              service from start to finish.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {visionFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/80 bg-white p-6 text-left shadow-[0_25px_60px_rgba(16,60,112,0.08)]"
              >
                <div className="mb-4 h-2 w-12 rounded-full bg-sky-500" />
                <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-base text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[0.95fr_1.05fr] md:px-6">
          <div className="relative min-h-[320px] overflow-hidden rounded-[32px] bg-slate-100">
            <Image
              src="/homepage/whyUs.jpeg"
              alt="Inspector reviewing digital reporting dashboard"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
              Great Business Stories
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              We Have Extensive Experience in Home Inspection & Property Evaluation Services
            </h2>
            {businessStoryCopy.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell bg-white py-16">
        <div className="mx-auto max-w-6xl space-y-8 px-4 text-center md:px-6">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">
              Trusted Certifications You Can Rely On
            </p>
          </div>
          <CertificationCarousel slides={certificateSlides} />
        </div>
      </RevealSection>
    </div>
  );
}

