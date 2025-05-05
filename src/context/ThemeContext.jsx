// context/ThemeContext.jsx
import { createContext, useReducer, useContext } from "react";

const ThemeContext = createContext();
const initialState = { mode: "light" };

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { mode: state.mode === "light" ? "dark" : "light" };
    default:
      return state;
  }
}

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ theme: state.mode, dispatch }}>
      <div className={state.mode}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
