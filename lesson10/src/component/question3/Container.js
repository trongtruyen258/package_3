import { useState } from "react";
import WarningBanner from "./WarningBanner";

export default function Container() {
  const [showWarn, setShowWarn] = useState(false);
  const handleClick = () => {
    setShowWarn(!showWarn);
  };
  return (
    <div>
      {showWarn && <WarningBanner />}
      <button onClick={handleClick}>{showWarn ? "Hide" : "Show"}</button>
    </div>
  );
}
