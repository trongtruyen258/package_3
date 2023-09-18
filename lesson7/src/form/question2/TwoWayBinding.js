import { useState } from "react";

export default function TwoWayBinding() {
  const [fullName, setFullName] = useState("");
  const handleChange = (e) => {
    setFullName(e.target.value);
  };
  return (
    <div>
      <h2>Question 2:</h2>
      <h3>Full name: {fullName}</h3>
      <input type="text" value={fullName} onChange={handleChange} />
    </div>
  );
}
