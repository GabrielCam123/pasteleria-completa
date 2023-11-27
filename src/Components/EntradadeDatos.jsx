import React from 'react'
import "../Styles/EntradadeDatos.css"
function EntradadeDatos(props) {
  return (
    <div className="contenedorentrada">
        <input type="text"  className="Miinput" placeholder={props.texto}/>
    </div>
  )
}

export default EntradadeDatos