export type NavItem = {
  label: string;
  href: string;
};

export type ServiceNavItem = NavItem & {
  summary: string;
};

export const servicesNav: ServiceNavItem[] = [
  {
    label: "Home Inspection",
    href: "/services/home-inspection",
    summary: "Full structural, mechanical, and safety review for buyers or sellers.",
  },
  {
    label: "Sewer Scope Inspection",
    href: "/services/sewer-scope",
    summary: "Camera footage of lateral lines to surface breaks, roots, or blockages.",
  },
  {
    label: "Radon Testing",
    href: "/services/radon-testing",
    summary: "Continuous monitoring to detect hazardous levels before you move in.",
  },
  {
    label: "Pool Inspection",
    href: "/services/pool-inspection",
    summary: "Safety checks for structure, equipment, and water-quality systems.",
  },
  {
    label: "Commercial Inspection",
    href: "/services/commercial-inspection",
    summary: "Due-diligence reporting for retail, multi-family, and mixed-use assets.",
  },
  {
    label: "Pre-Listing Inspection",
    href: "/services/pre-listing-inspection",
    summary: "Document conditions before listing to prevent surprises during escrow.",
  },
];

export const siteConfig = {
  name: "IQ Inspections",
  description:
    "Certified home inspection specialists delivering detailed, modern reports across Southeast Michigan.",
  url: "https://www.iqinspectmi.com",
  nav: {
    primary: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Resources", href: "/#resources" },
      { label: "Contact", href: "/contact" },
    ] satisfies NavItem[],
    services: servicesNav,
    cta: {
      label: "Schedule Inspection",
      href: "/contact",
    },
  },
  contact: {
    phone: "(313) 652-5104",
    phoneHref: "tel:+13136525104",
    email: "hass@iqinspectmi.com",
    emailHref: "mailto:hass@iqinspectmi.com",
    address: "Metro Detroit & surrounding communities",
    hours: "Mon – Sat · 8 AM – 7 PM",
  },
  social: [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61578557468087" },
    { label: "Instagram", href: "https://www.instagram.com/inspector_hass/" },
  ],
};

