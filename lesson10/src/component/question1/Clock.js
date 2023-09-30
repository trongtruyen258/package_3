import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    let interval = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const tick = () => {
    setTime(new Date());
  };
  return (
    <div>
      <h2>Hello World</h2>
      <h3>It is {time.toLocaleTimeString()}</h3>
    </div>
  );
}
