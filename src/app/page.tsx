import {
  CredibilityBandSection,
  FAQSection,
  InspectorSpotlightSection,
  ProcessSection,
  ServicesSection,
  TestimonialsSection,
  WhyWorkSection,
} from "@/components/home/HomeSections";
import { Hero } from "@/components/ui/Hero";
import { homeHero } from "@/lib/content";

export default function Home() {
  const heroContent = {
    eyebrow: "Certified • Modern • Detailed",
    title: "Clear. Reliable. Professional Inspections You Can Trust.",
    description:
      "Serving Dearborn, Wayne County, and surrounding areas with detailed home inspections and specialty services.",
    highlights: [] as string[],
    stats: homeHero.stats,
    primaryCta: { label: "Schedule Your Inspection Today", href: homeHero.primaryCta?.href ?? "/contact" },
    secondaryCta: { label: "Explore services", href: homeHero.secondaryCta?.href ?? "/services" },
  };

  return (
    <>
      <Hero {...heroContent} />
      <ServicesSection />
      <InspectorSpotlightSection />
      <ProcessSection />
      <WhyWorkSection />
      <FAQSection />
      <TestimonialsSection />
      <CredibilityBandSection />
    </>
  );
}
