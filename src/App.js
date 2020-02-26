import React, { Component } from "react";
import TarjetaFruta from "./components/TarjetaFruta/TarjetaFruta";
import Contador from "./components/Contador/contador";
import Cat from "./components/Cat/cat";
import Hanle from "./components/Handle/Handle";
import Input from "./components/Input/Input";
import EventNative from "./components/EventNative/EventNative";
import PersistenceEvent from "./components/Persistence/PersistenceEvent";
import Child from "./components/Child/Child";
import Great from "./components/Great/great";
import Child1 from "./components/Child1/Chail";
import Computacion from "./components/Clase41/Computacion";
import Ropa from "./components/Clase41/Ropa";
import PortalModal from "./components/Portal/PortalModal";
// import Destructuracion from "./components/destructuracion/Destructuracion";

import "../src/App.css";
import "../src/components/Child/Child.css";

class App extends Component {
  state = {
    peso: 3000,
    vidasRestantes: 7,
    name: "mirringa",
    name1: "",
    uiColor: "tomato",
    visible: false,
    num: 0
  };

  handle = name1 => {
    this.setState({ name1: name1 });
  };

  // PortalModal
  componentDidMount() {
    setInterval(() => {
      this.setState(state => ({
        ...state,
        num: state.num + 1
      }));
    }, 1000);
  }

  mostrar = () => {
    this.setState({ visible: true });
  };

  cerrar = () => {
    this.setState({ visible: false });
  };

  render() {
    const otroDatos = {
      raza: "Angoro",
      vacunas: 15
    };
    const { uiColor } = this.state;
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
        <section>
          <h5>Persistendia de los eventos </h5>
          <PersistenceEvent />
        </section>
        <section>
          <div className="box red">
            <Child onHandle={this.handle} />
            <h2>Nombre: {this.state.name1}</h2>
          </div>
        </section>
        <section>
          <Great great name="Milvia" />
        </section>
        <section>
          <Child1 uiColor={uiColor}>
            Genial <em>1000VIA❣</em>
          </Child1>
        </section>
        {/* <section>
          <Destructuracion></Destructuracion>
        </section> */}
        <section>
          <Computacion />
          <Ropa />
        </section>
        <section>
          <div>
            <button onClick={this.mostrar}>Mostrar</button>
            <PortalModal visible={this.state.visible}>
              Hola desde un PortalModal 😲 {this.state.num}
              <button onClick={this.cerrar}>Cerrar</button>
            </PortalModal>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
