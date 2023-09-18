import { useState } from "react";
import BodyHorizontal from "./BodyHorizontal";
import BodyVertical from "./BodyVertical";
import HomePage from "./HomePage";

export default function PropsQuestion4() {
  const [body, setBody] = useState(<BodyHorizontal />);
  const handleDisplay1 = () => {
    setBody(<BodyHorizontal />);
  };
  const handleDisplay2 = () => {
    setBody(<BodyVertical />);
  };
  return (
    <div style={{ width: "800px", margin: "0 auto" }}>
      <div>
        <button onClick={handleDisplay1}>Display way 1</button>{" "}
        <button onClick={handleDisplay2}>Display way 2</button>
      </div>
      <HomePage body={body} />
    </div>
  );
}
