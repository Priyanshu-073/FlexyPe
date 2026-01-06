import { useEffect, useState } from "react";

export default function StatCard({ label, value, trend, icon }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (typeof value !== "number") return;

    let start = 0;
    const duration = 700;
    const stepTime = 20;
    const increment = value / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="stat-card glass">
      <div className="stat-top">
        <span className="stat-icon">{icon}</span>
        <span className={`stat-trend ${trend >= 0 ? "up" : "down"}`}>
          {trend >= 0 ? `▲ ${trend}%` : `▼ ${Math.abs(trend)}%`}
        </span>
      </div>

      <h3>{typeof value === "number" ? count.toLocaleString() : value}</h3>
      <p>{label}</p>
    </div>
  );
}
