import React from 'react'

import {HStack} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <HStack  style={{display:"flex",justifyContent:"space-around"}}>
<Link to={"/"}>TWEETTIMELINE</Link>
    <Link to={"/user"} >USER</Link>
    <Link to="/signup">Signup</Link>
    <Link to="/signin">Signin</Link>

   </HStack>
  )
}

export default Navbar