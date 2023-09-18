export default function BodyHorizontal() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ height: "300px", width: "33%", background: "gray" }}>
        Column 1
      </div>
      <div style={{ height: "300px", width: "34%", background: "red" }}>
        Column 2
      </div>
      <div style={{ height: "300px", width: "33%", background: "green" }}>
        Column 3
      </div>
    </div>
  );
}
