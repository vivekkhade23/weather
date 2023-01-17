import { HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <HStack style={{display:"flex",justifyContent:"space-around"}}>
        <Link to="/">Jobposting</Link>
        <Link to="/joblisting">JobListing</Link>
    </HStack>
  )
}

export default Navbar