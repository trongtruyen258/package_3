export default function MoneyInput(props) {
  const { money, sendData, typeMoney } = props;
  const handleChange = (e) => {
    sendData(e.target.value);
  };
  return (
    <div>
      <label>{typeMoney}</label>
      <input type="number" value={money} onChange={handleChange} />
    </div>
  );
}
