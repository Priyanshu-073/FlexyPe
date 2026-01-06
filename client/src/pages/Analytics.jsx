import DashboardLayout from "../components/layout/DashboardLayout";
import Analytics from "../components/profile/Analytics";

export default function AnalyticsPage() {
  return (
    <DashboardLayout>
      <div className="analytics-page">
        <h1 className="page-title">Activity Insights</h1>
        <Analytics />
      </div>
    </DashboardLayout>
  );
}
