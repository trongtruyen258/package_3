import { createContext, useContext, useState } from "react";

const Q2Context = createContext();
export function Q2Provider({ children }) {
  const message = "Co hoc di chau";
  const themes = {
    light: { name: "light", color: "#000", background: "none" },
    dark: { name: "dark", color: "#fff", background: "#000" },
  };
  const [theme, setTheme] = useState(themes.light);
  const changeTheme = () => {
    setTheme(theme.name === "light" ? themes.dark : themes.light);
  };
  return (
    <Q2Context.Provider value={{ message, changeTheme, theme }}>
      {children}
    </Q2Context.Provider>
  );
}
export function useQ2Context() {
  return useContext(Q2Context);
}
