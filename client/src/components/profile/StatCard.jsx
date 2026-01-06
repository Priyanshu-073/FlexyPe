import { useEffect, useState } from "react";

export default function StatCard({ value, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = typeof value === "number" ? value : value;
    if (typeof end !== "number") return;

    const duration = 800;
    const stepTime = 20;
    const increment = end / (duration / stepTime);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="stat-card">
      <h3>{typeof value === "number" ? count : value}</h3>
      <p>{label}</p>
    </div>
  );
}
