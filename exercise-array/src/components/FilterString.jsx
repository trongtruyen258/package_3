import { useState } from "react";

export default function FilterString() {
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
      listString.filter((string) => {
        return string.length > 5;
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
          value={"Filter"}
        />
      </form>
      {show && (
        <div className="p-2">
          <p>Strings has length greater than 5 are: {strings.toString()}</p>
        </div>
      )}
    </div>
  );
}
