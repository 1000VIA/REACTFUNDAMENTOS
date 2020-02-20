import React, { Component } from "react";

const styles = {
  height: "200px",
  background: "gold",
  padding: "1em",
  boxSizing: "border-box"
};

class Handle extends Component {
  state = {
    x: 0,
    y: 0
  };

  hanle = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };
  render() {
    return (
      <div style={styles} onMouseMove={this.hanle}>
        {/* <button onClick={this.hanle}>Clickear</button>
        <button onMouseDown={this.hanle}>Clickear</button>
        <button onMouseUp={this.hanle}>Clickear</button>
        <div onDoubleClick={this.hanle}>Clickear</div> */}
        <div>X: {this.state.x} </div>
        <div>Y: {this.state.y} </div>
      </div>
    );
  }
}

export default Handle;
