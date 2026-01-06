import ThemeToggle from "../common/ThemeToggle";
import { useNotification } from "../../context/NotificationContext";

export default function Topbar() {
  const { showNotification } = useNotification();

  const handleNotificationClick = () => {
    showNotification('info', '✓ You have no new notifications', 3000);
  };

  return (
    <header className="topbar">
      <h1 className="topbar-title">Welcome Back, boy909</h1>

      <div className="topbar-actions">
        <span 
          className="topbar-icon notification-icon"
          onClick={handleNotificationClick}
          title="Click to check notifications"
        >
          🔔
        </span>
        <ThemeToggle />
        <div className="topbar-avatar">B</div>
      </div>
    </header>
  );
}
