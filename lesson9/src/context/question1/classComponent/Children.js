import React from "react";
import ClassContext from "./ClassContext";

export default class Children extends React.Component {
  render() {
    return (
      <div>
        <h3>Message from GrandFather: {this.context}</h3>
      </div>
    );
  }
}
Children.contextType = ClassContext;
