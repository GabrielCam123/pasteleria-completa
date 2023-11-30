import React from "react";
import "../Styles/Bienvenido.css";
import BotonCafe from "./BotonCafe";
import { Link } from "react-router-dom";

function Bienvenido() {
    const TextoBoton="Vamos"
  return (
    <div className="fondo">
      <div className="contenedorbienvenido">
        <span className="texto-titulo">
          Bienvenidos a<br />
        </span>
        <span className="texto-titulo-2">Pasteleria Julieta</span>
        <p className="texto-parrafo">Pasteleria&Panaderia</p>
        <Link to='/registrate'>
          <BotonCafe texto={TextoBoton}/>
        </Link>
      </div>
    </div>
  );
}

export default Bienvenido;
