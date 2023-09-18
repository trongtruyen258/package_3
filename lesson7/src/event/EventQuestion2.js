import { useState } from "react";

export default function EventQuestion2() {
  const [count, setCount] = useState(0);
  const handleCopy = (e) => {
    alert("Don't copy it!");
    setCount(count + 1);
  };
  return (
    <div>
      <p onCopy={handleCopy}>Copy me!</p>
      <p>Copy count: {count}</p>
    </div>
  );
}
