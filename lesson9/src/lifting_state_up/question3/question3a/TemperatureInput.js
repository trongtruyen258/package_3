export default function TemperatureInput(props) {
  const { temperature, sendData, temperatureType } = props;
  const handleChange = (e) => {
    sendData(e.target.value);
  };
  return (
    <div>
      <fieldset>
        <legend>Enter temperature in {temperatureType}:</legend>
        <input type="number" value={temperature} onChange={handleChange} />
      </fieldset>
    </div>
  );
}
