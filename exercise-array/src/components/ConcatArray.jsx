import { useState } from "react";

export default function ConcatArray() {
  const [value, setValue] = useState({ arr1: "", arr2: "" });
  const [show, setShow] = useState(false);
  const [result, setResult] = useState([]);
  const createArr = (valueInput) => {
    return valueInput.split(",");
  };
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    setShow(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    let firstList = createArr(value.arr1);
    let secondList = createArr(value.arr2);

    setResult(firstList.concat(secondList));
  };
  return (
    <div>
      <form className=" p-2" onSubmit={handleSubmit}>
        <label>Input the first number array:</label>
        <input
          className=" border ml-2 mr-2 p-2 w-1/3 rounded-lg"
          type="text"
          placeholder="ex:1,2,3,..."
          onChange={handleChange}
          value={value.arr1}
          name="arr1"
        />{" "}
        <br />
        <label>Input the second number array:</label>
        <input
          className=" border ml-2 mr-2 p-2 w-1/3 rounded-lg"
          type="text"
          placeholder="ex:1,2,3,..."
          onChange={handleChange}
          value={value.arr2}
          name="arr2"
        />
        <input
          className="bg-cyan-500 border p-2 rounded-lg hover:bg-slate-300 cursor-pointer"
          type="submit"
          value={"Concat"}
        />
      </form>
      {show && (
        <div className="p-2">
          <p>Result: {result.toString()}</p>
        </div>
      )}
    </div>
  );
}
