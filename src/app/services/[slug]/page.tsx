import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { IconFeature } from "@/components/ui/IconFeature";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { serviceDetails, ServiceSlug } from "@/lib/content";
import { siteConfig } from "@/lib/site";

type ServiceDetailPageProps = {
  params: { slug: ServiceSlug };
};

export function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }));
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const detail = serviceDetails[params.slug];
  if (!detail) {
    notFound();
  }

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: detail.name },
  ];

  return (
    <div className="space-y-12">
      <section className="section-shell bg-sky-50/80">
        <div className="mx-auto max-w-5xl space-y-6 px-4 md:px-6">
          <Breadcrumbs crumbs={crumbs} />
          <p className="eyebrow">{detail.eyebrow}</p>
          <h1 className="text-4xl font-semibold text-slate-900">{detail.title}</h1>
          <p className="text-lg text-slate-600">{detail.description}</p>
          <p className="rounded-2xl border border-sky-100 bg-white/90 p-4 text-sm text-slate-600">
            {detail.heroNote}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={siteConfig.nav.cta.href} className="btn btn-primary">
              {detail.ctaLabel}
            </Link>
            <Link href="/contact" className="btn btn-outline">
              Talk with Hassan
            </Link>
          </div>
        </div>
      </section>

      <SectionBlock title="What to expect" description="Highlights from this service.">
        <div className="grid gap-4 md:grid-cols-3">
          {detail.highlights.map((highlight) => (
            <IconFeature key={highlight} title={highlight} description="" icon="✓" />
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="Common findings" description="Items we frequently document during this inspection.">
        <div className="rounded-3xl border border-sky-100 bg-white/80 p-6">
          <ul className="space-y-3 text-sm text-slate-600">
            {detail.findings.map((finding) => (
              <li key={finding} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-slate-900/40" />
                <span>{finding}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionBlock>

      <SectionBlock title="Process" description="How we move from booking to final report.">
        <div className="grid gap-4 md:grid-cols-3">
          {detail.process.map((step) => (
            <IconFeature key={step.step} icon={step.step} title={step.title} description={step.description} />
          ))}
        </div>
      </SectionBlock>

      <SectionBlock title="FAQs" description="Still curious? Start here or contact us.">
        <FAQAccordion items={detail.faqs} />
      </SectionBlock>

      <section className="section-shell bg-gradient-to-r from-sky-600 via-indigo-600 to-sky-700 text-white">
        <div className="mx-auto max-w-4xl space-y-4 px-4 text-center md:px-6">
          <p className="eyebrow text-slate-200">Book with confidence</p>
          <h2 className="text-3xl font-semibold">
            Ready to schedule your {detail.name.toLowerCase()}?
          </h2>
          <p className="text-slate-300">
            Send your preferred dates and we’ll confirm availability, pricing, and prep steps.
          </p>
          <Link href={siteConfig.nav.cta.href} className="btn btn-primary justify-center">
            {detail.ctaLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}

function SectionBlock({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="section-shell bg-white/80">
      <div className="mx-auto max-w-6xl space-y-6 px-4 md:px-6">
        <SectionHeading align="left" title={title} description={description} />
        {children}
      </div>
    </section>
  );
}

