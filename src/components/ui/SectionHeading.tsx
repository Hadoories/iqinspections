type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  kicker?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  kicker,
}: SectionHeadingProps) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`space-y-3 ${alignment}`}>
      {kicker && (
        <span className="surface-pill text-xs uppercase tracking-[0.25em] text-slate-500">
          {kicker}
        </span>
      )}
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="text-base text-slate-600 md:text-lg">{description}</p>
      )}
    </div>
  );
}

