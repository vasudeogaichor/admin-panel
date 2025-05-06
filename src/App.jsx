// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import { ThemeProvider } from "./context/ThemeContext";
import AppLayout from "./containers/AppLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AppLayout>
                  <Dashboard />
                </AppLayout>
              </ProtectedRoute>
            }
          />
          {/* <Route path="/*" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} /> */}
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
