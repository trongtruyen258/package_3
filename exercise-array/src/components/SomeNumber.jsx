import { useState } from "react";

export default function SomeNumber() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [result, setResult] = useState(true);
  const createArr = (valueInput) => {
    return valueInput.split(",");
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    setShow(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    let listNumber = createArr(value);

    setResult(listNumber.some((currentValue) => currentValue % 2 === 0));
  };
  return (
    <div>
      <form className=" p-2" onSubmit={handleSubmit}>
        <label>Input number array:</label>
        <input
          className=" border ml-2 mr-2 p-2 w-1/3 rounded-lg"
          type="text"
          placeholder="ex:1,2,3,..."
          onChange={handleChange}
          value={value}
        />
        <input
          className="bg-cyan-500 border p-2 rounded-lg hover:bg-slate-300 cursor-pointer"
          type="submit"
          value={"Check"}
        />
      </form>
      {show && (
        <div className="p-2">
          <p>
            Result:{" "}
            {result
              ? "In the array there is even number element"
              : "In the array there is not even number element"}
          </p>
        </div>
      )}
    </div>
  );
}
