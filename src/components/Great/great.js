import React from "react";

const Great = props => {
  return (
    <div>
      <div>{props.name && <strong>{props.name}</strong>}</div>

      {props.great ? (
        <h1>Hola, tu eres genial 🔮!</h1>
      ) : (
        <p>Woops, no hay saludo para ti!</p>
      )}
    </div>
  );

  //   if (props.great) {
  //     return <h1>Hola, tu eres genial 🔮!</h1>;
  //   }

  //   return <p>Woops, no hay saludo para ti!</p>;
};

export default Great;
