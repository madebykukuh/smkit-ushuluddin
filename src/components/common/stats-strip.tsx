interface StatsStripProps {
  stats: Array<{ value: string; label: string }>;
  className?: string;
}

export default function StatsStrip({ stats, className = "" }: StatsStripProps) {
  return (
    <div className={`flex flex-wrap gap-x-8 gap-y-3 ${className}`}>
      {stats.map((stat) => (
        <div key={stat.value}>
          <p className="text-xl font-bold text-primary">{stat.value}</p>
          <p className="text-xs text-text-muted mt-0.5">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
