import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function Footer() {
  const quickLinks = [
    { label: "Homepage", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-gradient-to-r from-[#c9e1ff] via-[#e3f0ff] to-[#f4f9ff] text-slate-800">
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="grid justify-items-center gap-10 text-center lg:grid-cols-[1.3fr_1fr_1fr_0.9fr] lg:justify-items-start lg:text-left">
          <div className="space-y-5">
            <Link href="/" className="inline-flex flex-col items-center gap-3 lg:flex-row lg:items-center">
              <Image
                src="/homepage/IQ-Inspections-BLACK-1024x295.png"
                alt="IQ Inspections logo"
                width={220}
                height={70}
                className="h-12 w-auto object-contain"
              />
            </Link>
            <div className="flex items-center justify-center gap-4 lg:justify-start">
              <Image
                src="/homepage/IMG_6618-removebg-preview-1.png"
                alt="ICA Certified Inspector badge"
                width={72}
                height={72}
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center gap-4 text-slate-600 lg:justify-start">
              {siteConfig.social.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#4f8fe5] text-white transition hover:bg-[#3a79c8]"
                >
                  {item.label === "Facebook" ? (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                      <path
                        d="M13.5 8H16V5h-2.5C11.57 5 10 6.57 10 8.5V10H8v3h2v7h3v-7h2.1l.4-3H13v-1.5c0-.28.22-.5.5-.5Z"
                        className="fill-white"
                      />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
                      <path
                        d="M7 3C4.24 3 2 5.24 2 8v8c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V8c0-2.76-2.24-5-5-5H7Z"
                        className="fill-white/15"
                      />
                      <path
                        d="M7 5h10c1.66 0 3 1.34 3 3v8c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V8c0-1.66 1.34-3 3-3Zm9.5 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-5.5 1C8.57 7.5 6.5 9.57 6.5 12s2.07 4.5 4.5 4.5 4.5-2.07 4.5-4.5-2.07-4.5-4.5-4.5Zm0 2c1.38 0 2.5 1.12 2.5 2.5s-1.12 2.5-2.5 2.5S8.5 13.88 8.5 12 9.62 9.5 11 9.5Z"
                        className="fill-white"
                      />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>

          <FooterLinkColumn title="Quick Links" links={quickLinks} />

          <FooterLinkColumn
            title="Our Services"
            links={siteConfig.nav.services.map((service) => ({
              label: service.label,
              href: service.href,
            }))}
          />

          <div className="w-full max-w-md rounded-2xl bg-[#0f5fab] p-6 text-center text-white shadow-2xl shadow-blue-900/20 lg:text-left">
            <p className="text-lg font-semibold">Let’s Connect</p>
            <div className="mt-4 space-y-4 text-sm text-white/90">
              <div>
                <p className="text-xs uppercase tracking-wide text-white/60">
                  Telephone
                </p>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="mt-1 inline-flex items-center justify-center gap-2 font-semibold text-white lg:justify-start"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-white/60">
                  Email Address
                </p>
                <a
                  href={siteConfig.contact.emailHref}
                  className="mt-1 inline-flex items-center justify-center gap-2 text-white lg:justify-start"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200/60 pt-6 text-sm text-slate-600">
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between md:text-left">
            <p className="mx-auto md:mx-0">
              Copyright © {new Date().getFullYear()} {siteConfig.name}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm font-semibold md:justify-end">
              <Link href={siteConfig.nav.cta.href} className="transition hover:text-slate-900">
                Schedule A Call
              </Link>
              <Link href="/terms" className="transition hover:text-slate-900">
                Term Of Use
              </Link>
              <Link href="/privacy" className="transition hover:text-slate-900">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterLinkColumnProps = {
  title: string;
  links: { label: string; href: string }[];
};

function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div className="w-full text-center lg:text-left">
      <p className="text-xl font-semibold text-slate-900">{title}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {links.map((link) => (
          <li key={link.href} className="flex items-center justify-center gap-3 lg:justify-start">
            <span className="text-lg font-bold text-slate-500">›</span>
            <Link
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

