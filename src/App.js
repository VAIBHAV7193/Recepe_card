import React from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import AllRecepe from './Component/AllRecepe'
import RecepeCard from './Component/RecepeCard'
import IngredientsCard from './Component/IngredientsCard'

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<AllRecepe/>}/>
        <Route path='/card/:ingredient' element={<RecepeCard/>}/>
        <Route path='/ingredients/:id' element={<IngredientsCard/>}/>
       </Routes>
    </div>
  )
}

export default App
