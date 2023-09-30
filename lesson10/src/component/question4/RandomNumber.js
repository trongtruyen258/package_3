import { useState } from "react";

export default function RandomNumber() {
  const [random, setRandom] = useState(Math.random());
  const handleClick = () => {
    setRandom(Math.random());
  };
  return (
    <div>
      <h3>Random Number: {random}</h3>
      <button onClick={handleClick}>Refresh</button>
    </div>
  );
}
