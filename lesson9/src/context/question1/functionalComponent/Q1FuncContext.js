import { createContext, useContext } from "react";

const Q1FuncContext = createContext();
export function Question1Provider({ children }) {
  const message = "Co hoc di chau";
  return (
    <Q1FuncContext.Provider value={{ message }}>
      {children}
    </Q1FuncContext.Provider>
  );
}
export function useQ1FuncContext() {
  return useContext(Q1FuncContext);
}
