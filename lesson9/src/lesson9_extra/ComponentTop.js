import { Button, Col, Container, Input, Row } from "reactstrap";
import { useLesson9ExtraContext } from "./Lesson9ExtraContext";
import { useState } from "react";

export default function ComponentTop() {
  const { changeData } = useLesson9ExtraContext();
  const [value, setValue] = useState("");
  return (
    <Container style={{ border: "1px solid #337ab7", margin: "15px auto" }}>
      <Row style={{ padding: "15px", background: "#337ab7" }}>
        <h5 style={{ margin: "0", color: "#fff" }}>Component Top</h5>
      </Row>
      <Row style={{ padding: "15px" }}>
        <Col>
          <Input
            id="example"
            name="example"
            placeholder="Input something here"
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </Col>
        <Col lg="2" xs="4">
          <Button
            color="danger"
            onClick={() => {
              changeData(value);
            }}
          >
            Send Data
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
