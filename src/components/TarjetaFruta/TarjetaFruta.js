import React from "react";
// import "./TarjetaFruta.css";
import styles from "./TarjetaFruta.module.css";

class TarjetaFruta extends React.Component {
  state = {
    cantidad: 0
  };

  addElemente = () => {
    this.setState({
      cantidad: this.state.cantidad + 1
    });
  };

  subtractElement = () => {
    this.setState({
      cantidad: this.state.cantidad - 1
    });
  };

  clearElement = () => {
    this.setState({
      cantidad: 0
    });
  };

  render() {
    const hasItems = this.state.cantidad > 0;
    const activeClass = hasItems ? styles["card-active"] : "";
    const clases = styles.card + " " + activeClass;

    return (
      <div className={clases}>
        <h3>{this.props.name}</h3>
        <hr></hr>
        <div>Cantidad: {this.state.cantidad}</div>
        <section className="buttons">
          <button onClick={this.addElemente}>➕</button>
          <button onClick={this.subtractElement}>➖</button>
          <button onClick={this.clearElement}>🆑</button>
        </section>

        <p> $ {this.props.price}</p>
        <p>Total: ${this.props.price * this.state.cantidad}</p>
      </div>
    );
  }
}

export default TarjetaFruta;
