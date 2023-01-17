import React from 'react'
import { Route, Routes } from 'react-router-dom'
import JobListing from '../pages/JobListing'
import JobPosting from '../pages/JobPosting'

const AllRoutes = () => {
  return (
  

<Routes>
<Route path='/' element={<JobPosting/>} />
<Route path='/joblisting' element={<JobListing/>}  />
</Routes>

  )
}

export default AllRoutes