import { useState } from 'react'
import './App.css'
import React from 'react'
import Bienvenido from './Components/Bienvenido'
import IniciodeSesion from './Components/IniciodeSesion'
import Registrate from './Components/Registrate'

const App = () => {
  return (
    <div className="app-container">
      <Registrate/>
    </div>
  )
}

export default App
