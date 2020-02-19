import React from "react";
import TarjetaFruta from "./components/TarjetaFruta/TarjetaFruta";
import "../src/App.css";

const App = () => (
  <div className="cardContainer">
    <TarjetaFruta name="Sandia" price={2500} />
    <TarjetaFruta name="Naranja" price={1500} />
    <TarjetaFruta name="Kiwi" price={4000} />
    <TarjetaFruta name="Pera" price={8400} />
  </div>
);

export default App;
