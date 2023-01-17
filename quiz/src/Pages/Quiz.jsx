import { Box, Button, HStack, Text } from '@chakra-ui/react';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom'
import QuestionCard from '../Components/QuestionCard';
import { getAllQuestions, getCurrentQuestions } from '../redux/action';

const Quiz = () => {
    const {state}=useLocation();
    const dispatch=useDispatch();
const [data,setData]=useState([]);

if(state.questions===null){
    state.questions=1;
    
}
if(state.category===null){
    state.category=1;
}
if(state.difficulty===null){
    state.difficulty="easy";
    
}
function getQuestions(questions=1,category=1,difficulty="easy"){
    fetch(`https://opentdb.com/api.php?amount=${questions}&category=${category}&difficulty=${difficulty}&type=multiple`)
    .then (res=>res.json())
    .then(res=>setData(res.results))
    .catch(err=>console.log(err))
}

useEffect(()=>{
getQuestions(state.questions,state.category,state.difficulty);
},[])


useEffect(()=>{
    dispatch(getAllQuestions(data))
    dispatch(getCurrentQuestions(data.slice(0,1)))

},[data])



console.log(data)
let length=data.length

  return (
   <Box>
{/* {data.map((el,index)=>{ */}
    {/* return */}
     <QuestionCard  />
{/* })} */}

   </Box>
  )
}

export default Quiz