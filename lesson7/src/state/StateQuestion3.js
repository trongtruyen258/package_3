import { useState } from "react";
import "./StateQ3.css";
export default function StateQuestion3() {
  const [position, setPosition] = useState("4px");
  const handleClick = () => {
    setPosition(position === "4px" ? "60px" : "4px");
  };
  return (
    <div>
      <div className="switch">
        <div
          className="switch-button"
          onClick={handleClick}
          style={{ left: position }}
        />
        <div className="switch-label">
          <span>ON</span>
          <span>OFF</span>
        </div>
      </div>
    </div>
  );
}
