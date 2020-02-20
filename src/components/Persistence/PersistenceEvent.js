import React, { Component } from "react";

class PersistenceEvent extends Component {
  state = {
    color: "blue"
  };
  handleChange = event => {
    const color = event.target.value;
    console.log(event.target.value);
    this.setState({
      color
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange}></input>
        <h1 style={{ color: this.state.color }}>{this.state.color}</h1>
      </div>
    );
  }
}

export default PersistenceEvent;
