import { Box, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineUsers } from "react-icons/hi";
import { FiTag } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";
import { CiMail } from "react-icons/ci";
import { setBookmark } from '../redux/action';



const HomeAllTickects = ({data}) => {
    // console.log(data);
    const{ category ,title,message,date}=data;
    console.log(category ,title,message,date);
    const curentUser= useSelector((store)=>store.curentUser);
    const dispatch=useDispatch();
    const curentTicket= useSelector((store)=>store.curentTicket);
    const handlebookmark=()=>{
        let bookdata={
            category:category ,
            title:title,
            message:message,
            date:curentTicket.date,
            time:curentTicket.time,
            name:curentUser.name,

        }
        console.log(bookdata)
dispatch(setBookmark(bookdata))
    }

  return (
    <Box onClick={handlebookmark} style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"whitesmoke",padding:"35px",width:"100%"}}>
  <HStack   style={{width:"100%",border:"1px solid",boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 12px",backgroundColor:"white"}}>
    <VStack  style={{width:"100%"}}>

<HStack  style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
    <Text>{title}</Text>
    <Text style={{color:"red"}}>Resolved</Text>

</HStack>
<HStack  style={{width:"100%",display:"flex",justifyContent:"space-around"}}>
    <Box  style={{width:"100%", display:"flex",alignItems:"center"}}>
<Box  style={{width:"100%",display:"flex",alignItems:"center"}}>
    <HiOutlineUsers/>
{curentUser.name}
</Box>
<Box  style={{width:"100%",display:"flex",alignItems:"center"}}>
    <FiTag/>
    {category}
</Box>
<Box  style={{width:"100%",display:"flex",alignItems:"center"}}>
    <TiMessages/>
    {5}
</Box>

</Box>
<Box  style={{width:"100%",display:"flex",alignItems:"center"}}>
<CiMail/>

<Text>
    {` Last Update    ${curentTicket.date}`}-
</Text>
<Text>
    {curentTicket.time}
</Text>
</Box>
</HStack>
    </VStack>

  </HStack>
  </Box>
  )
}

export default HomeAllTickects