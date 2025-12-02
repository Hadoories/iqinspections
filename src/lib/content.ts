import { servicesNav } from "./site";

export type Statistic = { value: string; label: string };
export type Feature = { title: string; description: string };
export type FAQItem = { question: string; answer: string };
export type ProcessStep = Feature & { step: string };

export const homeHero = {
  eyebrow: "Certified • Modern • Detailed",
  title: "Professional inspections that keep your transaction moving forward.",
  description:
    "From first-time buyers to seasoned investors, IQ Inspections delivers easy-to-read reports, HD imagery, and practical guidance so you can negotiate with confidence.",
  highlights: [
    "Same-day digital reporting with repair recommendations",
    "Thermal imaging, moisture screening, and drone-supported visuals",
    "Serving Metro Detroit, Ann Arbor, and surrounding communities",
  ],
  stats: [
    { value: "500+", label: "Residential & commercial inspections completed" },
    { value: "24 hrs", label: "Average report delivery window" },
    { value: "98%", label: "Clients who would refer us to a friend" },
  ] satisfies Statistic[],
  primaryCta: { label: "Schedule an inspection", href: "/contact" },
  secondaryCta: { label: "Explore services", href: "/services" },
};

export const homeValues: Feature[] = [
  {
    title: "Clarity over complexity",
    description:
      "Every finding is paired with accessible language, severity tags, and repair suggestions you can act on.",
  },
  {
    title: "Technology forward",
    description:
      "High-resolution imagery, sewer scopes, and radon monitoring ensure nothing is left to guesswork.",
  },
  {
    title: "Client-first guidance",
    description:
      "Walk-throughs, recap calls, and prioritized punch lists keep agents and clients aligned.",
  },
];

export const inspectorProfile = {
  name: "Hassan Alzubaidi",
  credentials: "Certified Professional Inspector® · Owner, IQ Inspections",
  shortBio:
    "A background in construction management and building science helps Hassan translate technical findings into actionable next steps for buyers, sellers, and commercial investors.",
  bullets: [
    "InterNACHI CPI®, fully insured, and continuing education focused.",
    "Experienced with historic homes, new builds, and light commercial assets.",
    "Dedicated to educating clients before, during, and after every inspection.",
  ],
};

export const certificationBadges = [
  "InterNACHI Certified Professional Inspector",
  "FAA Part 107 Remote Pilot",
  "Radon Measurement Professional",
  "Thermal Imaging Certified",
];

export const testimonials = [
  {
    quote:
      "IQ Inspections found hidden foundation issues and gave us the leverage to negotiate repairs worth thousands. The report layout was the best I’ve seen.",
    author: "Danielle L.",
    role: "Buyer · Royal Oak",
  },
  {
    quote:
      "Hassan walked my seller through every item before we listed. When offers arrived, there were no surprises or concessions. Huge time saver.",
    author: "Marcus Hill",
    role: "Listing Agent · Detroit",
  },
  {
    quote:
      "The sewer scope video, radon data, and thermal images were included in one dashboard. My clients could understand the entire property in minutes.",
    author: "Priya Shah",
    role: "Broker · Ann Arbor",
  },
] as const;

export const homeProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Book + prep",
    description:
      "Schedule online or by phone. Receive an instant confirmation and checklist so the property is ready.",
  },
  {
    step: "02",
    title: "Inspect + educate",
    description:
      "We review structure, mechanicals, safety, and specialty systems while narrating key takeaways on-site.",
  },
  {
    step: "03",
    title: "Report + next steps",
    description:
      "Within 24 hours you’ll receive a modern report, annotated media, and prioritized action list.",
  },
];

export const generalFAQs: FAQItem[] = [
  {
    question: "How quickly will I receive my inspection report?",
    answer:
      "Most reports are delivered the same day—always within 24 hours. Sewer scope footage, radon results, and thermal imaging are embedded directly in the report portal.",
  },
  {
    question: "Can I attend the inspection?",
    answer:
      "Absolutely. We encourage clients and agents to join the final walkthrough so we can demonstrate findings in person and answer questions live.",
  },
  {
    question: "Do you travel outside Metro Detroit?",
    answer:
      "Yes. We routinely service Ann Arbor, Lansing, Downriver, Flint, and surrounding communities. Travel fees may apply for sites farther than 60 minutes from Dearborn.",
  },
];

