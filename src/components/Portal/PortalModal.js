import React, { Component } from "react";
import ReactDOM from "react-dom";

class PortalModal extends Component {
  render() {
    if (!this.props.visible) {
      return null;
    }

    const styles = {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: "0",
      left: "0",
      background: "linear-gradient(to top right, #667eea, #764ba2",
      opacity: "0.9",
      color: "#FFF"
    };

    return ReactDOM.createPortal(
      <div style={styles}>{this.props.children}</div>,
      document.getElementById("modal-root")
    );
  }
}

export default PortalModal;
