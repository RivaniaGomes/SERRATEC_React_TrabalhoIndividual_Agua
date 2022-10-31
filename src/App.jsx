import { useState } from 'react'
import './App.css'
import Bio from './Components/Bio'
import Header from './Components/Header'

function App() {
  return (
    <>
    <Header texto = "Controle de Quantidade de água ingerida" />
    <Bio/>
    </>
  )
}

export default App
