import { useState } from "react";
export default function Question1a() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    alert("Name: " + value);
    e.preventDefault();
  };
  return (
    <>
      <h2>Question 1-a:</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={value} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
