import { useState } from "react";

export default function EveryAndSome() {
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
  function isPrime(element) {
    let start = 2;
    while (start <= Math.sqrt(element)) {
      if (element % start++ < 1) {
        return false;
      }
    }
    return element > 1;
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setShow(true);
    let listNumber = createArr(value);

    setResult(
      listNumber.every(isPrime) &&
        listNumber.some((currentValue) => currentValue % 2 === 0)
    );
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
              ? "All numbers in the array are prime and there are even numbers in the array"
              : "All numbers in the array are not prime or there are not even numbers in the array"}
          </p>
        </div>
      )}
    </div>
  );
}
