import { Button, HStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { SetAuth } from '../redux/action'

const Navbar = () => {
  const dispatch=useDispatch();
const curentUser= useSelector((store)=>store.curentUser);
  const isAuth= useSelector((store)=>store.isAuth);
const handleLogout=()=>{
dispatch(SetAuth(false))

}

  return (
   <HStack style={{display:"flex",justifyContent:"space-around",fontSize:"25px"}}>
    <Link to="/">Home</Link>
    <Link to="/bookmarks">Bookmark</Link>
  {
    isAuth?<HStack style={{display:"flex",justifyContent:"space-around",fontSize:"25px",width:"30%"}}>
      <Button style={{backgroundColor:"black",color:"white"}} >{curentUser.name}</Button>
      <Button style={{backgroundColor:"black",color:"white"}} onClick={handleLogout}>Logout</Button>
      </HStack>
      :
    <HStack style={{display:"flex",justifyContent:"space-around",fontSize:"25px",width:"30%"}}>
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
</HStack>
  } 
    

    
   </HStack>
  )
}

export default Navbar