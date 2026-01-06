import ThemeToggle from "../common/ThemeToggle";

export default function Topbar() {
  return (
    <header className="topbar">
      <h1 className="topbar-title">Welcome Back, boy909</h1>

      <div className="topbar-actions">
        <span className="topbar-icon">🔍</span>
        <span className="topbar-icon">🔔</span>
        <ThemeToggle />
        <div className="topbar-avatar">B</div>
      </div>
    </header>
  );
}
