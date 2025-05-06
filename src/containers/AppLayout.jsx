// layout/AppLayout.jsx
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "../styles/container.css";

export default function AppLayout({ children }) {
  return (
    <div className="layout-container">
      <Sidebar />
      <div className="main-content">
        <Topbar />
        <div className="page-content">{children}</div>
      </div>
    </div>
  );
}
