import React from 'react'

function SelecciondeCategorias(props) {
  return (
    <div>
        <button style={{width:props.largo,height:props.ancho,backgroundImage:`url(${props.imagen})`,backgroundRepeat:'no-repeat'}}>
            <p>{props.texto}</p>
        </button>
    </div>
  )
}

export default SelecciondeCategorias