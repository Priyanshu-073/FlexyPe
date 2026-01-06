import ThemeToggle from "../common/ThemeToggle";
import { useNotification } from "../../context/NotificationContext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const { showNotification } = useNotification();
  const { user } = useContext(AuthContext);

  const handleNotificationClick = () => {
    showNotification('info', '✓ You have no new notifications', 3000);
  };

  const userName = user?.name || "Guest";
  const initials = userName.split(" ").map(n => n[0]).join("").toUpperCase();

  return (
    <header className="topbar">
      <h1 className="topbar-title">Welcome Back, {userName}</h1>

      <div className="topbar-actions">
        <span 
          className="topbar-icon notification-icon"
          onClick={handleNotificationClick}
          title="Click to check notifications"
        >
          🔔
        </span>
        <ThemeToggle />
        <div className="topbar-avatar">{initials}</div>
      </div>
    </header>
  );
}
