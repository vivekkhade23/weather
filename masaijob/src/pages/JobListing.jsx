import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Functionality from '../component/Functionality'
import JobCard from '../component/JobCard'

function JobListing() {
    const [data,setData]=useState([])

    const jobs=useSelector((store)=>store.jobs)
console.log(jobs)
const filteredjobs=useSelector((store)=>store.filteredjobs);

useEffect(()=>{
    fetch("https://jobapi-1it8.onrender.com/job")
    .then(res=>res.json())
    .then(res=>setData(res))
},[])


  return (
    <Box>
<Functionality data={data}/>
    <Box>
{filteredjobs.map((el,index) => {  return <JobCard key={index} data={el} />
})}
    </Box>
</Box>
  )
}

export default JobListing