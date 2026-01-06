import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { analyticsData } from "../../data/mockAnalytics";

export default function Analytics() {
  return (
    <div className="analytics">
      <h2>Activity Insights</h2>

      <div className="analytics-grid">
        <div className="glass analytics-card">
          <h3>Money Spent</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={analyticsData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="spent"
                stroke="#6366f1"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="glass analytics-card">
          <h3>Items Purchased</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={analyticsData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="items" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="glass analytics-card">
          <h3>Coins Earned</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={analyticsData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="coins"
                stroke="#f59e0b"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
