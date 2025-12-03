"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { RevealSection } from "@/components/ui/RevealSection";
import { siteConfig } from "@/lib/site";

const serviceOptions = siteConfig.nav.services.map((service) => ({
  label: service.label,
  value: service.label,
}));

const contactCards = [
  {
    label: "Head Office Address",
    value: siteConfig.contact.address,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 21s8-5.14 8-12a8 8 0 0 0-16 0c0 6.86 8 12 8 12Z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    label: "Official Email",
    value: siteConfig.contact.email,
    href: siteConfig.contact.emailHref,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M4 6h16v12H4z" />
        <path d="m4 8 8 5 8-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Office Telephone",
    value: siteConfig.contact.phone,
    href: siteConfig.contact.phoneHref,
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="1.7">
        <path
          d="M6.5 3h2l2 5-2 1c1 2.5 3 4.5 5.5 5.5l1-2 5 2v2c0 .83-.67 1.5-1.5 1.5C11.39 18 6 12.61 6 5.5 6 4.67 6.67 4 7.5 4Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    preferredContact: [] as string[],
  });

  const handleFieldChange = (field: keyof typeof formData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value as never }));
  };

  const isFormComplete =
    formData.name.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.address.trim() &&
    formData.service.trim();

  return (
    <div className="space-y-16 bg-gradient-to-b from-[#f0f6ff] via-white to-[#edf3ff]">
      <RevealSection className="section-shell pt-12">
        <div className="mx-auto max-w-6xl space-y-8 px-4 md:px-6">
          <nav className="text-sm font-semibold text-slate-500">
            <Link href="/" className="transition hover:text-slate-900">
              Homepage
            </Link>
            <span className="mx-2 text-slate-400">/</span>
            <span className="text-slate-900">Schedule A Call</span>
          </nav>
          <div className="grid gap-10 rounded-[40px] border border-white/50 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,76,129,0.12)] md:grid-cols-[0.8fr_1.2fr] md:p-10">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">Schedule A Call</p>
              <h1 className="text-4xl font-bold text-slate-900">Let’s Talk About Your Home Inspection Needs</h1>
              <p className="text-base text-slate-600">
                Share the basics about the property and timing. We’ll respond with availability, pricing, and a prep checklist so
                inspection day runs smoothly.
              </p>
              <div className="rounded-3xl border border-slate-100 bg-white/80 p-6 text-sm text-slate-600 shadow-inner shadow-slate-200/70">
                <p>
                  <span className="font-semibold text-slate-900">Phone:</span>{" "}
                  <a href={siteConfig.contact.phoneHref} className="font-semibold text-slate-900">
                    {siteConfig.contact.phone}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Email:</span>{" "}
                  <a href={siteConfig.contact.emailHref} className="font-semibold text-slate-900">
                    {siteConfig.contact.email}
                  </a>
                </p>
                <p>
                  <span className="font-semibold text-slate-900">Hours:</span> {siteConfig.contact.hours}
                </p>
              </div>
              <div className="relative h-40 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-inner shadow-slate-200/70">
                <Image
                  src="/homepage/Schedule pic.jpeg"
                  alt="Calendar with a red pin marking an inspection date"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 40vw"
                  priority={false}
                />
              </div>
            </div>
            <div className="rounded-[32px] border border-white/50 bg-white p-6 shadow-[0_35px_90px_rgba(15,76,129,0.15)]">
              <form
                className="space-y-4"
                onSubmit={(event) => {
                  event.preventDefault();
                  setFormStatus("success");
                  setTimeout(() => setFormStatus("idle"), 5000);
                }}
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    label="Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(value) => handleFieldChange("name", value)}
                  />
                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(value) => handleFieldChange("email", value)}
                  />
                  <FormField
                    label="Phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(value) => handleFieldChange("phone", value)}
                  />
                  <FormField
                    label="Property Address"
                    name="address"
                    type="text"
                    value={formData.address}
                    onChange={(value) => handleFieldChange("address", value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Service Requested
                    <select
                      name="service"
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-slate-900 focus:outline-none"
                      value={formData.service}
                      onChange={(event) => handleFieldChange("service", event.target.value)}
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Message
                    <textarea
                      name="message"
                      rows={4}
                      className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-slate-900 focus:outline-none"
                    />
                  </label>
                </div>
                <fieldset className="space-y-3 rounded-2xl border border-slate-200/80 px-4 py-3">
                  <legend className="px-1 text-sm font-semibold text-slate-900">Preferred Method Of Contacting</legend>
                  <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
                    {["Phone", "Text", "Email"].map((method) => (
                      <label key={method} className="inline-flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="preferredContact"
                          value={method.toLowerCase()}
                          className="h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-sky-500"
                          checked={formData.preferredContact.includes(method.toLowerCase())}
                          onChange={(event) => {
                            const { checked, value } = event.target;
                            handleFieldChange(
                              "preferredContact",
                              checked
                                ? [...formData.preferredContact, value]
                                : formData.preferredContact.filter((item) => item !== value)
                            );
                          }}
                        />
                        {method}
                      </label>
                    ))}
                  </div>
                </fieldset>
                <button
                  type="submit"
                  className={`w-full rounded-2xl bg-gradient-to-r from-[#4a9ffd] via-[#1f6ed3] to-[#0f4c81] px-6 py-3 text-base font-semibold text-white shadow-[0_15px_40px_rgba(15,76,129,0.35)] transition ${
                    isFormComplete ? "hover:scale-105" : "opacity-50"
                  }`}
                  disabled={!isFormComplete}
                >
                  Send
                </button>
                {formStatus === "success" && (
                  <p className="rounded-2xl border border-green-100 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                    Thanks! Your request is received—we’ll confirm your inspection time shortly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell pb-16">
        <div className="mx-auto max-w-5xl space-y-8 px-4 text-center md:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-500">Stay Tuned With Us</p>
          <h2 className="text-3xl font-bold text-slate-900">
            Keep Connected & Lets Get In Touch With Our Team
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {contactCards.map((card) => (
              <div
                key={card.label}
                className="rounded-[28px] bg-gradient-to-br from-[#0f4c81] via-[#1e66b1] to-[#6eb6ff] p-1 shadow-[0_20px_60px_rgba(15,76,129,0.2)]"
              >
                <div className="h-full rounded-[24px] bg-white/90 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1b6ed3] to-[#0f4c81] text-white">
                    {card.icon}
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-sky-600">{card.label}</p>
                  {card.href ? (
                    <a href={card.href} className="mt-2 block text-lg font-semibold text-slate-900">
                      {card.value}
                    </a>
                  ) : (
                    <p className="mt-2 text-lg font-semibold text-slate-900">{card.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>
    </div>
  );
}

function FormField({
  label,
  name,
  type,
  value,
  onChange,
}: {
  label: string;
  name: string;
  type: string;
  value?: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="text-sm font-semibold text-slate-700">
      {label}
      <input
        type={type}
        name={name}
        value={value ?? ""}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-slate-900 focus:outline-none"
      />
    </label>
  );
}

