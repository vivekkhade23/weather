import { Box, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'

const Home = () => {
const [amount,setAmount]=useState(0)
const [interest,setInterest]=useState(0)

const [tenuare,setTenuare]=useState(0)
const [data,setData]=useState([])

useEffect(()=>{
fetch(`https://mockapiserver-production.up.railway.app/`)
.then(res=>res.json())
.then(res=>setData(res))
},[interest,amount,tenuare])



  return (
    <div>
        <Input type={"number"} onChange={(e)=>setAmount(e.target.value)} placeholder="Loan amount in rs" />
        <Input type={"number"} onChange={(e)=>setInterest(e.target.value)} placeholder="annual interest in percent" />

        <Input  type={"number"} onChange={(e)=>setTenuare(e.target.value)} placeholder="tenuare in month"/>

   
{
    data.map((el)=>{
        return <Box>

        </Box>
    })
}
</div>
  )
}

export default Home