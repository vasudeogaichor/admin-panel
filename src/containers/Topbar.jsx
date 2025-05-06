// layout/Topbar.jsx
import ThemeToggle from "../components/ThemeToggle";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="left">🏁 App Title</div>
      <div className="right">
        <ThemeToggle />
        <span>User ▾</span>
      </div>
    </div>
  );
}
