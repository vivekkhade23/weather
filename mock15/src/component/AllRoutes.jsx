import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Bookmark from '../pages/Bookmark'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import Ticket from '../pages/Ticket'

const AllRoutes = () => {
  return (
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/ticket' element={<Ticket/>}/>
    <Route path='/bookmarks' element={<Bookmark/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<Signup/>}/>


  </Routes>
  )
}

export default AllRoutes