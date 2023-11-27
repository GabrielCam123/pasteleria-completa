import React from 'react'
import "../Styles/BotonCafe.css"
function BotonCafe(props) {
  return (
    <div className="uwu">
        <button className="boton-cafe">
            <p>{props.texto}</p>
        </button>
    </div>
  )
}

export default BotonCafe;