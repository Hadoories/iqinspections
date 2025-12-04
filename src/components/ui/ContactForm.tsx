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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/ghl-webhook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formState,
          source: "Service page contact",
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Unable to submit request. Please try again.");
      }

      setStatus("success");
      setFormState(initialState);
      window.setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send request.");
    }
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
          <label key={field.name} className="flex flex-col gap-2 text-sm font-semibold text-white/90">
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
      <button type="submit" className="btn btn-primary w-full justify-center" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Send request"}
      </button>
      {status === "success" && (
        <p
          className="rounded-2xl border border-green-100 bg-green-50 px-4 py-3 text-sm text-green-700"
          aria-live="polite"
        >
          Thanks for reaching out! We’ll confirm availability shortly.
        </p>
      )}
      {status === "error" && errorMessage && (
        <p className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700" aria-live="assertive">
          {errorMessage}
        </p>
      )}
    </form>
  );
}

