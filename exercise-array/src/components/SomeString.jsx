import { useState } from "react";

export default function SomeString() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(false);
  const createArr = (valueInput) => {
    return valueInput.split(", ");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    setShow(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    let listString = createArr(value);
    setResult(
      listString.some((currentValue) => currentValue.charAt(0) === "B")
    );
  };
  return (
    <div>
      <form className=" p-2" onSubmit={handleSubmit}>
        <label>Input string array:</label>
        <input
          className=" border ml-2 mr-2 p-2 w-1/3 rounded-lg"
          type="text"
          placeholder="ex: apple, banana, cherry, date,..."
          onChange={handleChange}
          value={value}
        />
        <input
          className=" border p-2 rounded-lg hover:bg-slate-300 cursor-pointer bg-cyan-500"
          type="submit"
          value={"Check"}
        />
      </form>
      {show && (
        <div className="p-2">
          <p>
            Result:{" "}
            {result
              ? "In the array there is element starting with B"
              : "In the array there is not element starting with B"}
          </p>
        </div>
      )}
    </div>
  );
}
