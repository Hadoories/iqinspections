import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/ui/ContactForm";

const contactFields = [
  { name: "name", label: "Full Name", type: "text" as const, required: true },
  { name: "email", label: "Email", type: "email" as const, required: true },
  { name: "phone", label: "Phone", type: "tel" as const, required: true },
  { name: "address", label: "Property Address", type: "text" as const, required: false },
  { name: "message", label: "Additional Details & Preferred Dates", type: "textarea" as const, required: false },
];

const serviceOptions = [
  { label: "Home Inspection", value: "home-inspection" },
  { label: "Sewer Scope", value: "sewer-scope" },
  { label: "Radon Testing", value: "radon-testing" },
  { label: "Pool Inspection", value: "pool-inspection" },
  { label: "Commercial Inspection", value: "commercial-inspection" },
  { label: "Pre-Listing Inspection", value: "pre-listing-inspection" },
];

export default function SewerScopePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-white text-white">
        <Image
          src="/homepage/heroBG.jpg"
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
                Sewer Scope Inspection
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/95 md:text-lg">
                Know what's happening underground. Hidden sewer issues can lead to expensive repairs. Our camera inspection identifies blockages, cracks, offsets, and buildup before they become major problems.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded bg-white px-8 py-4 text-base font-bold !text-slate-900 shadow-xl transition-transform hover:scale-110"
              >
                Schedule a Sewer Scope
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Common Findings Section */}
      <section className="section-shell bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Key Features</p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Common Findings</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6 text-center">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Root Intrusion</h3>
              <p className="text-sm text-slate-600">Tree roots penetrating and blocking sewer lines.</p>
            </div>
            <div className="rounded border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6 text-center">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Cracks or Breaks</h3>
              <p className="text-sm text-slate-600">Damaged clay or cast iron pipes requiring repair.</p>
            </div>
            <div className="rounded border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6 text-center">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Minor Offsets</h3>
              <p className="text-sm text-slate-600">Pipe misalignment or buildup causing slow drainage.</p>
            </div>
            <div className="rounded border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6 text-center">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Blockages</h3>
              <p className="text-sm text-slate-600">Obstructions that need professional cleaning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-shell bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Step To Get Service</p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">How Do I Get Service?</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded bg-sky-600 text-2xl font-bold text-white">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">Schedule</h3>
              <p className="text-sm text-slate-600">Contact us to schedule your sewer scope inspection at a convenient time.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded bg-sky-600 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">Camera Inspection</h3>
              <p className="text-sm text-slate-600">We insert a specialized camera through your sewer line to capture detailed video footage.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded bg-sky-600 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">Video Report</h3>
              <p className="text-sm text-slate-600">Receive video footage and a detailed report with recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-shell bg-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Knowledge</p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Answered Service Questions</h2>
          </div>

          <div className="space-y-4">
            <div className="rounded border border-slate-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Time Needed for Evaluation</h3>
              <p className="text-sm text-slate-600">
                A typical sewer scope inspection takes 1-2 hours depending on the length of the line and accessibility of cleanout points.
              </p>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Can I Request a Re-Evaluation?</h3>
              <p className="text-sm text-slate-600">
                Yes, we offer follow-up inspections after repairs to verify the work was completed properly and the line is clear.
              </p>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">What If Issues Are Found?</h3>
              <p className="text-sm text-slate-600">
                We provide detailed recommendations and can refer you to trusted plumbing professionals for repairs or cleaning services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-shell bg-[#1e3a5f]">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Schedule A Call</p>
            <h2 className="text-3xl font-bold text-white md:text-4xl">Get Service Booking Quotation</h2>
            <p className="mt-4 text-white/80">Fill out the form below and we'll get back to you within 24 hours.</p>
          </div>

          <div className="rounded border border-white/20 bg-white/10 p-8 backdrop-blur">
            <ContactForm fields={contactFields} serviceOptions={serviceOptions} />
          </div>
        </div>
      </section>
    </>
  );
}

