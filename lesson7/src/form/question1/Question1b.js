import { useState } from "react";

export default function Question1b() {
  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    alert("Your favorite flavor: " + value);
    e.preventDefault();
  };
  return (
    <>
      <h2>Question 1-b:</h2>
      <form onSubmit={handleSubmit}>
        <label>Pick your favorite flavor: </label>
        <select onChange={handleChange}>
          <option>Grapefruit</option>
          <option>Lime</option>
          <option>Coconut</option>
          <option>Mango</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
