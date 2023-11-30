import { useState } from 'react'
import './App.css'
import React from 'react'
import Bienvenido from './Components/Bienvenido'
import IniciodeSesion from './Components/IniciodeSesion'
import Registrate from './Components/Registrate'
import Principal from './Components/Principal'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route path='/' element={<Bienvenido/>}/>
        <Route path='/registrate' element={<Registrate/>}/>
        <Route path='/principal' element={<Principal/>}/>
      </Routes>
    </div>
  )
}

export default App