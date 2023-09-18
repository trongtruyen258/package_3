export default function BodyVertical() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ height: "50px", background: "gray" }}>Column 1</div>
      <div style={{ height: "50px", background: "red" }}>Column 2</div>
      <div style={{ height: "50px", background: "green" }}>Column 3</div>
    </div>
  );
}
