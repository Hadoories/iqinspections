"use client";

import Image from "next/image";
import Link from "next/link";

import heroBackground from "@/../public/homepage/heroBG.jpg";

const sections = [
  {
    title: "Definitions",
    body:
      "Service refers to the IQ Inspections website. Personal Data means information that can identify a living individual, while Usage Data includes automatically collected details (e.g., IP address, browser type, pages visited). Cookies are small files stored on your device. The Data Controller is IQ Inspections, and Data Processors are service providers acting on our behalf. A Data Subject is anyone who uses the Service and whose data may be collected.",
  },
  {
    title: "Information We Collect",
    body:
      "We collect Personal Data you provide (name, email, phone number, address) as well as Cookies and Usage Data—such as IP address, browser details, pages visited, and device identifiers. We may use your contact information for updates, marketing messages, or promotions. You can opt out anytime via unsubscribe links or by contacting us directly.",
  },
  {
    title: "Usage Data & Location Data",
    body:
      "We may automatically gather data about how you interact with the Service, including time on pages, diagnostics, and device information. With permission, we may collect Location Data to enhance features. You can enable or disable location access at any time in your device settings.",
  },
  {
    title: "Cookies and Tracking Technologies",
    body:
      "Cookies, tags, beacons, and similar tools help us monitor activity and improve the experience. Blocking cookies is possible but may limit certain features. Common cookies include Session Cookies (site operation), Preference Cookies (settings), and Security Cookies (account protection).",
  },
  {
    title: "How We Use Your Data",
    body:
      "IQ Inspections may use data to provide and maintain the Service, send updates, enable features, deliver support, collect insights, monitor usage, address technical issues, and share news or offers (unless you opt out).",
  },
  {
    title: "Data Retention & Transfers",
    body:
      "We keep Personal Data only as long as needed for the purposes described or to meet legal obligations. Usage Data is typically retained for a shorter period. Your data may be transferred to—and stored in—the United States or other locations with different data-protection laws. We use reasonable safeguards to keep your information secure.",
  },
  {
    title: "Disclosure of Data",
    body:
      "We may disclose Personal Data to comply with legal obligations, protect IQ Inspections’ rights or property, prevent fraud, ensure user safety, or respond to lawful requests from authorities.",
  },
  {
    title: "Security & Do Not Track",
    body:
      "We use commercially accepted safeguards, but no online transmission or storage method is 100% secure. We currently do not respond to Do Not Track (DNT) signals. You can set your browser preferences to enable or disable DNT.",
  },
  {
    title: "Service Providers & Analytics",
    body:
      "Third-party providers may help operate the Service or analyze usage, and they only access data necessary to perform their tasks. For example, Google Analytics helps us understand user interactions. You can opt out via the browser add-on at https://tools.google.com/dlpage/gaoptout. See Google’s Privacy Policy at https://policies.google.com/privacy.",
  },
  {
    title: "Links to Other Sites & Children’s Privacy",
    body:
      "Our Service may link to external websites that we do not control. Review each site’s privacy policy before providing data. The Service is not intended for individuals under 18; we do not knowingly collect Personal Data from minors. If we discover such data, we remove it promptly.",
  },
  {
    title: "Changes to This Privacy Policy",
    body:
      "We may update this Privacy Policy from time to time. Changes take effect once posted, and we may notify you via email or a notice on the Service. Review the policy periodically to stay informed.",
  },
  {
    title: "Contact Us",
    body: "If you have questions about this Privacy Policy, please reach out directly at hass@iqinspectmi.com or call (313) 652-5104.",
  },
];

export default function PrivacyPage() {
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
              <span>Privacy Policy</span>
            </nav>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/70">Privacy Policy</p>
            <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">Privacy Policy</h1>
            <p className="text-base text-white/85 md:text-lg">Effective Date: Aug 08, 2025</p>
            <p className="max-w-3xl text-base text-white/90 md:text-lg">
              IQ Inspections (“we,” “us,” or “our”) operates the IQ Inspections website (the “Service”). This Privacy Policy
              explains how we collect, use, share, and protect your personal information when you use the Service, as well as
              the choices you have regarding your data.
            </p>
            <p className="max-w-3xl text-base text-white/90 md:text-lg">
              By using the Service, you consent to the practices described here. Terms not defined below have the same meaning as
              in our Terms of Use.
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

