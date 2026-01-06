import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

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

  return (
    <aside className={`sidebar ${isExpanded ? "" : "collapsed"}`}>
      {/* Toggle Button */}
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        {isExpanded ? "◄" : "►"}
      </button>

      {/* Logo */}
      <div className="sidebar-logo">
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
        <NavLink to="/settings" className="nav-item" title="Settings">
          <span className="nav-icon">⚙️</span>
          {isExpanded && <span className="nav-text">Settings</span>}
        </NavLink>
      </nav>

      {/* Bottom */}
      <div className="sidebar-footer">
        <button className="logout-btn" title="Logout">
          {isExpanded ? "↩ Logout" : "↩"}
        </button>
      </div>
    </aside>
  );
}
