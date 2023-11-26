import React from "react";
import "../Styles/Bienvenido.css";
import BotonCafe from "./BotonCafe";

function Bienvenido(props) {
    const TextoBoton="Vamos"
  return (
    <div className="fondo">
      <div className="contenedor">
        <span className="texto-titulo">
          Bienvenidos a<br />
        </span>
        <span className="texto-titulo-2">Pasteleria Julieta</span>
        <p className="texto-parrafo">Pasteleria&Panaderia</p>
        <BotonCafe texto={TextoBoton}/>
      </div>
    </div>
  );
}

export default Bienvenido;
