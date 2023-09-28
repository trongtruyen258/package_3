import { useQ2Context } from "./Q2Context";

export default function ChildrenComponent() {
  const { message, theme } = useQ2Context();
  return (
    <div>
      <h3 style={{ color: theme.color, background: theme.background }}>
        Message from GrandParent: {message}
      </h3>
      <button style={{ color: theme.color, background: theme.background }}>
        Chau da hieu
      </button>
    </div>
  );
}
