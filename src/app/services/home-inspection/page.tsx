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

export default function HomeInspectionPage() {
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
                Home Inspection
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/95 md:text-lg">
                Thorough inspections for confident decisions. Buying a home is one of the biggest investments you'll make. Our inspections provide a clear picture of the property's condition.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded bg-white px-8 py-4 text-base font-bold !text-slate-900 shadow-xl transition-transform hover:scale-110"
              >
                Schedule Your Inspection
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="section-shell bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Key Features</p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">What's Included</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Foundation, Roof & Structure</h3>
              <p className="text-sm text-slate-600">Complete evaluation of structural integrity and major systems.</p>
            </div>
            <div className="rounded border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Electrical, Plumbing & HVAC</h3>
              <p className="text-sm text-slate-600">Thorough inspection of all mechanical and utility systems.</p>
            </div>
            <div className="rounded border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Interior & Exterior Systems</h3>
              <p className="text-sm text-slate-600">Detailed assessment of all visible components and finishes.</p>
            </div>
            <div className="rounded border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Attic, Insulation & Ventilation</h3>
              <p className="text-sm text-slate-600">Analysis of energy efficiency and proper ventilation systems.</p>
            </div>
            <div className="rounded border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">HD Photo Documentation</h3>
              <p className="text-sm text-slate-600">High-resolution images of all findings and areas of concern.</p>
            </div>
            <div className="rounded border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Detailed Report</h3>
              <p className="text-sm text-slate-600">Comprehensive report delivered within 24 hours of inspection.</p>
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
              <p className="text-sm text-slate-600">Book your inspection online or call us directly for immediate availability.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded bg-sky-600 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">Inspection</h3>
              <p className="text-sm text-slate-600">Our certified inspector thoroughly evaluates the property and documents all findings.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded bg-sky-600 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">Report</h3>
              <p className="text-sm text-slate-600">Receive your detailed report with photos and recommendations within 24 hours.</p>
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
                Most home inspections take 2-3 hours depending on the size and age of the property. Larger homes or those with additional features may require more time.
              </p>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Can I Request a Re-Evaluation?</h3>
              <p className="text-sm text-slate-600">
                Yes, if repairs are made based on our initial findings, we offer discounted re-inspection services to verify the work was completed properly.
              </p>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Should I Attend the Inspection?</h3>
              <p className="text-sm text-slate-600">
                We encourage clients to attend, especially during the final walkthrough. This allows you to ask questions and see findings firsthand.
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

