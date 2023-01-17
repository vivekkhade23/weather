import { Input } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import {useDispatch} from "react-redux"
import { useNavigate } from 'react-router-dom'
import { getUser } from '../Redux/signup/actions'

const SignIn = () => {
    const [users,setUsers]=useState([])
const [username,setUsername]=useState("")
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");

const dispatch=useDispatch()
const navigate=useNavigate();

useEffect(()=>{
    fetch("https://tweeter-fly0.onrender.com/user")
    .then(res=>res.json())
    .then(res=>setUsers(res))
},[])



const LoginUser=(e)=>{
e.preventDefault();
let data={
    username:username,
    email:email,
    password:password
}
let user=""

user=users.filter((el)=>el.username==username);

if(user==""){
    alert("login failed")
}else{

    alert("login successful")
    
    dispatch(getUser(user[0].id))
navigate("/")
}

 
}



  return (
    <div>
        <form onSubmit={LoginUser}>
            <Input onChange={(e)=>setUsername(e.target.value)} placeholder='Enter Username' />
            <Input onChange={(e)=>setEmail(e.target.value)} placeholder='Enter Email'  />
            <Input onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'  />
            <Input type={"submit"} placeholder="Login"/>
        </form>
    </div>
  )
}

export default SignIn