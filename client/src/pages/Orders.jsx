import DashboardLayout from "../components/layout/DashboardLayout";

export default function OrdersPage() {
  const orders = [
    {
      id: "ORD-001",
      date: "Jan 5, 2026",
      items: 3,
      total: "$89.99",
      status: "Delivered",
      icon: "📦"
    },
    {
      id: "ORD-002",
      date: "Jan 3, 2026",
      items: 2,
      total: "$45.50",
      status: "Delivered",
      icon: "📦"
    },
    {
      id: "ORD-003",
      date: "Dec 28, 2025",
      items: 5,
      total: "$156.75",
      status: "Delivered",
      icon: "📦"
    },
    {
      id: "ORD-004",
      date: "Dec 20, 2025",
      items: 1,
      total: "$32.00",
      status: "In Transit",
      icon: "🚚"
    }
  ];

  return (
    <DashboardLayout>
      <div className="orders-page">
        <h1 className="page-title">My Orders</h1>

        <div className="orders-container">
          {orders.map((order) => (
            <div key={order.id} className="order-card glass">
              <div className="order-header">
                <div className="order-info">
                  <span className="order-icon">{order.icon}</span>
                  <div>
                    <h3>{order.id}</h3>
                    <p className="order-date">{order.date}</p>
                  </div>
                </div>
                <span className={`order-status ${order.status.toLowerCase().replace(" ", "-")}`}>
                  {order.status}
                </span>
              </div>

              <div className="order-details">
                <div className="detail">
                  <span className="label">Items:</span>
                  <span className="value">{order.items}</span>
                </div>
                <div className="detail">
                  <span className="label">Total:</span>
                  <span className="value price">{order.total}</span>
                </div>
              </div>

              <button className="view-btn">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
