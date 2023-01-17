import { Heading, Input, Select, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

function AddProduct() {
    const[title,setTitle]=useState("")
    const[quantity,setQuantity]=useState("")
    const[priority,setPriority]=useState("")
    const[des,setDes]=useState("")

   
    const handleSubmit=()=>{
     let   Time = new Date();

        let items={
            itemTitle:title,
            quantity:quantity,
            priority:priority,
            description:des,
            dateTime:Time
        }
        fetch(`https://mockkkkk.onrender.com/product/addProduct`, {
            method: 'POST',
            body: JSON.stringify({
              items
            }),
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
     
        .then(res => console.log(res));  



    }


  return (
   <VStack>
    <Heading>ADD ITEMS</Heading>
    <form onSubmit={handleSubmit} >
    <Input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder='Enter your title' />
    <Input type="number" onChange={(e)=>setQuantity(e.target.value)} placeholder='Enter your quantity' />
    {/* <Input type="text" placeholder='Enter your priority' /> */}
    <Select onChange={(e)=>setPriority(e.target.value)} >
        <option>Priority</option>
        <option value={"High"}>High</option>
        <option value={"Low"}>Low</option>
    </Select>
    <Input type="datetime-local" placeholder='Enter your time' />
    <Input onChange={(e)=>setDes(e.target.value)} type="text" placeholder='Enter your Description'/>
<Input type="submit" placeholder="ADD PRODUCT"/>
    </form>
   </VStack>
  )
}

export default AddProduct