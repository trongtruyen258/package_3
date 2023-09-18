import { useState } from "react";

export default function StateQuestion1() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const handleUpdateTime = () => {
    setTime(new Date().toLocaleTimeString());
  };
  return (
    <div>
      <h3>Time: {time} </h3>
      <button onClick={handleUpdateTime}>Update Time</button>
    </div>
  );
}
