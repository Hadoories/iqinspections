import Image from "next/image";
import Link from "next/link";

import { ContactForm } from "@/components/ui/ContactForm";
import { RevealSection } from "@/components/ui/RevealSection";

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

export default function CommercialInspectionPage() {
  return (
    <>
      {/* Hero Section */}
      <RevealSection className="relative isolate overflow-hidden bg-white text-white">
        <Image
          src="/homepage/commercial Inspection.jpeg"
          alt="Modern commercial building exterior with reflective glass"
          priority
          fill
          sizes="100vw"
          className="absolute inset-0 -z-20 h-full w-full scale-110 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0f3d73]/85 via-[#0f4c81]/70 to-[#1f6ac4]/60" />

        <div className="section-shell py-24 md:py-32">
          <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl lg:leading-tight">
                Commercial Inspection
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-white/95 md:text-lg">
                Professional due diligence for commercial properties. We provide comprehensive inspections for retail, office, multi-family, and light industrial buildings to support your investment decisions.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded bg-white px-8 py-4 text-base font-bold !text-slate-900 shadow-xl transition-transform hover:scale-110"
              >
                Schedule Commercial Inspection
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* What's Included Section */}
      <RevealSection className="section-shell bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Key Features</p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Comprehensive Commercial Assessment</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Structural Systems</h3>
              <p className="text-sm text-slate-600">Foundation, framing, roof, and building envelope evaluation.</p>
            </div>
            <div className="rounded border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Mechanical & HVAC</h3>
              <p className="text-sm text-slate-600">Commercial heating, cooling, and ventilation system assessment.</p>
            </div>
            <div className="rounded border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Electrical Systems</h3>
              <p className="text-sm text-slate-600">Service panels, distribution, and electrical safety compliance.</p>
            </div>
            <div className="rounded border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Plumbing & Fire Safety</h3>
              <p className="text-sm text-slate-600">Water supply, drainage, sprinkler systems, and fire protection.</p>
            </div>
            <div className="rounded border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">ADA Compliance</h3>
              <p className="text-sm text-slate-600">Accessibility features and compliance with ADA requirements.</p>
            </div>
            <div className="rounded border border-slate-200 bg-gradient-to-br from-white to-sky-50 p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Site & Parking</h3>
              <p className="text-sm text-slate-600">Parking lot condition, drainage, and site accessibility.</p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Property Types Section */}
      <RevealSection className="section-shell bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Property Types</p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">We Inspect Various Commercial Properties</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded border border-slate-200 bg-white p-6 text-center">
              <h3 className="font-semibold text-slate-900">Retail Buildings</h3>
              <p className="mt-2 text-sm text-slate-600">Storefronts, shopping centers, and retail spaces</p>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6 text-center">
              <h3 className="font-semibold text-slate-900">Office Buildings</h3>
              <p className="mt-2 text-sm text-slate-600">Professional offices and commercial workspaces</p>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6 text-center">
              <h3 className="font-semibold text-slate-900">Multi-Family</h3>
              <p className="mt-2 text-sm text-slate-600">Apartment buildings and multi-unit properties</p>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6 text-center">
              <h3 className="font-semibold text-slate-900">Light Industrial</h3>
              <p className="mt-2 text-sm text-slate-600">Warehouses and light manufacturing facilities</p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* How It Works Section */}
      <RevealSection className="section-shell bg-white">
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
              <h3 className="mb-2 text-xl font-semibold text-slate-900">Consultation</h3>
              <p className="text-sm text-slate-600">We discuss your property type, concerns, and inspection scope requirements.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded bg-sky-600 text-2xl font-bold text-white">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">On-Site Evaluation</h3>
              <p className="text-sm text-slate-600">Comprehensive inspection of all major systems and building components.</p>
            </div>
            <div className="text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded bg-sky-600 text-2xl font-bold text-white">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold text-slate-900">Detailed Report</h3>
              <p className="text-sm text-slate-600">Receive a professional report with findings, photos, and capital planning guidance.</p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* FAQ Section */}
      <RevealSection className="section-shell bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">Knowledge</p>
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Answered Service Questions</h2>
          </div>

          <div className="space-y-4">
            <div className="rounded border border-slate-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Time Needed for Evaluation</h3>
              <p className="text-sm text-slate-600">
                Commercial inspections vary based on building size and complexity. Most take 1-2 days for thorough evaluation and documentation.
              </p>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Can I Request a Re-Evaluation?</h3>
              <p className="text-sm text-slate-600">
                Yes, we offer follow-up inspections to verify repairs or provide updated assessments for refinancing or property management needs.
              </p>
            </div>
            <div className="rounded border border-slate-200 bg-white p-6">
              <h3 className="mb-2 text-lg font-semibold text-slate-900">Do You Provide Cost Estimates?</h3>
              <p className="text-sm text-slate-600">
                We include order-of-magnitude cost ranges for major repairs to aid in budgeting and negotiations. Detailed bids can be coordinated with contractors.
              </p>
            </div>
          </div>
        </div>
      </RevealSection>

      {/* Contact Form Section */}
      <RevealSection className="section-shell bg-[#1e3a5f]">
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
      </RevealSection>
    </>
  );
}

