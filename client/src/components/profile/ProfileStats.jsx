import StatCard from "./StatCard";

export default function ProfileStats({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <StatCard
          key={stat.label}
          label={stat.label}
          value={stat.value}
          trend={stat.trend}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}
