export default function ChildrenComponent(props) {
  const { valueName, sendDataToParent } = props;
  const handleChange = (e) => {
    sendDataToParent(e.target.value);
  };
  return (
    <div>
      <label>
        Name:
        <input type="text" onChange={handleChange} value={valueName} />
      </label>
    </div>
  );
}
