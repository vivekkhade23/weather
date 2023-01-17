import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../Pages/AddProduct'
import Bookmark from '../Pages/Bookmark'
import Home from '../Pages/Home'

function AllRoutes() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/bookmarks' element={<Bookmark/>}/>
    <Route path='/addproduct' element={<AddProduct/>}/>


   </Routes>
  )
}

export default AllRoutes