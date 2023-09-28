import Farther from "./Farther";
import { Question1Provider } from "./Q1FuncContext";

export default function GrandFatherFunc() {
  return (
    <Question1Provider>
      <Farther />
    </Question1Provider>
  );
}
