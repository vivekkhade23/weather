import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Aboutus from '../pages/Aboutus'
import Contact from '../pages/Contact'
import Discover from '../pages/Discover'
import Home from '../pages/Main'
// import Home from '../Pages/Home'
import News from '../pages/News'
import Services from '../pages/Services'

function AllRoute() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/discover' element={<Discover/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/news' element={<News/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/aboutus' element={<Aboutus/>}/>



</Routes>
  )
}

export default AllRoute