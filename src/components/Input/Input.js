import React, { Component } from "react";

class Inputs extends Component {
  state = {
    text: "",
    evento: ""
  };
  handle = event => {
    console.log(event.target.value);
    this.setState({
      text: event.target.value,
      evento: event.type
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handle}
          onCopy={this.handle}
          onPaste={this.handle}
        ></input>
        <h1>{this.state.text}</h1>
        <h2>{this.state.evento}</h2>
      </div>
    );
  }
}

export default Inputs;
