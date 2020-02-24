import React, { Component } from "react";
import "../Child/Child.css";

class Child extends Component {
  handleClick = () => {
    this.props.onHandle("1000VIA❣");
  };
  render() {
    return (
      <div>
        <h2 className="box blue">Hijo</h2>
        <button onClick={this.handleClick}>Saludar</button>
      </div>
    );
  }
}

export default Child;
