import { useState } from "react";

export default function EventQuestion7() {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const upperCase = () => {
    setValue(value.toUpperCase());
  };
  const changeColor = () => {
    setColor("red");
  };
  return (
    <div>
      <input
        type="text"
        value={value}
        onBlur={upperCase}
        onChange={handleChange}
      />
      <input
        style={{ backgroundColor: color }}
        type="text"
        onKeyDown={changeColor}
      />
    </div>
  );
}
