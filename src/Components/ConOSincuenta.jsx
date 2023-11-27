import React from 'react'
import "../Styles/ConOSincuenta.css"
function ConOSincuenta(props) {
  return (
    <div className="contenedor-ConOSincuenta">
        <p>{props.texto}</p>
        <button className="boton">{props.accion}</button>
    </div>
  )
}

export default ConOSincuenta