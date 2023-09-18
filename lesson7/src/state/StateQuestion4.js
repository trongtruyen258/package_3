import { useEffect, useState } from "react";
import "./StateQ4.css";
export default function StateQuestion4() {
  const [text, setText] = useState("blinking text");
  useEffect(() => {
    const interval = setInterval(() => {
      setText(text ? "" : "blinking text");
    }, 700);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="blink">
      <span className="blink-text">{text}</span>
    </div>
  );
}
