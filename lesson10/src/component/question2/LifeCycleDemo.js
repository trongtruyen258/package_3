import { useEffect, useState } from "react";

export default function LifeCycleDemo() {
  const [message, setMessage] = useState("Hello");
  const handleClick = () => {
    setMessage("Hello World");
    console.log("componentDidUpdate");
  };
  useEffect(() => {
    console.log("componentDidMount");
  }, []);
  return (
    <div>
      <h2>{message}</h2>
      <button onClick={handleClick}>Change State</button>
    </div>
  );
}
