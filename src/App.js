import React, { Component } from "react";
import TarjetaFruta from "./components/TarjetaFruta/TarjetaFruta";
import Contador from "./components/Contador/contador";
import Cat from "./components/Cat/cat";
import Hanle from "./components/Handle/Handle";
import Input from "./components/Input/Input";
import EventNative from "./components/EventNative/EventNative";

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
        <h5>Seccion Cards</h5>
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
          <h5>Seccion para manejar de props</h5>
          <Cat name="Pelusa" age="1 año" {...otroDatos} {...this.state} />
        </section>
        <section>
          <h5>Seccion para manejar eventos</h5>
          <Hanle />
        </section>
        <section>
          <h5>Seccion para manejar eventos del input</h5>
          <Input />
        </section>
        <section>
          <h5>Diferiencia de los eventos del DOM y React</h5>
          <EventNative />
        </section>
      </div>
    );
  }
}

export default App;
