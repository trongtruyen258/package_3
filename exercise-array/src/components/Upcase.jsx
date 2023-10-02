import { useState } from "react";

export default function Upcase() {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [strings, setStrings] = useState([]);
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
    let listString = createArr(value);
    setStrings(
      listString.map((string) => {
        return string.toUpperCase();
      })
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
          className="bg-cyan-500 border p-2 rounded-lg hover:bg-slate-300 cursor-pointer"
          type="submit"
          value={"Upcase"}
        />
      </form>
      {show && (
        <div className="p-2">
          <p>Result: {strings.toString()}</p>
        </div>
      )}
    </div>
  );
}
