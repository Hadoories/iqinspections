import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-gradient-to-b from-sky-50 via-white to-white text-slate-700">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 md:px-6 lg:flex-row lg:justify-between">
        <div className="max-w-md space-y-4">
          <Link href="/" className="inline-flex items-center gap-3 text-slate-800">
            <Image
              src="/homepage/IQ-Inspections-BLACK-1024x295.png"
              alt="IQ Inspections logo"
              width={200}
              height={60}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="text-sm text-slate-500">{siteConfig.description}</p>
          <div className="space-y-1 text-sm">
            <p>{siteConfig.contact.address}</p>
            <p>{siteConfig.contact.hours}</p>
          </div>
        </div>

        <div className="flex flex-1 flex-wrap gap-10 text-sm">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Navigate
            </p>
            <ul className="mt-3 space-y-2">
              {siteConfig.nav.primary.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-600 transition hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Services
            </p>
            <ul className="mt-3 space-y-2">
              {siteConfig.nav.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-600 transition hover:text-slate-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Contact
            </p>
            <ul className="mt-3 space-y-2 text-slate-600">
              <li>
                <a href={siteConfig.contact.phoneHref} className="hover:text-slate-900">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.contact.emailHref} className="hover:text-slate-900">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex gap-4">
                {siteConfig.social.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-500 transition hover:text-slate-900"
                  >
                    {item.label}
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-sky-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between md:px-6">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900">
              Terms
            </Link>
            <Link href={siteConfig.nav.cta.href} className="hover:text-slate-900">
              Book an Inspection
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

