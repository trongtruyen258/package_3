import { Container, Input, Row } from "reactstrap";
import { useLesson9ExtraContext } from "./Lesson9ExtraContext";

export default function ComponentBottom() {
  const { dataInput } = useLesson9ExtraContext();
  return (
    <Container style={{ border: "1px solid #fcf8e3", margin: "15px auto" }}>
      <Row style={{ padding: "15px", background: "#fcf8e3" }}>
        <h5 style={{ margin: "0" }}>Component Bottom</h5>
      </Row>
      <Row style={{ padding: "15px" }}>
        <Input value={dataInput} id="exampleText" name="text" type="textarea" />
      </Row>
    </Container>
  );
}
