// context/AuthContext.jsx
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null, // { id, name, role, permissions: [...] }
  token: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("token", action.payload.token);
      return { ...state, user: action.payload.user, token: action.payload.token };
    case "LOGOUT":
      localStorage.removeItem("token");
      return { user: null, token: null };
    default:
      return state;
  }
}

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = async (credentials) => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    dispatch({ type: "LOGIN", payload: data });
  };

  const logout = () => dispatch({ type: "LOGOUT" });

  const canAccess = (resource, action) => {
    return state.user?.permissions?.includes(`${resource}:${action}`);
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout, canAccess }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
