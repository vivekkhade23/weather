import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Quiz from '../Pages/Quiz'
import Result from '../Pages/Result'

const AllRoutes = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/quiz' element={<Quiz/>}/>
    <Route path='/results' element={<Result/>}/>
  </Routes>
  )
}

export default AllRoutes