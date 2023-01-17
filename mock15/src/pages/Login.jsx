import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SetAuth, setCurrentUser } from '../redux/action';

const Login = () => {
    const [emails,setEmails]=useState("");
    const [passwords,setPasswords]=useState("");
    const users= useSelector((store)=>store.users);
    const dispatch=useDispatch();
    const navigate=useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault();
        const newuser={
           
            email:emails,
            password:passwords,
        
        }
        let useer=users.filter((el)=>{
            return el.email===newuser.email
        })

        console.log(useer,newuser)
       
         if(useer===[]||!useer){
            alert("Incorrect credentials")
        }
       else if(newuser.email===useer[0].email){
            dispatch(setCurrentUser(useer[0]))
            dispatch(SetAuth(true))
            navigate("/");
        }
      
        }
        
  return (
    <FormControl>

  <FormLabel>Email address</FormLabel>
  <Input onChange={(e)=>setEmails(e.target.value)} type='email' />
  <FormLabel>Password</FormLabel>
  <Input onChange={(e)=>setPasswords(e.target.value)} type='password' />
  <Button onClick={handleLogin}>SignUp</Button>
</FormControl>
  )
}

export default Login