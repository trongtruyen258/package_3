import { createContext, useContext, useState } from "react";

const Lesson9ExtraContext = createContext();
export function ExtraProvider({ children }) {
  const [dataInput, setData] = useState("");
  const changeData = (inputData) => {
    setData(inputData);
  };
  return (
    <Lesson9ExtraContext.Provider value={{ dataInput, changeData }}>
      {children}
    </Lesson9ExtraContext.Provider>
  );
}
export function useLesson9ExtraContext() {
  return useContext(Lesson9ExtraContext);
}
