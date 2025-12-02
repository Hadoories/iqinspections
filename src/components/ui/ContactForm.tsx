"use client";

import { useMemo, useState } from "react";

type Field =
  | { name: string; label: string; type: "text" | "email" | "tel"; required?: boolean }
  | { name: string; label: string; type: "textarea"; required?: boolean }
  | { name: string; label: string; type: "select"; required?: boolean };

type ContactFormProps = {
  fields: readonly Field[];
  serviceOptions: { label: string; value: string }[];
};

type FormState = Record<string, string>;

export function ContactForm({ fields, serviceOptions }: ContactFormProps) {
  const initialState = useMemo(
    () =>
      fields.reduce<FormState>((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {}),
    [fields]
  );

  const [formState, setFormState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("success");
    setFormState(initialState);
    window.setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {fields.map((field) => {
        const commonProps = {
          name: field.name,
          required: field.required,
          value: formState[field.name] ?? "",
          onChange: handleChange,
          className:
            "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 focus:border-slate-900 focus:outline-none",
        };

        return (
          <label key={field.name} className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
            {field.label}
            {field.type === "textarea" ? (
              <textarea rows={4} {...commonProps} />
            ) : field.type === "select" ? (
              <select {...commonProps}>
                <option value="">Select a service</option>
                {serviceOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input type={field.type} {...commonProps} />
            )}
          </label>
        );
      })}
      <button type="submit" className="btn btn-primary w-full justify-center">
        Send request
      </button>
      {status === "success" && (
        <p className="rounded-2xl border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-700">
          Thanks for reaching out! We’ll confirm availability shortly.
        </p>
      )}
    </form>
  );
}

