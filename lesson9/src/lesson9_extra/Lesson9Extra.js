import "bootstrap/dist/css/bootstrap.min.css";
import { ExtraProvider } from "./Lesson9ExtraContext";
import ComponentTop from "./ComponentTop";
import ComponentBottom from "./ComponentBottom";
export default function Lesson9Extra() {
  return (
    <ExtraProvider>
      <ComponentTop />
      <ComponentBottom />
    </ExtraProvider>
  );
}
