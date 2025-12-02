import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { ContactForm } from "@/components/ui/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactContent, generalFAQs } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const serviceOptions = siteConfig.nav.services.map((service) => ({
  label: service.label,
  value: service.label,
}));

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="section-shell bg-sky-50/80">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[0.8fr_1.2fr] md:px-6">
          <div className="space-y-4">
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title={contactContent.title}
              description={contactContent.description}
            />
            <div className="rounded-2xl border border-sky-100 bg-white/80 p-5 text-sm text-slate-600">
              <p>
                Phone:{" "}
                <a href={siteConfig.contact.phoneHref} className="font-semibold text-slate-900">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                Email:{" "}
                <a href={siteConfig.contact.emailHref} className="font-semibold text-slate-900">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>Hours: {siteConfig.contact.hours}</p>
            </div>
          </div>
          <div className="rounded-[2rem] border border-sky-100 bg-white/90 p-6 shadow-lg shadow-sky-200/60">
            <ContactForm fields={contactContent.formFields} serviceOptions={serviceOptions} />
          </div>
        </div>
      </section>

      <section className="section-shell bg-white/80">
        <div className="mx-auto max-w-6xl gap-8 px-4 md:flex md:items-center md:px-6">
          <div className="flex-1 space-y-4">
            <SectionHeading
              align="left"
              eyebrow="Service area"
              title="Metro Detroit & beyond."
              description="Based in Dearborn and traveling across Wayne, Oakland, Macomb, Washtenaw, and Livingston Counties."
            />
            <p className="text-sm text-slate-600">
              Need a quote for travel beyond Southeast Michigan? Send the address and we’ll confirm
              availability.
            </p>
          </div>
          <div className="mt-6 h-64 flex-1 rounded-3xl bg-gradient-to-br from-sky-200 via-indigo-200 to-slate-200 shadow-inner shadow-slate-900/20 md:mt-0" />
        </div>
      </section>

      <section className="section-shell bg-sky-50/80">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-[0.7fr_1.3fr] md:px-6">
          <div className="space-y-4">
            <SectionHeading
              align="left"
              eyebrow="FAQs"
              title="Quick answers before we talk."
              description="These questions surface in most transactions—save time by reviewing them in advance."
            />
          </div>
          <FAQAccordion items={generalFAQs} />
        </div>
      </section>
    </div>
  );
}

