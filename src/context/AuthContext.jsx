// context/AuthContext.jsx
import { createContext, useContext, useReducer } from "react";
import { loginUser } from "../services/AuthService";

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
    try {
      const data = await loginUser(credentials.username, credentials.password);
      dispatch({ type: "LOGIN", payload: data });
      return { success: true };
    } catch (err) {
      return { success: false, message: err.message };
    }
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
