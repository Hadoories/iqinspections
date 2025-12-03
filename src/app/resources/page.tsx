import Image from "next/image";
import Link from "next/link";

import { RevealSection } from "@/components/ui/RevealSection";

const insightColumns = [
  {
    heading: "What to Expect During an Inspection",
    bullets: [
      "Pre-inspection conversation to understand your goals",
      "Full exterior + interior walkthrough documented with photos",
      "Verbal recap on site before we depart",
      "Digital summary emailed within 24 hours",
    ],
  },
  {
    heading: "First-Time Homebuyer Checklist",
    bullets: [
      "Gather seller disclosures and prior repair receipts",
      "Confirm utilities are on for testing systems",
      "Bring a notebook or shareable doc for questions",
      "Plan time for a recap call after reviewing the report",
    ],
  },
  {
    heading: "Top 10 Issues Found in Homes",
    bullets: [
      "Improper grading causing moisture near foundation",
      "Deferred HVAC filter changes and dirty coils",
      "Aging roofs with missing flashing or sealant",
      "Loose electrical connections or missing GFCIs",
    ],
  },
];

const maintenanceTips = [
  {
    title: "Spring Maintenance Tips",
    tips: [
      "Inspect gutters and downspouts for winter damage",
      "Test sump pumps and outdoor faucets",
      "Schedule HVAC tune-up before cooling season",
      "Check grading to keep water off the foundation",
    ],
  },
  {
    title: "Fall Maintenance Tips",
    tips: [
      "Clean leaves from gutters and yard drains",
      "Service the furnace and replace filters",
      "Seal gaps around windows and doors",
      "Drain and store outdoor hoses",
    ],
  },
  {
    title: "Winter Home Prep Tips",
    tips: [
      "Insulate exposed pipes in unheated spaces",
      "Test smoke and carbon monoxide detectors",
      "Keep walkways clear of snow and ice",
      "Monitor attic for ice dam formation",
    ],
  },
];

const toolLinks = [
  { title: "Mortgage Calculator", href: "https://www.bankrate.com/calculators/mortgages/mortgage-calculator.aspx" },
  { title: "Property Tax Estimator", href: "https://smartasset.com/taxes/property-taxes" },
  { title: "Insurance Quote Tool", href: "https://www.policygenius.com" },
  { title: "Energy Savings Calculator", href: "https://www.energy.gov/eere/buildings/energy-saver" },
];

const faqs = [
  { question: "How long does an inspection take?", answer: "Most inspections take 2–4 hours depending on the size and age of the property." },
  { question: "Do I need to be there?", answer: "It’s optional but recommended. You can see findings firsthand and ask questions on site." },
  { question: "How fast do I get the report?", answer: "Digital reports are delivered within 24 hours—usually the same day." },
  { question: "What if issues are found?", answer: "Your report clearly explains severity and recommended actions so you can prioritize repairs or negotiate." },
  { question: "Do you inspect for mold?", answer: "Yes. We offer add-on mold testing and can recommend further lab analysis if needed." },
  {
    question: "How do I schedule?",
    answer: "Book online anytime or call our office at (313) 652-5104 to lock in your appointment.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="bg-gradient-to-b from-[#f1f6ff] via-white to-[#eef4ff]">
      <RevealSection className="section-shell py-16">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-white/60 bg-gradient-to-r from-[#e3efff] via-white to-[#f8fbff] px-6 py-12 shadow-[0_40px_90px_rgba(15,76,129,0.12)] md:px-10">
          <div aria-hidden className="absolute -left-12 top-8 h-48 w-48 rounded-[36px] bg-sky-200/50 blur-3xl" />
          <div aria-hidden className="absolute bottom-6 right-8 h-24 w-24 rounded-full border border-sky-100/70" />
          <div className="relative grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">Resources</p>
              <h1 className="text-4xl font-bold text-slate-900">Guides, Tools, and Answers for Every Homeowner</h1>
              <p className="text-base text-slate-600">
                Use these curated resources to prepare for your inspection, keep your home in top shape, and make confident decisions every step of the way.
              </p>
            </div>
            <div className="relative h-72 rounded-[32px] border border-white/60 bg-white shadow-[0_30px_80px_rgba(15,76,129,0.18)]">
              <Image
                src="/homepage/hero-magnify.jpg"
                alt="Inspector reviewing home documents"
                fill
                className="rounded-[32px] object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-[32px] border border-white/40" />
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell py-10">
        <div className="relative mx-auto max-w-6xl space-y-8 overflow-hidden rounded-[36px] border border-slate-100 bg-gradient-to-br from-white via-[#f4f8ff] to-white px-4 py-10 shadow-[0_30px_80px_rgba(15,76,129,0.1)] md:px-10">
          <div aria-hidden className="absolute -right-10 top-8 h-32 w-32 rounded-full bg-sky-100/60 blur-2xl" />
          <div className="relative space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">Homebuyer Guides</p>
            <h2 className="text-3xl font-bold text-slate-900">Inspection Insights at a Glance</h2>
            <p className="text-base text-slate-600">
              Quick-reference highlights so you can prep for your inspection, stay organized on site, and understand the most common findings.
            </p>
          </div>
          <div className="relative grid gap-6 md:grid-cols-3">
            {insightColumns.map((insight) => (
              <div key={insight.heading} className="relative rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_20px_55px_rgba(15,76,129,0.08)]">
                <div className="absolute inset-x-6 top-0 -translate-y-1/2 rounded-2xl bg-gradient-to-r from-[#0f4c81] via-[#2574c2] to-[#7fc3ff] px-4 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-white">
                  Guide
                </div>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{insight.heading}</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {insight.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-sky-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell py-10">
        <div className="mx-auto max-w-6xl space-y-8 rounded-[36px] bg-white/90 px-4 py-10 shadow-[0_25px_70px_rgba(15,76,129,0.09)] md:px-10">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">Maintenance Tips</p>
            <h2 className="text-3xl font-bold text-slate-900">Seasonal Checklists</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {maintenanceTips.map((season) => (
              <div key={season.title} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_20px_50px_rgba(15,76,129,0.07)]">
                <h3 className="text-xl font-semibold text-slate-900">{season.title}</h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-600">
                  {season.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-sky-500" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell py-10">
        <div className="mx-auto max-w-6xl space-y-8 rounded-[36px] border border-white/60 bg-gradient-to-br from-white via-[#f0f6ff] to-white px-4 py-12 shadow-[0_30px_90px_rgba(15,76,129,0.11)] md:px-10">
          <div className="space-y-2 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">FAQ</p>
            <h2 className="text-3xl font-bold text-slate-900">Common Questions</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-3xl border border-slate-100 bg-white p-6 text-left shadow-[0_30px_70px_rgba(15,76,129,0.08)]">
                <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell py-16">
        <div className="mx-auto max-w-4xl rounded-[36px] border border-white/40 bg-gradient-to-r from-[#0f4c81] via-[#1e64a5] to-[#4b8dd4] px-6 py-12 text-center text-white shadow-[0_35px_95px_rgba(15,76,129,0.38)]">
          <h2 className="text-3xl font-bold">Need Help Understanding Your Home?</h2>
          <p className="mt-4 text-base text-white/90">
            Talk with a certified inspector who can explain findings, outline next steps, and schedule your next service.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#7fc3ff] via-[#3f8bdb] to-[#0f4c81] px-6 py-3 text-base font-bold text-white shadow-[0_10px_30px_rgba(15,76,129,0.35)] transition hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </RevealSection>
    </div>
  );
}

