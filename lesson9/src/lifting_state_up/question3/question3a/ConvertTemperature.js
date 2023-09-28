import { useState } from "react";
import TemperatureInput from "./TemperatureInput";

export default function ConvertTemperature() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const convertToCelsius = (fahrenheitInput) => {
    setFahrenheit(fahrenheitInput);
    if (Number.isNaN(fahrenheitInput)) {
      setCelsius("");
    } else {
      setCelsius((fahrenheitInput - 32) * (5 / 9));
    }
  };
  const convertToFahrenheit = (celsiusInput) => {
    setCelsius(celsiusInput);
    if (Number.isNaN(celsiusInput)) {
      setFahrenheit("");
    } else {
      setFahrenheit(celsiusInput * (9 / 5) + 32);
    }
  };
  return (
    <div>
      <TemperatureInput
        temperatureType={"Celsius"}
        temperature={celsius}
        sendData={convertToFahrenheit}
      />
      <TemperatureInput
        temperatureType={"Fahrenheit"}
        temperature={fahrenheit}
        sendData={convertToCelsius}
      />
    </div>
  );
}
