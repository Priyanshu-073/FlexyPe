import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const dashboard = document.querySelector(".dashboard");
    if (dashboard) {
      if (isExpanded) {
        dashboard.classList.remove("sidebar-collapsed");
      } else {
        dashboard.classList.add("sidebar-collapsed");
      }
    }
  }, [isExpanded]);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside className={`sidebar ${isExpanded ? "" : "collapsed"}`}>
      {/* Logo - Clickable to Toggle */}
      <div className="sidebar-logo" onClick={toggleSidebar} style={{cursor: 'pointer'}}>
        <span className="logo-icon">🟧</span>
        {isExpanded && <span className="logo-text">Mboard</span>}
      </div>

      {/* Navigation */}
      <nav className="sidebar-nav">
        <NavLink to="/profile" className="nav-item" title="Overview">
          <span className="nav-icon">📊</span>
          {isExpanded && <span className="nav-text">Overview</span>}
        </NavLink>
        <NavLink to="/analytics" className="nav-item" title="Analytics">
          <span className="nav-icon">📈</span>
          {isExpanded && <span className="nav-text">Analytics</span>}
        </NavLink>
        <NavLink to="/interests" className="nav-item" title="Interests">
          <span className="nav-icon">❤️</span>
          {isExpanded && <span className="nav-text">Interests</span>}
        </NavLink>
        <NavLink to="/orders" className="nav-item" title="Orders">
          <span className="nav-icon">📦</span>
          {isExpanded && <span className="nav-text">Orders</span>}
        </NavLink>
        <NavLink to="/settings" className="nav-item" title="Settings">
          <span className="nav-icon">⚙️</span>
          {isExpanded && <span className="nav-text">Settings</span>}
        </NavLink>
      </nav>

      {/* Bottom */}
      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout} title="Logout">
          {isExpanded ? "↩ Logout" : "↩"}
        </button>
      </div>
    </aside>
  );
}
