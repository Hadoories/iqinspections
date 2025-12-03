"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, type ReactElement } from "react";

import { siteConfig } from "@/lib/site";

const navLinks = siteConfig.nav.primary;
const serviceLinks = siteConfig.nav.services;
const homeLink = navLinks.find((link) => link.href === "/");
const aboutLink = navLinks.find((link) => link.label === "About");
const remainingNavLinks = navLinks.filter(
  (link) => link !== homeLink && link !== aboutLink
);

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    if (href === "/#resources") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const socialIconMap: Record<string, ReactElement> = {
    Facebook: <FacebookIcon className="h-4 w-4" />,
    Instagram: <InstagramIcon className="h-4 w-4" />,
  };

  const renderNavLink = (link?: (typeof navLinks)[number]) => {
    if (!link) {
      return null;
    }

    return (
      <Link
        key={link.href}
        href={link.href}
        className={`transition hover:text-slate-900 ${
          isActive(link.href) ? "text-slate-900" : ""
        }`}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="sticky top-0 z-40 shadow-sm shadow-sky-200/60 backdrop-blur">
      <div className="bg-gradient-to-r from-sky-800 to-sky-600 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-2 text-xs font-semibold sm:flex-row sm:items-center sm:justify-between md:px-6">
          <div className="flex items-center gap-4">
            {siteConfig.social.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-white/80 transition hover:text-white"
                aria-label={item.label}
              >
                {socialIconMap[item.label] ?? <span className="font-semibold">{item.label}</span>}
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2 text-white/90">
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-2 rounded border border-white/30 px-3 py-1 transition hover:bg-white/10"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              <span>{siteConfig.contact.phone}</span>
            </a>
            <a
              href={siteConfig.contact.emailHref}
              className="inline-flex items-center gap-2 rounded border border-white/30 px-3 py-1 transition hover:bg-white/10"
            >
              <MailIcon className="h-3.5 w-3.5" />
              <span>Email</span>
            </a>
            <a
              href={siteConfig.contact.smsHref}
              className="inline-flex items-center gap-2 rounded border border-white/30 px-3 py-1 transition hover:bg-white/10"
            >
              <MessageIcon className="h-3.5 w-3.5" />
              <span>Messages</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-b border-sky-100 bg-gradient-to-b from-white/95 via-white/90 to-white/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link
          href="/"
          aria-label="IQ Inspections home"
          className="inline-flex items-center gap-3"
        >
          <Image
            src="/homepage/IQ-Inspections-BLACK-1024x295.png"
            alt="IQ Inspections logo"
            width={220}
            height={62}
            priority
            className="h-12 w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-500 lg:flex">
          {renderNavLink(homeLink)}
          <div className="group relative">
            <button
              className="inline-flex items-center gap-1 rounded border border-transparent px-3 py-1.5 text-sm font-medium text-slate-500 transition hover:bg-sky-50 hover:text-slate-900"
              type="button"
            >
              Services
              <ChevronDownIcon className="h-4 w-4 text-slate-400 transition group-hover:text-slate-600" />
            </button>
            <div className="invisible absolute left-0 top-full w-56 -translate-y-2 rounded border border-sky-100 bg-white p-2 opacity-0 shadow-xl shadow-sky-200/60 transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <ul className="space-y-0.5 text-sm text-slate-600">
                {serviceLinks.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className={`block rounded px-3 py-2 font-medium transition hover:bg-sky-50 hover:text-slate-900 ${
                        pathname.startsWith(service.href)
                          ? "bg-sky-50 text-slate-900"
                          : ""
                      }`}
                    >
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {renderNavLink(aboutLink)}
          {remainingNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-slate-900 ${
                isActive(link.href) ? "text-slate-900" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href={siteConfig.nav.cta.href} className="btn btn-primary rounded-xl lg:rounded-lg">
            {siteConfig.nav.cta.label}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded border border-sky-100 p-2 text-slate-500 transition hover:border-sky-200 hover:text-slate-900 lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-sky-100 bg-white lg:hidden">
          <div className="space-y-6 px-4 py-6 md:px-6">
            <div className="flex flex-col gap-3 text-base font-medium text-slate-600">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-3 py-2 transition hover:bg-slate-50 ${
                    isActive(link.href) ? "bg-slate-50 text-slate-900" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Services
              </p>
              <div className="mt-3 space-y-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-xl border border-sky-100 px-3 py-2 text-sm text-slate-600 transition hover:border-sky-200 ${
                      pathname.startsWith(service.href)
                        ? "border-sky-300 text-slate-900"
                        : ""
                    }`}
                  >
                    <span className="block font-semibold">{service.label}</span>
                    <span className="text-xs text-slate-500">
                      {service.summary}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href={siteConfig.nav.cta.href}
              onClick={() => setMobileOpen(false)}
              className="btn btn-primary w-full justify-center"
            >
              {siteConfig.nav.cta.label}
            </Link>
          </div>
        </div>
      )}
      </div>
    </header>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" {...props}>
      <path
        d="M5 8l5 5 5-5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={20}
      height={20}
      aria-hidden="true"
      className="text-current"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width={20}
      height={20}
      aria-hidden="true"
      className="text-current"
    >
      <path
        d="M6 6l12 12M6 18L18 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 8H16V5h-2.5C11.57 5 10 6.57 10 8.5V10H8v3h2v7h3v-7h2.1l.4-3H13v-1.5c0-.28.22-.5.5-.5Z" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M7 3C4.24 3 2 5.24 2 8v8c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V8c0-2.76-2.24-5-5-5H7Zm0 2h10c1.66 0 3 1.34 3 3v8c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V8c0-1.66 1.34-3 3-3Zm9.5 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-5.5 1C8.57 7.5 6.5 9.57 6.5 12s2.07 4.5 4.5 4.5 4.5-2.07 4.5-4.5-2.07-4.5-4.5-4.5Zm0 2c1.38 0 2.5 1.12 2.5 2.5S12.38 16.5 11 16.5 8.5 15.38 8.5 14 9.62 10.5 11 10.5Z" />
    </svg>
  );
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path
        d="M6.5 3h2l2 5-2 1c1 2.5 3 4.5 5.5 5.5l1-2 5 2v2c0 .83-.67 1.5-1.5 1.5C11.39 18 6 12.61 6 5.5 6 4.67 6.67 4 7.5 4Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path d="M4 6h16v12H4z" />
      <path d="M4 8l8 5 8-5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MessageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" {...props}>
      <path
        d="M6 5h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 3v-5H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

