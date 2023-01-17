import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAllUsers } from '../redux/action';

const Signup = () => {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const users= useSelector((store)=>store.users);
    const dispatch=useDispatch();
    const navigate=useNavigate()
    

function handleSignup(e){
e.preventDefault();
const user={
    name:name,
    email:email,
    password:password,
    date:Date.now()
}
    dispatch(setAllUsers(user));
    navigate("/login");


console.log(user);
}

  return (
<FormControl>
<FormLabel>Name</FormLabel>
  <Input onChange={(e)=>setName(e.target.value)} className="name" type='text' />
  <FormLabel>Email address</FormLabel>
  <Input onChange={(e)=>setEmail(e.target.value)}className="email"type='email' />
  <FormLabel>Password</FormLabel>
  <Input onChange={(e)=>setPassword(e.target.value)} className="pass" type='password' />
  <Button onClick={handleSignup}>SignUp</Button>
</FormControl>
  )
}

export default Signup