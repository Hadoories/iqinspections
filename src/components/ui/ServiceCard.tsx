import Link from "next/link";

type ServiceCardProps = {
  title: string;
  summary: string;
  href: string;
  highlights?: string[];
};

export function ServiceCard({
  title,
  summary,
  href,
  highlights = [],
}: ServiceCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-sky-100 bg-white p-6 transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-2xl hover:shadow-sky-200/70">
      <div className="flex-1 space-y-3">
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-600">{summary}</p>
        {highlights.length > 0 && (
          <ul className="space-y-2 text-sm text-slate-600">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Link
        href={href}
        className="mt-6 inline-flex items-center text-sm font-semibold text-slate-900 transition group-hover:text-indigo-600"
      >
        Explore service
        <svg
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5"
        >
          <path
            d="M5 10h10m0 0l-4-4m4 4l-4 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </Link>
    </div>
  );
}

