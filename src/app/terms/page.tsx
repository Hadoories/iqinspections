"use client";

import Image from "next/image";
import Link from "next/link";

import heroBackground from "@/../public/homepage/heroBG.jpg";

const sections = [
  {
    title: "1. Agreement to Terms",
    body:
      "By using this site, you confirm that you have read and understood these Terms of Use and our Privacy Policy, and that you agree to follow them.",
  },
  {
    title: "2. Updates to These Terms",
    body:
      "We may change or revise these terms at any time without notice. Continued use of the website indicates that you accept any updated terms.",
  },
  {
    title: "3. Proper Use of Services",
    body: "You may only use our website and services for legal, appropriate purposes. Any fraudulent, harmful, or illegal activity is prohibited.",
  },
  {
    title: "4. Intellectual Property Rights",
    body:
      "All content on this website—including text, images, graphics, and logos—belongs to IQ Inspection and is protected by applicable laws. Do not copy, share, or reuse it without written approval.",
  },
  {
    title: "5. Liability Disclaimer",
    body:
      "IQ Inspection is not responsible for damages that occur from using or being unable to use our site or services, including direct or indirect losses.",
  },
  {
    title: "6. External Links",
    body:
      "Our site may include links to other websites. We do not control or endorse their content and recommend reviewing their policies before use.",
  },
  {
    title: "7. Termination of Access",
    body:
      "We may limit or deny access to our website or services at any time, without notice, if we believe these terms have been violated.",
  },
  {
    title: "8. Governing Law",
    body:
      "These Terms of Use are governed by Michigan law. Any disputes will be handled solely in Michigan courts.",
  },
  {
    title: "9. Contact Us",
    body: "Email hass@iqinspectmi.com or call (313) 652-5104 if you have questions about these Terms of Use.",
  },
];

export default function TermsPage() {
  return (
    <div className="space-y-12 bg-gradient-to-b from-white via-[#f5f8ff] to-white pb-16">
      <section className="relative isolate overflow-hidden bg-slate-900 text-white">
        <Image
          src={heroBackground}
          alt="Inspector reviewing documents outside a home"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full scale-110 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0f3d73]/85 via-[#0f4c81]/70 to-[#1f6ac4]/60" />
        <div className="section-shell py-20 md:py-28">
          <div className="mx-auto max-w-5xl space-y-6 px-4 md:px-6">
            <nav className="text-sm font-semibold text-white/80">
              <Link href="/" className="transition hover:text-white">
                Homepage
              </Link>
              <span className="mx-2 text-white/60">/</span>
              <span>Terms of Use</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Terms of Use</p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">Terms of Use</h1>
            <p className="text-base text-white/85 md:text-lg">Last Updated: Aug 08, 2025</p>
            <p className="max-w-3xl text-base text-white/90 md:text-lg">
              Welcome to IQ Inspection. By accessing or using our website and services, you agree to comply with and be bound
              by the following Terms of Use. If you do not agree with these terms, please do not use our website or services.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto max-w-4xl space-y-8 px-4 md:px-6">
          {sections.map((section) => (
            <article key={section.title} className="rounded-3xl border border-slate-100 bg-white/95 p-6 shadow-[0_15px_45px_rgba(15,76,129,0.08)]">
              <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
              <p className="mt-3 text-base text-slate-600">{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

