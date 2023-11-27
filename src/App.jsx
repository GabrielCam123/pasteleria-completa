import { useState } from 'react'
import './App.css'
import React from 'react'
import Bienvenido from './Components/Bienvenido'
import IniciodeSesion from './Components/IniciodeSesion'

const App = () => {
  return (
    <div className="app-container">
      <IniciodeSesion/>
    </div>
  )
}

export default App
