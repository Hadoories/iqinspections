import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  crumbs: Crumb[];
};

export function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  if (!crumbs.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        {crumbs.map((crumb, index) => (
          <li key={`${crumb.label}-${index}`} className="flex items-center gap-2">
            {crumb.href ? (
              <Link href={crumb.href} className="text-slate-600 hover:text-slate-900">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-slate-900">{crumb.label}</span>
            )}
            {index < crumbs.length - 1 && <span className="text-slate-400">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

