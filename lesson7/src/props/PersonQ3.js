export default function PersonQ3(props) {
  return (
    <div style={{ margin: "0 auto" }}>
      <h2>Full name: {props.fullName}</h2>
      <p>Age: {props.age}</p>
      <p>Year of birth: {new Date().getFullYear() - props.age}</p>
      <p>Slogan: {props.children ? props.children : props.slogan}</p>
    </div>
  );
}
PersonQ3.defaultProps = {
  slogan: "Không có lý tưởng sống",
};
