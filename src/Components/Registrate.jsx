import React from 'react'
import "../Styles/Registrate.css"
import EntradadeDatos from './EntradadeDatos'
import BotonCafe from './BotonCafe'
import ConOSincuenta from './ConOSincuenta'
import SingInWith from './SingInWith'
import IniciarConGoogle from './IniciarConGoogle'
function Registrate(props) {
    const texto1="Full Name"
    const texto2="Email or Number"
    const texto3="Password"
    const texto4="Inicio de Sesión"
    const texto5="Tienes una cuenta?"
    const accion="Inicia Sesión"

  return (
    <div>
        <img src="image 4.svg"/>
        <div>
            <h2 className="titulo">Registrate</h2>
            <div className="entradadedatos">
                <EntradadeDatos texto={texto1}/>
                <EntradadeDatos texto={texto2}/>
                <EntradadeDatos texto={texto3}/>
            </div>
            <BotonCafe texto={texto4}/>
            <ConOSincuenta texto={texto5} accion={accion}/>
            <SingInWith/>
            <IniciarConGoogle/>
        </div>
    </div>
  )
}

export default Registrate