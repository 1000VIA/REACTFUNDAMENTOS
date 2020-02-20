import React, { Component } from "react";

class Contador extends Component {
  state = {
    video: {
      title: "Super Video",
      likes: 0
    }
  };
  add = () => {
    this.setState((prevState, props) => ({
      video: {
        ...this.state.video,
        likes: this.state.video.likes + 1
      }
    }));
  };
  render() {
    return (
      <div>
        <h1>{this.state.video.title}</h1>
        <button onClick={this.add}>likes: ({this.state.video.likes})</button>
      </div>
    );
  }
}
export default Contador;
