import { Statistic } from "@/lib/content";

type StatsGridProps = {
  stats: Statistic[];
};

export function StatsGrid({ stats }: StatsGridProps) {
  if (!stats.length) {
    return null;
  }

  return (
    <div className="grid gap-6 rounded-3xl border border-sky-100 bg-white/75 p-6 shadow-lg shadow-sky-200/60 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-3xl font-semibold text-slate-900">{stat.value}</p>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

