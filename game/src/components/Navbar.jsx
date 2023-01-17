import { HStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <HStack style={{display:"flex",justifyContent:"space-around"}}>
        <Link to="/">Home</Link>
        <Link to="/playzone">Playzone</Link>

    </HStack>
  )
}

export default Navbar