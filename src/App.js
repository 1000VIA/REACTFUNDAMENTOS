import React, { Component } from "react";
import TarjetaFruta from "./components/TarjetaFruta/TarjetaFruta";
import Contador from "./components/Contador/contador";
import Cat from "./components/Cat/cat";
import "../src/App.css";

class App extends Component {
  state = {
    peso: 3000,
    vidasRestantes: 7,
    name: "mirringa"
  };
  render() {
    const otroDatos = {
      raza: "Angoro",
      vacunas: 15
    };
    return (
      <div>
        {/* organizar rutas */}

        <section className="cardContainer">
          <TarjetaFruta name="Sandia" price={2500} />
          <TarjetaFruta name="Naranja" price={1500} />
          <TarjetaFruta name="Kiwi" price={4000} />
          <TarjetaFruta name="Pera" price={8400} />
        </section>
        <section className="cardContainer">
          <Contador />
        </section>
        <section>
          <Cat name="Pelusa" age="1 año" {...otroDatos} {...this.state} />
        </section>
      </div>
    );
  }
}

export default App;
