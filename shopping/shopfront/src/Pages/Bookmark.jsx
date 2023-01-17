import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Productcard from '../components/Productcard'

function Bookmark() {
    const [data,setData]=useState([])

useEffect(()=>{
    fetch("https://mockkkkk.onrender.com/bookmark/")
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

export default Bookmark