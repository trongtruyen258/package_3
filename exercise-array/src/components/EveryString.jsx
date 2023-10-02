import { useState } from "react";

export default function EveryString() {
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
    setResult(listString.every((currentValue) => currentValue.length > 3));
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
              ? "All strings in the array have length greater than 3"
              : "All strings in the array have not length greater than 3"}
          </p>
        </div>
      )}
    </div>
  );
}
