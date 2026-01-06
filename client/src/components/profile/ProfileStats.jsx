import StatCard from "./StatCard";

export default function ProfileStats({ stats }) {
  return (
    <div className="stats-grid">
      {stats.map((item, i) => (
        <StatCard
          key={i}
          value={item.value}
          label={item.label}
        />
      ))}
    </div>
  );
}
