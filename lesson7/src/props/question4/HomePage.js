export default function HomePage(props) {
  return (
    <div style={{ padding: "15px" }}>
      {props.header}
      {props.body}
      {props.footer}
    </div>
  );
}
HomePage.defaultProps = {
  header: <div style={{ background: "pink", height: "100px" }}>Header</div>,
  footer: <div style={{ background: "pink", height: "100px" }}>Footer</div>,
};
