import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCorrect, getCorrectCount, getCurrentQuestions, getinCorrect, getinCorrectCount, getScore } from '../redux/action';

import style from "./quizstyle.module.css"

const QuestionCard = () => {
    const dispatch=useDispatch();    
    const questions=useSelector((store)=>store.questions)||[]
    const currentQuestion=useSelector((store)=>store.currentQuestion)
    const correct=useSelector((store)=>store.correct)
    const incorrect=useSelector((store)=>store.incorrect)

    const navigate=useNavigate()

    const [click,setClick]=useState(0)


let length=questions.length
  


const [page,setPage]=useState(1);

useEffect(()=>{
dispatch(getCurrentQuestions(questions.slice(page-1,page)))
dispatch(getCorrect(false));
dispatch(getinCorrect(false));
setClick(0)
},[page])


function handleIncorrect(){
    if(click===0){
    dispatch(getCorrect(!correct))
    dispatch(getinCorrect(!incorrect))
    dispatch(getinCorrectCount())

dispatch(getScore(-1));
setClick(1);    
}
else{
    alert("already clicked cant change answer now try next question")
}

}

function handleCorrect(){
    if(click===0){
dispatch(getCorrect(!correct))
dispatch(getinCorrect(!incorrect))
dispatch(getCorrectCount())

    dispatch(getScore(1))
    setClick(1)
    }  
    else{
        alert("already clicked cant change answer now try next question")
    }
}


const handleresult=()=>{
navigate("/results");
}


const incorr={
    backgroundColor:"grey.200",
    color:"black",
    padding: "5px",
    width: "300px"
  
}
const incorrans={
    backgroundColor:"red",
    color:"black",
    padding: "5px",
    width: "300px"
}
const corre={
    backgroundColor:"grey.200",
    color:"black",
    padding: "5px",
    width: "300px"
}
const correans={
    backgroundColor:"green",
    color:"black",
    padding: "5px",
    width: "300px"
}
console.log("quesss0",questions)

if(questions===[]||questions===null){
   navigate("/");
   return;
}


  return (
   <Box>
<Text>{page}.<span>{currentQuestion[0]?.question}?</span></Text>

<VStack>
{currentQuestion[0]?.incorrect_answers.map((el)=>{
 return   <Button  key={el}   onClick={handleIncorrect} style={incorrect?incorrans:incorr}>
{el}
    </Button>
})}
<Button onClick={handleCorrect} style={correct?correans:corre}>
    {currentQuestion[0]?.correct_answer}
</Button>
</VStack>

<HStack>
    <Text>{page}of {length} Questions</Text>
    <Button  onClick={()=>setPage(page+1)} disabled={page===length}>Next Que</Button>
    {
        page==length?<Button onClick={handleresult}>Result</Button>:null
    }
</HStack>

   </Box>
  )
}

export default QuestionCard