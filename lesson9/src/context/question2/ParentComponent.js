import ChildrenComponent from "./ChildrenComponent";
import { useQ2Context } from "./Q2Context";

export default function ParentComponent() {
  const { changeTheme } = useQ2Context();
  return (
    <div>
      <ChildrenComponent />
      <button onClick={changeTheme}>Change theme</button>
    </div>
  );
}
