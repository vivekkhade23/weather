import { Box, Button, FormControl, FormLabel, Heading, HStack, Input, Radio, RadioGroup, Select } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllQuestions, getCurrentQuestions } from '../redux/action'
import style from"./Style.module.css"


const Home = () => {
const navigate=useNavigate()
    const [category,setCategory]=useState(0);
    const [difficulty,setDifficulty]=useState("easy");
    const [questions,setQuestions]=useState(0);


    function handleSubmit(e){
e.preventDefault();
let data={
    category:+category,
    difficulty:difficulty,
    questions:+questions
}

navigate("/quiz",{state:data})

    }

  return (
    <FormControl className={style.formbox}>
        <Heading>Set up Your Quiz!</Heading>
        <Box className={style.box}>
         <FormLabel>Category</FormLabel>
  <Select onChange={(e)=>setCategory(e.target.value)} className={style.selectbox}   placeholder='Select Category'>
    <option value={9}>General Knowledge</option>
    <option value={21}>Sports</option>
    <option value={22}>Geography</option>
  </Select>
  </Box>
  <Box className={style.box}>

  <FormLabel >Difficulty</FormLabel>
  <RadioGroup >
    <HStack  onChange={(e)=>setDifficulty(e.target.value)} spacing='24px'>
      <Radio value='easy'>Easy</Radio>
      <Radio value='medium'>Medium</Radio>
      <Radio value='hard'>Hard</Radio>
    </HStack>
  </RadioGroup>
  </Box>
  <Box className={style.box}>


  <FormLabel>Number of Questions</FormLabel>
  <Input onChange={(e)=>setQuestions(e.target.value)} className={style.colorbox}  type='number' />

<br />
<br />
<Button className={style.buttonstart} onClick={handleSubmit} backgroundColor="#5c737e" type='submit'>Start</Button>
</Box>
</FormControl>
  )
}

export default Home