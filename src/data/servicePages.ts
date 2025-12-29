import { ServicePageContent } from "@/components/services/ServicePageLayout";

const placeholderImage = "/homepage/services_431426276.jpeg";

const defaultKnowledge = (
  step: string,
  time: string,
  how: string,
  reevaluation: string
) => [
  { title: "Step To Get Service", body: step },
  { title: "Time Needed for Evaluation", body: time },
  { title: "How Do I Get Service?", body: how },
  { title: "Can I Request a Re-Evaluation?", body: reevaluation },
];

export const servicePageContent: Record<string, ServicePageContent> = {
  homeInspection: {
    slug: "home-inspection",
    breadcrumbs: [
      { label: "Homepage", href: "/" },
      { label: "Home Inspection", href: "/services/home-inspection" },
    ],
    hero: {
      title: "Home Inspection",
      headline: "Thorough Inspections for Confident Decisions",
      description:
        "Buying a home is one of the biggest investments you’ll make. Our inspections provide a clear picture of the property’s condition so you can move forward with confidence.",
      image: {
        src: placeholderImage,
        alt: "Cropped shot of a craftsman checking a miniature house with a stethoscope",
      },
    },
    detailImage: {
      src: "/homepage/Homeservice_1527397006.jpeg",
      alt: "Inspector completing a digital home inspection checklist on a laptop",
    },
    featurePanel: {
      eyebrow: "Key Features",
      title: "What’s Included",
      bullets: [
        "Foundation, roof, and structure review",
        "Electrical, plumbing, and HVAC systems",
        "Interior & exterior components",
        "Attic, insulation, and ventilation analysis",
      ],
    },
    knowledge: {
      eyebrow: "Knowledge",
      title: "Knowledge Answered Service",
      entries: defaultKnowledge(
        "Schedule online or call our team. Provide basic property details and we’ll arrange a convenient appointment time.",
        "Most inspections take 2–4 hours depending on square footage and system complexity.",
        "Book through our website or contact us directly. Our certified inspectors arrive fully equipped to document every detail.",
        "Absolutely. After repairs or updates, we can re-inspect to confirm items were resolved and provide updated documentation."
      ),
    },
    cta: {
      eyebrow: "Schedule A Call",
      title: "Fill This Form To Get Service Booking Quotation",
      buttonLabel: "Book a Home Inspection",
      buttonHref: "/contact?service=home-inspection",
    },
  },
  sewerScope: {
    slug: "sewer-scope",
    breadcrumbs: [
      { label: "Homepage", href: "/" },
      { label: "Sewer Scope Inspection", href: "/services/sewer-scope" },
    ],
    hero: {
      title: "Sewer Scope Inspection",
      headline: "Know What’s Happening Underground",
      description:
        "Hidden sewer issues can lead to expensive repairs. Our camera inspection identifies blockages, cracks, offsets, and buildup before they become major problems.",
      image: {
        src: "/homepage/Sewer scope header image.jpeg",
        alt: "Technicians reviewing sewer scope footage near HVAC units outside a home",
      },
    },
    detailImage: {
      src: "/homepage/sewer-scope-ins.jpg",
      alt: "Technician operating a sewer scope inspection camera and reel",
    },
    featurePanel: {
      eyebrow: "Key Features",
      title: "Common Findings",
      bullets: [
        "Root intrusion and cracked or broken lines",
        "Offsets in clay, cast iron, or PVC pipes",
        "Standing water, buildup, or debris blockages",
        "Recommendations for cleaning or repair",
      ],
    },
    knowledge: {
      eyebrow: "Knowledge",
      title: "Knowledge Answered Service",
      entries: defaultKnowledge(
        "Pick a time online or call us. Share where the clean-out is located and we’ll prep the equipment.",
        "Typical scopes take 30–60 minutes, including video capture and review with you on-site.",
        "Schedule through our booking page or ring us directly. We arrive with a high-resolution camera system to document the lateral line.",
        "Yes. After hydro-jetting or repairs, we can re-scope to verify the line is clear and properly repaired."
      ),
    },
    cta: {
      eyebrow: "Schedule A Call",
      title: "Fill This Form To Get Service Booking Quotation",
      buttonLabel: "Schedule a Sewer Scope",
      buttonHref: "/contact?service=sewer-scope",
    },
  },
  radonTesting: {
    slug: "radon-testing",
    breadcrumbs: [
      { label: "Homepage", href: "/" },
      { label: "Radon Testing", href: "/services/radon-testing" },
    ],
    hero: {
      title: "Radon Testing",
      headline: "Protect Your Family with Radon Testing",
      description:
        "Radon is an invisible, odorless gas that can impact health. Our professional testing ensures your home’s air quality is safe and provides peace of mind.",
      image: {
        src: "/homepage/Radon testing header.jpeg",
        alt: "Inspector reviewing equipment while walking through an attic",
      },
    },
    detailImage: {
      src: "/homepage/48-Hour+Radon+Testing.jpeg",
      alt: "Inspector operating radon testing equipment inside a home",
    },
    featurePanel: {
      eyebrow: "Key Features",
      title: "What’s Included",
      bullets: [
        "Continuous electronic monitoring for 48 hours",
        "Certified lab analysis and detailed reporting",
        "Action-level guidance and mitigation next steps",
      ],
    },
    knowledge: {
      eyebrow: "Knowledge",
      title: "Knowledge Answered Service",
      entries: defaultKnowledge(
        "Choose your testing window online or call our office. We’ll coordinate access and placement of the monitor.",
        "Monitoring generally runs for 48 hours, followed by same-day pickup and reporting.",
        "Book online or contact us directly. Our licensed tester installs calibrated equipment and explains the process.",
        "Yes. After mitigation or ventilation changes, we can retest to confirm radon levels remain below EPA action thresholds."
      ),
    },
    cta: {
      eyebrow: "Schedule A Call",
      title: "Fill This Form To Get Service Booking Quotation",
      buttonLabel: "Schedule Radon Testing",
      buttonHref: "/contact?service=radon-testing",
    },
  },
  poolInspection: {
    slug: "pool-inspection",
    breadcrumbs: [
      { label: "Homepage", href: "/" },
      { label: "Pool Inspection", href: "/services/pool-inspection" },
    ],
    hero: {
      title: "Pool Inspection",
      headline: "Enjoy Your Pool with Confidence",
      description:
        "We check pool structure, equipment, and safety features to ensure everything is in working order and safe for use.",
      image: {
        src: "/homepage/Pool inspectionn header.jpeg",
        alt: "Pool inspector testing water quality with gloved hands",
      },
    },
    detailImage: {
      src: "/homepage/Pool service.jpeg",
      alt: "Pool inspector recording notes beside residential pool equipment",
    },
    featurePanel: {
      eyebrow: "Key Features",
      title: "What We Inspect",
      bullets: [
        "Pool shell, decking, and coping",
        "Pumps, filters, heaters, and automation",
        "Safety barriers, gates, and electrical bonding",
      ],
    },
    knowledge: {
      eyebrow: "Knowledge",
      title: "Knowledge Answered Service",
      entries: defaultKnowledge(
        "Tell us about the pool type and equipment when booking so we arrive prepared for specialty systems.",
        "Most pool inspections take 60–90 minutes depending on size, features, and accessibility.",
        "Schedule online or contact us directly. We’ll examine structure, equipment performance, and safety devices.",
        "Yes. After repairs or seasonal openings, we can revisit to confirm equipment is operating safely.",
      ),
    },
    cta: {
      eyebrow: "Schedule A Call",
      title: "Fill This Form To Get Service Booking Quotation",
      buttonLabel: "Book a Pool Inspection",
      buttonHref: "/contact?service=pool-inspection",
    },
  },
  preListing: {
    slug: "pre-listing-inspection",
    breadcrumbs: [
      { label: "Homepage", href: "/" },
      { label: "Pre-Listing Inspection", href: "/services/pre-listing-inspection" },
    ],
    hero: {
      title: "Pre-Listing Inspection",
      headline: "Sell with Confidence",
      description:
        "Our pre-listing inspections help sellers identify issues before listing, giving you the chance to address them early and avoid surprises during negotiations.",
      image: {
        src: "/homepage/Pre listing header pic.jpeg",
        alt: "Inspector reviewing plans with homeowner outside of a house",
      },
    },
    detailImage: {
      src: "/homepage/Prelisting inspectionss.jpeg",
      alt: "Modern home with a for sale sign on the lawn",
    },
    featurePanel: {
      eyebrow: "Key Features",
      title: "What We Review",
      bullets: [
        "Major structural and mechanical systems",
        "Safety items that can slow a sale",
        "Recommended repairs and prioritized action list",
      ],
    },
    knowledge: {
      eyebrow: "Knowledge",
      title: "Knowledge Answered Service",
      entries: defaultKnowledge(
        "Schedule the inspection before listing photos or open houses so you can plan repairs with confidence.",
        "Plan for 2–3 hours on-site depending on the size and age of the property.",
        "Book online or contact our office. We coordinate access with homeowners, agents, or property managers.",
        "Yes. Once repairs are completed, we can re-inspect and provide an updated summary for prospective buyers."
      ),
    },
    cta: {
      eyebrow: "Schedule A Call",
      title: "Fill This Form To Get Service Booking Quotation",
      buttonLabel: "Book a Pre-Listing Inspection",
      buttonHref: "/contact?service=pre-listing-inspection",
    },
  },
};

