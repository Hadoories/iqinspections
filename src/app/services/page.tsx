import Link from "next/link";

import { IconFeature } from "@/components/ui/IconFeature";
import { RevealSection } from "@/components/ui/RevealSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { homeProcess, servicesOverviewCards } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function ServicesOverviewPage() {
  return (
    <div className="space-y-16">
      <RevealSection className="section-shell bg-sky-50/80">
        <div className="mx-auto max-w-6xl space-y-10 px-4 md:px-6">
          <SectionHeading
            align="left"
            eyebrow="Services"
            title="Detailed inspections for every scenario."
            description="Select any service to review scope, typical findings, FAQs, and booking details."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {servicesOverviewCards.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell bg-white/80">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[0.9fr_1.1fr] md:px-6">
          <div className="space-y-4">
            <SectionHeading
              align="left"
              eyebrow="Working with IQ"
              title="Our process keeps everyone aligned."
              description="Agents receive rapid turnaround, clients get transparent next steps, and sellers appreciate zero surprises."
            />
            <Link href={siteConfig.nav.cta.href} className="btn btn-primary">
              {siteConfig.nav.cta.label}
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {homeProcess.map((step) => (
              <IconFeature
                key={step.step}
                icon={step.step}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </RevealSection>
    </div>
  );
}

