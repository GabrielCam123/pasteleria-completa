import React from 'react'
import "../Styles/BarradeBusqueda.css"
function BarradeBusqueda() {
  return (
    <div className='contenedorbusqueda'>
        <img src="./icono de busqueda.svg" alt="" />
        <input type="text" placeholder='Buscar' className='contenedorb'/>
    </div>
  )
}

export default BarradeBusqueda