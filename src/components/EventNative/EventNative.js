import React, { Component } from "react";

class EventNative extends Component {
  state = {};

  handle = e => {
    e.preventDefault();
    console.log(e.nativeEvent);
  };

  render() {
    return (
      <a href="https://google.com" onClick={this.handle}>
        GOOGLE
      </a>
    );
  }
}

export default EventNative;
