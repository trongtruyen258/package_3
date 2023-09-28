import { useQ1FuncContext } from "./Q1FuncContext";

export default function Children() {
  const { message } = useQ1FuncContext();
  return (
    <div>
      <h3>Message form Grandfather: {message}</h3>
    </div>
  );
}
