import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../pages/SignIn'
import Signup from '../pages/Signup'
import Tweettimeline from '../pages/Tweettimeline'
import Userprofile from '../pages/Userprofile'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
<Route path='/' element={<Tweettimeline/>}/>
<Route path="/signup" element={<Signup/>}/>
<Route path="/signin" element={<SignIn/>}/>
<Route path='/user' element={<Userprofile/>}/>
        </Routes>

        
    </div>
  )
}

export default AllRoutes