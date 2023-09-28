export default function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  } else {
    if (props.celsius >= 0 && props.celsius < 100) {
      return <p>The water would not boil.</p>;
    }
  }
  return <p></p>;
}
