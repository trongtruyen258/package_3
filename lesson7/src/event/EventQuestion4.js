import { useState } from "react";

export default function EventQuestion4() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    if (!value) {
      let value = e.target.value.toUpperCase();
      setValue(value);
    } else {
      setValue(e.target.value);
    }
  };
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
    </div>
  );
}
