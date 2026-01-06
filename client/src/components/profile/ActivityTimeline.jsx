import { mockActivity } from "../../data/mockActivity";
import TimelineItem from "./TimelineItem";

export default function ActivityTimeline() {
  return (
    <div className="timeline">
      <h2 className="timeline-title">Your Journey</h2>

      {mockActivity.map((activity) => (
        <TimelineItem key={activity.id} activity={activity} />
      ))}
    </div>
  );
}
