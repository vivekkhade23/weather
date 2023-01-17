import { HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <HStack style={{display:"flex",justifyContent:"space-around",fontSize:"25px"}}>
    <Link to="/">Home</Link>
    <Link to="/quiz">Quiz</Link>
    <Link to="/results">Result</Link>
   </HStack>
  )
}

export default Navbar