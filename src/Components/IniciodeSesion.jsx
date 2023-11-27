import React from "react";
import EntradadeDatos from "./EntradadeDatos";
import "../Styles/IniciodeSesion.css";
import BotonCafe from "./BotonCafe";
import ContraseñaOlvidada from "./ContraseñaOlvidada";
import ConOSincuenta from "./ConOSincuenta";
import SingInWith from "./SingInWith";
import IniciarConGoogle from "./IniciarConGoogle";
function IniciodeSesion(props) {
  const Texto1 = "Email or number";
  const Texto2 = "Password";
  const Texto3 = "Iniciar Sesión";
  const Texto4 ="No tienes una cuenta?";
  const Accion="Registrarse";
  return (
    <div className="contenedor-inicio">
      <h2 className="tituloestilo">Inicio de sesion</h2>
      <div className="entradasdedatos">
        <EntradadeDatos texto={Texto1} />
        <EntradadeDatos texto={Texto2} />
      </div>
      <ContraseñaOlvidada/>
      <BotonCafe texto={Texto3} />
      <ConOSincuenta texto={Texto4} accion={Accion}/>
      <SingInWith/>
      <IniciarConGoogle/>
    </div>
  );
}

export default IniciodeSesion;
