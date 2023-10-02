import { useState } from "react";

export default function ReduceAndFilter() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [result, setResult] = useState([]);
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

    setResult(listNumber);
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
          value={"Result"}
        />
      </form>
      {show && (
        <div className="p-2">
          <p>
            Sum of odd numbers:{" "}
            {result
              .filter((ele) => ele % 2 !== 0)
              .reduce((total, current) => total + +current, 0)}
          </p>
          <p>
            Numbers divisible by 5:{" "}
            {result.filter((ele) => ele % 5 === 0).toString()}
          </p>
        </div>
      )}
    </div>
  );
}
