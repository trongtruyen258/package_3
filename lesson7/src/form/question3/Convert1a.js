import React from "react";

export default function Convert1a() {
  const input = React.createRef();
  const handleSubmit = (e) => {
    alert("Name: " + input.current.value);
    e.preventDefault();
  };
  return (
    <>
      <h2>Question 3:</h2>
      <h2>Convert 1-a:</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" ref={input} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
