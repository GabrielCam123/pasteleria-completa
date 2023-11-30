import { useState } from 'react'
import './App.css'
import React from 'react'
import Bienvenido from './Components/Bienvenido'
import IniciodeSesion from './Components/IniciodeSesion'
import Registrate from './Components/Registrate'
import Principal from './Components/Principal'

const App = () => {
  return (
    <div className="app-container">
      <Principal/>
    </div>
  )
}

export default App
