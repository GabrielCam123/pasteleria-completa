import React from 'react'

function DestacadosDescripcion(props) {
    const postredestacado =props.postredestacado
  return (
    <div>   
        <button>
            <p>{postredestacado.titulo}</p>
            <p>{postredestacado.descripcion}</p>
            <img src={postredestacado.imgUrl}/>
            <p>{postredestacado.precio}</p>
            <p>{postredestacado.disponible}</p>
        </button>
    </div>
  )
}

export default DestacadosDescripcion