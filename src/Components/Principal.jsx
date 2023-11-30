import React from 'react'
import HeaderPrincipal from './HeaderPrincipal'
import BarradeBusqueda from './BarradeBusqueda'
import "../Styles/Principal.css"
import SelecciondeCategorias from './SelecciondeCategorias'
import Destacados from './Destacados'
import { postredestacado } from '../assets/DestacadosAPI'
function Principal() {
    const imagen1="../Pasteles.svg";const texto1="Pasteles";const largo1="120px";const ancho1="90px"
    const imagen2="../Donas.svg";const texto2="Donas";const largo2="180px";const ancho2="80px"
    const imagen3="../chesco.svg";const texto3="ChescoMufins";const largo3="130px";const ancho3="80px"
    const imagen4="../marrana.svg";const texto4="Panes";const largo4="150px";const ancho4="90px"
  return (
    <div className='estiloprincipal'>
        <HeaderPrincipal/>
        <BarradeBusqueda/>
        <div className="estiloseleccion">
            <div className="estiloseleccion1">
                <SelecciondeCategorias imagen={imagen1} texto={texto1} largo={parseInt(largo1)} ancho={parseInt(ancho1)}/>
                <SelecciondeCategorias imagen={imagen2} texto={texto2} largo={parseInt(largo2)} ancho={parseInt(ancho2)}/>                
            </div>
            <div className="estiloseleccion1">
                <SelecciondeCategorias imagen={imagen3} texto={texto3} largo={parseInt(largo3)} ancho={parseInt(ancho3)}/>
                <SelecciondeCategorias imagen={imagen4} texto={texto4} largo={parseInt(largo4)} ancho={parseInt(ancho4)}/>
            </div>
        </div>
        <Destacados postredestacado={postredestacado}/>
    </div>
  )
}

export default Principal