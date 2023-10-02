import { useState } from "react";

export default function PrintNumber() {
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
    let print = [<span key={"-1"}>Result: </span>];
    listNumber.forEach((element, index) => {
      if (index === listNumber.length - 1) {
        print.push(<span key={index}>{element}</span>);
      } else {
        print.push(<span key={index}>{element}, </span>);
      }
    });
    setResult(print);
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
          value={"Print"}
        />
      </form>
      {show && <div className="p-2">{result}</div>}
    </div>
  );
}
