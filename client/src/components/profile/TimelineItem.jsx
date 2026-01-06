import { useState } from "react";

export default function TimelineItem({ activity }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`timeline-item glass ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded(prev => !prev)}
    >
      <div className="timeline-icon">{activity.icon}</div>

      <div className="timeline-content">
        <h3>{activity.title}</h3>
        <p>{activity.description}</p>

        {expanded && (
          <div className="timeline-details">
            {activity.details}
          </div>
        )}

        <span className="timeline-date">{activity.date}</span>
      </div>
    </div>
  );
}
