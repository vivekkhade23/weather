import React from 'react'
import {VStack,HStack,Button} from "@chakra-ui/react"
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getScore, getUserword, typingWord } from '../redux/action'
import style from "../pages/playzone.module.css"



function Keyboard({random}) {
  
    let keysone=["~","1","2","3","4","5","6","7","8","9","0","delete"]
    let keystwo=["Tab","Q","W","E","R","T","Y","U","I","O","P",`slash`]
    let keythree=["Cap","A","S","D","F","G","H","J","K","L","ENTER"]
    let keyfour=["Shift","Z","X","C","V","B","N","M","<",">","Shift"]
    let keyfive=["HOME","CONTROL","ALT","SPACE","ALT","OPTION","<-","->"]

    const [userword,setuserWord]=useState([])
    const dispatch=useDispatch();
    const word=useSelector((store)=>store.word)
    const score=useSelector((store)=>store.score)


    const getnewscore=(newword)=>{

        if(word==newword){
         let   newScore=score+word.length;
            dispatch(getScore(newScore))

        }else{
         
        let      newScore=score-word.length;
            dispatch(getScore(newScore))
        }
            
    }


    const handleclickkey=(word)=>{
if(word==="SPACE"){
    userword.push(" ")
}
else if(word==="delete"){
    userword.pop();
}
else{     
 userword.push(word)
}



let typedword=userword.join("")
dispatch(typingWord(typedword))


if(userword.length>=random.length){
 
    let newword=userword.join("");
    dispatch(getUserword(newword));
  
    getnewscore(newword);
 
    setuserWord([])
    dispatch(typingWord(""))

    dispatch(getUserword(""));

  

}


    }
  return (
    <div>


        <VStack className={style.keyboard} style={{display:"flex",justifyContent:"center"}}>
            <HStack>
{keysone.map((el,index)=>{
    return <Button  key={index} className={style.keyboardButton} onClick={()=>handleclickkey(el)}> {el}</Button>


})}
            </HStack>
            <HStack>
{keystwo.map((el,index)=>{
    return <Button key={index} className={style.keyboardButton}onClick={()=>handleclickkey(el)}> {el}</Button>


})}

            </HStack>    <HStack>
{keythree.map((el,index)=>{
    return <Button key={index} className={style.keyboardButton} onClick={()=>handleclickkey(el)}> {el}</Button>


})}

            </HStack>    <HStack>
{keyfour.map((el,index)=>{
    return <Button key={index} className={style.keyboardButton} onClick={()=>handleclickkey(el)}> {el}</Button>


})}

            </HStack>    <HStack>
{keyfive.map((el,index)=>{
    return <Button key={index} className={style.keyboardButton} onClick={()=>handleclickkey(el)}> {el}</Button>


})}

            </HStack>   
        </VStack>
    </div>
  )
}

export default Keyboard