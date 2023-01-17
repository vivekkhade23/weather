import { Button,  Heading, HStack } from '@chakra-ui/react'
import React from 'react';
import { Link } from 'react-router-dom';


const HomeNavbar = () => {

  return (
 <HStack style={{display:"flex",justifyContent:"space-around",width:"100%"}}>
    <Heading>
        Support Ticket
    </Heading>
   <Button style={{backgroundColor:"black",color:"white"}}>
    <Link to={"/ticket"}>
    Create
    
    </Link>
   </Button>
 </HStack>
  )
}

export default HomeNavbar