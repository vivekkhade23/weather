import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

<Box style={{display:"flex",justifyContent:"space-around"}}>
    <Link to="/">Home</Link>
    <Link to="/addproduct">Add Product</Link>
    <Link to="/bookmarks">Bookmarks</Link>
</Box>
    )
}

export default Navbar