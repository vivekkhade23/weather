import { Box } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Productcard from '../components/Productcard'

function Home() {
const [data,setData]=useState([])

useEffect(()=>{
    fetch("https://mockkkkk.onrender.com/product/")
    .then(res=>res.json())
    .then(res=>setData(res))
    .then(res=>console.log(res))
},[])

  return (
    <Box style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)"}}>
        {data.map((el)=>{
            return <Productcard data={el}/>
        })}



    </Box>
  )
}

export default Home