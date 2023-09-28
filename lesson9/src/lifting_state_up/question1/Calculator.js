import { useState } from "react";
import BoilingVerdict from "./BoilingVerdict";

export default function Calculator() {
  const [temperature, setTemperature] = useState("");
  const handleChange = (e) => {
    setTemperature(e.target.value);
  };
  return (
    <div>
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input type="number" onChange={handleChange} value={temperature} />
        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    </div>
  );
}
