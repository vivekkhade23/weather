import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Playzone from '../pages/Playzone'

const AllRoutes = () => {
  return (
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/playzone" element={<Playzone/>}/>


  </Routes>
  )
}

export default AllRoutes