import React from 'react'
import {  useLocation } from "react-router-dom"
import {Box,HStack,Text,Heading} from "@chakra-ui/react"
import Keyboard from '../components/Keyboard'
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getRandomword, getUserword, typingWord } from '../redux/action'
import { useEffect } from 'react'
import style from "./playzone.module.css"
import { useNavigate } from 'react-router-dom'

const Playzone = () => {
    const [random,setRandom]=useState("")
    const dispatch=useDispatch();
    const navigate=useNavigate()

    const {state}=useLocation()
    if(state==null){
        state[0]="undefined";
        state[1]="undefined"
    }

    console.log(state)
    const score=useSelector((store)=>store.score);
    const typingword=useSelector((store)=>store.typingword);

const [time,setTime]=useState(0)


  



    // ******************
    
    useEffect(()=>{
        if(state[1]==="High"){
            setTime(10)
        }
        else if(state[1]==="Medium"){
            setTime(20)
        
        }
        else{
            setTime(30)
        }
     
Getword();
   },[score])
    useEffect(()=>{
        if(state[1]==="High"){
            setTime(10)
        }
        else if(state[1]==="Medium"){
            setTime(20)
        
        }
        else{
            setTime(30)
        }
Getword();
    },[])

// *******************


const Getword=()=>{
    fetch("https://api.api-ninjas.com/v1/randomword",{
        headers:{
            'X-Api-Key':"FmYS9w7rOW7c9VN1ZkAx4g==fhOblxFLabY1ACIW"
        }
    })
    .then(res=>res.json())
    
    .then(res=>setRandom(res.word.toUpperCase()))
  
}

useEffect(()=>{
    console.log(random)
    let newrandom=random.toUpperCase();
    dispatch(getRandomword(newrandom))

},[random])


if(state==null||state===undefined){
    return  navigate("/")
  }


  return (
   <Box>
<Heading>
PlayerName:{state[0]}

</Heading>
<br />
<Heading>
    Difficulty:{state[1]}
</Heading>
<br />
    <Heading>
        Score :  {score}
    </Heading>
    <br />

    <br /> 
      <br />  
       <br />
       <Heading>
        {time}
       </Heading>
    <HStack>


<Box  className={style.randombox}>
{random}
</Box>
<Box className={style.randombox}>
    {typingword}
</Box>
<Box>

</Box>
    </HStack>

<Keyboard random={random} />
   </Box>
  )
}

export default Playzone