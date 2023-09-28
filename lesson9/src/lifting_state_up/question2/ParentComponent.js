import { useState } from "react";
import ChildrenComponent from "./ChildrenComponent";

export default function ParentComponent() {
  const [valueName, setValueName] = useState("");
  const receiveData = (data) => {
    setValueName(data);
  };
  return (
    <div>
      <ChildrenComponent valueName={valueName} sendDataToParent={receiveData} />
      <p>Hello {valueName}</p>
    </div>
  );
}
