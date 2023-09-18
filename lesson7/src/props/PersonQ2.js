export default function PersonQ2(props) {
  return (
    <div style={{ margin: "0 auto" }}>
      <h2>Full name: {props.fullName}</h2>
      <p>Age: {props.age}</p>
      <p>Slogan: {props.children ? props.children : props.slogan}</p>
    </div>
  );
}
PersonQ2.defaultProps = {
  slogan: "Không có lý tưởng sống",
};
