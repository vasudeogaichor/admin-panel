// routes/ProtectedRoute.jsx
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  console.log("isAuthenticated - ", isAuthenticated)
  return isAuthenticated ? children : <Navigate to="/login" />;
}