export type ServiceSlug =
  | "home-inspection"
  | "sewer-scope"
  | "radon-testing"
  | "pool-inspection"
  | "commercial-inspection"
  | "pre-listing-inspection";

export type ServiceDetail = {
  slug: ServiceSlug;
  name: string;
  eyebrow: string;
  title: string;
  description: string;
  heroNote: string;
  highlights: string[];
  findings: string[];
  faqs: FAQItem[];
  process: ProcessStep[];
  ctaLabel: string;
};

const serviceDetailsMap: Record<ServiceSlug, ServiceDetail> = {
  "home-inspection": {
    slug: "home-inspection",
    name: "Home Inspection",
    eyebrow: "Buyer & Seller Reports",
    title: "Complete insight into every major system of the home.",
    description:
      "Structure, roofing, electrical, HVAC, plumbing, insulation, and safety devices are reviewed with modern tools and HD imagery. Receive a prioritized list of action items to inform negotiations or punch lists.",
    heroNote: "Includes thermal imaging, moisture screening, and drone roof review when accessible.",
    highlights: [
      "Same-day digital report with repair priority matrix",
      "Detailed photo and video documentation",
      "Agent summary & shareable repair request builder",
    ],
    findings: [
      "Foundation settlement, cracks, and grading issues",
      "Mechanical lifespan, safety hazards, and missing permits",
      "Roof and attic ventilation/insulation deficiencies",
      "Appliance and plumbing fixture leaks or recalls",
    ],
    faqs: [
      {
        question: "How long does a typical home inspection take?",
        answer:
          "Plan for 2–3 hours for most homes under 3,000 sq. ft. Larger or historic homes may take longer so we can document every detail accurately.",
      },
      {
        question: "Do you inspect newly built homes?",
        answer:
          "Yes. Pre-drywall, final, and 11-month warranty inspections help you hold builders accountable before warranties expire.",
      },
    ],
    process: homeProcess,
    ctaLabel: "Book a home inspection",
  },
  "sewer-scope": {
    slug: "sewer-scope",
    name: "Sewer Scope Inspection",
    eyebrow: "Know what’s happening underground",
    title: "Camera verification of lateral lines before costly surprises appear.",
    description:
      "We run a high-resolution camera through the sewer lateral to identify root intrusion, offsets, bellies, grease, or collapsed sections. You’ll receive annotated video and repair recommendations.",
    heroNote: "Recommended for homes built before 1990 or any property with mature trees or slow drains.",
    highlights: [
      "1080p video delivered in your inspection portal",
      "Narrated findings with timestamps",
      "Recommendations for cleaning vs. excavation",
    ],
    findings: [
      "Root intrusion or scaling from cast iron lines",
      "Cracked clay, broken PVC, or offset joints",
      "Standing water and blockages that require jetting",
      "Improper tap connections to the city main",
    ],
    faqs: [
      {
        question: "Is a sewer scope necessary for newer homes?",
        answer:
          "Yes—construction debris, poor grading, or installation mistakes can impact new builds. A quick scope provides peace of mind.",
      },
      {
        question: "Will you mark the location of a defect?",
        answer:
          "We capture depth and footage markers within the video. Contractors can use those measurements to pinpoint repairs.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Access & prep",
        description: "We locate a cleanout or pulling trap and flush lines to ensure clear visibility.",
      },
      {
        step: "02",
        title: "Camera pass",
        description:
          "A waterproof HD camera documents the entire lateral. We narrate concerns and record depth markers.",
      },
      {
        step: "03",
        title: "Report + video",
        description:
          "Receive the video file, still images, and remediation notes immediately inside your inspection portal.",
      },
    ],
    ctaLabel: "Schedule a sewer scope",
  },
  "radon-testing": {
    slug: "radon-testing",
    name: "Radon Testing",
    eyebrow: "48-hour monitoring",
    title: "EPA-compliant testing that keeps indoor air safe.",
    description:
      "Continuous monitors measure radon fluctuations over 48 hours. Certified professionals interpret the data and deliver mitigation recommendations if levels exceed 4.0 pCi/L.",
    heroNote: "Short-term testing that meets lender and relocation requirements.",
    highlights: [
      "Calibrated continuous radon monitors",
      "Chain of custody documentation",
      "Mitigation guidance and contractor referrals",
    ],
    findings: [
      "Average and peak radon concentrations",
      "Tamper detection and closed-house compliance",
      "Recommendations for mitigation systems or retesting",
    ],
    faqs: [
      {
        question: "What if radon levels spike during the test?",
        answer:
          "We analyze both the average and hourly peaks. If levels exceed EPA guidance, we outline mitigation next steps and can schedule a follow-up test after mitigation.",
      },
      {
        question: "Do you install mitigation systems?",
        answer:
          "We focus on unbiased testing and can recommend trusted mitigation contractors once results are confirmed.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Deploy monitor",
        description: "We place calibrated devices in the lowest livable area following EPA protocol.",
      },
      {
        step: "02",
        title: "48-hour sampling",
        description: "Continuous readings capture fluctuations day and night with tamper detection.",
      },
      {
        step: "03",
        title: "Report + guidance",
        description: "Receive a PDF report with mitigation recommendations and retest timelines.",
      },
    ],
    ctaLabel: "Book radon testing",
  },
  "pool-inspection": {
    slug: "pool-inspection",
    name: "Pool Inspection",
    eyebrow: "Seasonal + year-round",
    title: "Safety, structure, and equipment checks for pools and spas.",
    description:
      "We inspect shell integrity, coping, decking, drains, heaters, pumps, electrical bonding, lighting, and safety barriers to ensure your pool or spa is ready for daily use.",
    heroNote: "Ideal before closing, after winterization, or prior to listing.",
    highlights: [
      "Visual and functional review of pumps, filters, and heaters",
      "Safety barrier, gate, and electrical bonding verification",
      "Action plan for repairs or opening services",
    ],
    findings: [
      "Surface cracks, delamination, or tile issues",
      "Equipment leaks, suction issues, or bonding concerns",
      "Improper drain covers or outdated safety hardware",
    ],
    faqs: [
      {
        question: "Do you test water chemistry?",
        answer:
          "We perform visual and functional inspections of equipment but do not provide lab testing. We can coordinate with your pool service for chemistry analysis.",
      },
      {
        question: "Can you inspect during winter?",
        answer:
          "Yes. We evaluate accessible components, cover condition, and plumbing to ensure a smooth opening come spring.",
      },
    ],
    process: homeProcess,
    ctaLabel: "Schedule a pool inspection",
  },
  "commercial-inspection": {
    slug: "commercial-inspection",
    name: "Commercial Inspection",
    eyebrow: "Retail | Office | Multi-family",
    title: "Due-diligence reporting tailored to investors and facility teams.",
    description:
      "We align scope with your lender or SBA requirements, documenting structural systems, roofing, mechanical equipment, life-safety, and site conditions. Receive capital-planning guidance within a concise PDF.",
    heroNote: "Ideal for retail storefronts, light industrial, hospitality, and multi-family buildings up to 40,000 sq. ft.",
    highlights: [
      "Custom scope based on property type and exit strategy",
      "Infrared, aerial roofing, and moisture mapping available",
      "Actionable reserve table for budgeting repairs",
    ],
    findings: [
      "Roof and envelope condition with estimated remaining life",
      "Mechanical and electrical equipment inventory",
      "Fire, ADA, and safety compliance gaps",
      "Site drainage, parking lot, and accessibility issues",
    ],
    faqs: [
      {
        question: "Can you coordinate specialty vendors?",
        answer:
          "Yes. We can add structural engineers, HVAC specialists, or elevator consultants to create a full Property Condition Assessment.",
      },
      {
        question: "Do you provide cost estimates?",
        answer:
          "We include order-of-magnitude cost ranges for major repairs. Detailed bids can be coordinated with our contractor partners.",
      },
    ],
    process: [
      {
        step: "01",
        title: "Scope alignment",
        description: "We review your purchase agreement, SBA checklist, or lease requirements.",
      },
      {
        step: "02",
        title: "On-site evaluation",
        description: "Our team documents systems, interviews facility staff, and collects media within 1–2 days.",
      },
      {
        step: "03",
        title: "Reporting + roadmap",
        description:
          "You’ll receive a capital-planning summary, photos, and priority list to aid negotiations.",
      },
    ],
    ctaLabel: "Plan a commercial inspection",
  },
  "pre-listing-inspection": {
    slug: "pre-listing-inspection",
    name: "Pre-Listing Inspection",
    eyebrow: "Sell with confidence",
    title: "Document the property before it hits the market.",
    description:
      "Reduce renegotiations by surfacing issues early. We create a clean, sharable report that sellers can reference when completing disclosures or scheduling repairs.",
    heroNote: "Popular with top performing agents across Southeast Michigan.",
    highlights: [
      "Identifies issues before buyers walk the property",
      "Assists with repair quotes and contractor coordination",
      "Marketing-ready summary PDF for showings",
    ],
    findings: [
      "Deferred maintenance or cosmetic red flags",
      "Safety hazards that may delay closing",
      "Minor repairs that pack major ROI when addressed early",
    ],
    faqs: [
      {
        question: "Will buyers accept your report?",
        answer:
          "Most buyers appreciate transparent documentation. We also provide a discounted follow-up inspection if the buyer wants us to reinspect repairs.",
      },
      {
        question: "How soon should we schedule?",
        answer:
          "Ideally 2–3 weeks before listing. This allows time to complete repairs, gather receipts, and refresh marketing materials.",
      },
    ],
    process: homeProcess,
    ctaLabel: "Book a pre-listing inspection",
  },
};

