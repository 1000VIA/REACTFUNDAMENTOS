import React from "react";

const Chaild = ({ uiColor, children }) => {
  const styles = {
    padding: "0.3em",
    color: "#FFF",
    background: uiColor,
    borderRadius: "0.3em",
    textAlign: "center",
    fontSize: "50px"
  };
  return <h1 style={styles}> {children}</h1>;
};

export default Chaild;
