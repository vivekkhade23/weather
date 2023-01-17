import React from 'react'
import { useNavigate } from 'react-router-dom'

import {
    FormControl,
    FormLabel,
    Select,
    Input,
    Button
  } from '@chakra-ui/react'
import { useState } from 'react'

const Home = () => {
const[text,setText]=useState("");
const [difficulty,setDifficulty]=useState("");
const navigate=useNavigate()

const handleCLick=()=>{

    if(text!=="" && difficulty!==""){

        navigate("/playzone",{state:[text,difficulty]});

    }

}


  return (
    <FormControl >
    <FormLabel>Player name</FormLabel>
    <Input onChange={(e)=>setText(e.target.value)} placeholder='Player name' />

    <FormLabel>Difficulty</FormLabel>
  <Select onChange={(e)=>setDifficulty(e.target.value)} placeholder='Select Difficulty'>
    <option value="High">High</option>
    <option value="Medium">Medium</option>

    <option value="Low">Low</option>
  </Select>

<br />
  <Button onClick={handleCLick}>Enter Game</Button>
  </FormControl>
  )
}

export default Home