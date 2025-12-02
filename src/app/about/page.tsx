import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { IconFeature } from "@/components/ui/IconFeature";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  aboutStory,
  certificationBadges,
  homeValues,
  inspectorProfile,
} from "@/lib/content";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "About" },
];

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="section-shell bg-sky-50/80">
        <div className="mx-auto max-w-5xl space-y-6 px-4 md:px-6">
          <Breadcrumbs crumbs={crumbs} />
          <SectionHeading
            align="left"
            eyebrow="About IQ Inspections"
            title="Professional reporting rooted in construction know-how."
            description={aboutStory.story}
          />
          <div className="grid gap-6 rounded-3xl border border-sky-100 bg-white/90 p-6 md:grid-cols-2">
            <div>
              <p className="eyebrow">Mission</p>
              <p className="text-lg text-slate-700">{aboutStory.mission}</p>
            </div>
            <div>
              <p className="eyebrow">Vision</p>
              <p className="text-lg text-slate-700">{aboutStory.vision}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[0.7fr_1fr] md:px-6">
          <div className="rounded-3xl border border-sky-100 bg-white/90 p-6">
            <p className="eyebrow text-slate-500">Inspector</p>
            <h2 className="text-3xl font-semibold text-slate-900">
              {inspectorProfile.name}
            </h2>
            <p className="text-sm uppercase tracking-wide text-slate-500">
              {inspectorProfile.credentials}
            </p>
            <p className="mt-4 text-base text-slate-700">
              {inspectorProfile.shortBio}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {inspectorProfile.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-slate-900/40" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6">
            <SectionHeading
              align="left"
              eyebrow="Values"
              title="What sets our reports apart?"
              description="We combine builder-level knowledge with modern reporting to reduce stress for everyone at the table."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {homeValues.map((value) => (
                <IconFeature
                  key={value.title}
                  icon="➤"
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-sky-50/80">
        <div className="mx-auto max-w-5xl space-y-6 px-4 text-center md:px-6">
          <SectionHeading
            title="Credentials & Partnerships"
            description="Ongoing training, industry certifications, and partnerships keep our standards high."
          />
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold uppercase tracking-wide text-slate-600">
            {certificationBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-sky-100 px-4 py-2"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

