import { VStack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import HomeAllTickects from '../component/HomeAllTickects'
import HomeNavbar from '../component/HomeNavbar'

const Home = () => {
    const tickets= useSelector((store)=>store.tickets);

  return (
   <VStack>
    <HomeNavbar/>

    {

tickets?.map((el,index)=>{
    return <HomeAllTickects key={index} data={el}/>
})

    }
   </VStack>
  )
}

export default Home