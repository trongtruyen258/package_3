import React from "react";
import ClassContext from "./ClassContext";
import Parent from "./Parent";

export default class GrandFatherClass extends React.Component {
  constructor(props) {
    super(props);
    this.message = "Co hoc di chau";
  }
  render() {
    return (
      <ClassContext.Provider value={this.message}>
        <Parent />
      </ClassContext.Provider>
    );
  }
}