export const servicesOverviewCards = servicesNav.map((item) => {
  const slug = item.href.split("/").pop() as ServiceSlug;
  const detail = serviceDetailsMap[slug];

  return {
    title: detail.name,
    summary: item.summary,
    href: item.href,
    highlights: detail.highlights.slice(0, 2),
  };
});

export const contactContent = {
  title: "Ready to protect your investment?",
  description:
    "Tell us about the property and timeframe. We’ll reply with scheduling options plus a prep checklist.",
  formFields: [
    { name: "name", label: "Full Name", type: "text", required: true },
    { name: "email", label: "Email", type: "email", required: true },
    { name: "phone", label: "Phone", type: "tel", required: true },
    { name: "service", label: "Service Needed", type: "select", required: true },
    { name: "address", label: "Property Address", type: "text", required: false },
    { name: "message", label: "Details & Preferred Dates", type: "textarea", required: false },
  ] as const,
};

export const aboutStory = {
  mission:
    "Deliver precision reporting and calm, educational guidance so every client understands their property before committing to the future.",
  vision:
    "Raise the standard for inspections in Michigan with technology, transparency, and service that feels bespoke.",
  story:
    "IQ Inspections was born after years of seeing buyers overwhelmed by dense reports and missed defects. We created a firm that pairs deep technical knowledge with modern visuals so decisions feel simple, not stressful.",
};

export const resourcesHighlight = [
  {
    title: "Inspection prep checklist",
    description: "Share this with sellers or tenants to ensure access to every space on inspection day.",
  },
  {
    title: "Sample report",
    description: "Preview how we organize findings, media, and repair recommendations.",
  },
  {
    title: "Preferred vendors",
    description: "Need mitigation, plumbing, or structural pros? We have vetted partners to refer.",
  },
];

export { serviceDetailsMap as serviceDetails };

