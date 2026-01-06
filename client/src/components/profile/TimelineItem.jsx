export default function TimelineItem({ activity }) {
  return (
    <div className="timeline-item">
      <div className="timeline-icon">{activity.icon}</div>

      <div className="timeline-content">
        <h3>{activity.title}</h3>
        <p>{activity.description}</p>
        <span className="timeline-date">{activity.date}</span>
      </div>
    </div>
  );
}
