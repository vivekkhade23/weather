import { Box, Input } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../Redux/signup/actions'

const Signup = () => {
    const [users,setUsers]=useState([])
    const [username,setUsername]=useState("")
const[image,setImage]=useState("");
    const [fullname,setFullname]=useState("")
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    
    const dispatch=useDispatch()
const navigate=useNavigate();

useEffect(()=>{
   fetch('https://tweeter-fly0.onrender.com/user')
    .then(res=>res.json())
    .then(res=>setUsers(res))

})


const Signupuser=(e)=>{
    e.preventDefault();
let post={
 username:username,
 image:image,
 fullname:fullname,
 email:email,
 password:password
}
let flag=true;
for(let i=0;i<users.length;i++){
    if(users[i].username==username){
        flag=false;
        break;
    }
}
if(flag===true){
    dispatch(setUser(post));
    navigate("/signin")
}
else{
    alert("username already exist please change it");
    return;
}


}

  return (
<Box>
<form onSubmit={Signupuser}>
    <Input type="text" onChange={(e)=>setUsername(e.target.value)}  placeholder='Enter Your username'/>
    <Input type="url" onChange={(e)=>setImage(e.target.value)}  placeholder='Enter Your image' />
    <Input type="text" onChange={(e)=>setFullname(e.target.value)}  placeholder='Enter Your fullname'/>
    <Input type="email" onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter Your email'/>
    <Input type="password" onChange={(e)=>setPassword(e.target.value)}  placeholder='Enter Your Password'/>
<Input type={"submit"} placeholder="SIGNUP"/>
    </form>
</Box>

    )
}

export default Signup