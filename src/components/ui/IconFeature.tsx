type IconFeatureProps = {
  icon?: string;
  title: string;
  description: string;
};

export function IconFeature({
  icon = "✓",
  title,
  description,
}: IconFeatureProps) {
  return (
    <div className="flex gap-4 rounded-2xl border border-sky-100 bg-white/85 p-4 shadow-sm shadow-sky-100/80">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-indigo-500 text-lg font-semibold text-white">
        {icon}
      </span>
      <div>
        <p className="text-base font-semibold text-slate-900">{title}</p>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </div>
  );
}

