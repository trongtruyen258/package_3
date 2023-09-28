import ParentComponent from "./ParentComponent";
import { Q2Provider } from "./Q2Context";

export default function GrandParentComponent() {
  return (
    <Q2Provider>
      <ParentComponent />
    </Q2Provider>
  );
}
