import { Box, Button, FormControl, FormLabel, Input, Select, VStack } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllTicket, getCurrentTicket } from '../redux/action';

const Ticket = () => {
const [category,setCategory]=useState("");
const [title,setTitle]=useState("")
const [message,setMessage]=useState("")
const dispatch=useDispatch();
const navigate=useNavigate()



    function handleTicket(e){
e.preventDefault();

let d= new Date();
let day=d.getDay();
let month=d.getMonth();
let year=d.getFullYear();

let date=`${day} ${month} ${year}`;

let hr=d.getHours()-1;
let min=d.getMinutes()-1
let time=`${hr} ${min} `
const data={
    category:category,
    title:title,
    message:message,
    date:date,
    time:time,
}
dispatch(getAllTicket(data))
dispatch(getCurrentTicket(data));

navigate("/")
}

  return (
    <Box style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"whitesmoke",padding:"35px"}}>
    <VStack style={{width:"80%",height:"80%",backgroundColor:"white",padding:"35px"}}>
        <FormControl>
  <FormLabel>Category</FormLabel>
  <Select width={"20%"} onChange={(e)=>setCategory(e.target.value)} placeholder='Select' >
     <option value={"Withdrawal"}>Withdrawal</option>
     <option value={"Counselling support"}>Counselling support</option>
     <option value={"Missed evaluation submission"}> Missed evaluation submission</option>
     <option value={"Late Evaluation submission"}>Late Evaluation submission</option>
     <option value={"Leave"}>Leave</option>
     <option value={"MAC"}>MAC</option>
     <option value={"Product Support"}>Product Support</option>
     <option value={"Coding Platform"}>Coding Platform</option>
     <option value={"Attendance Query"}>Attendance Query</option>
     <option value={"NBFC/ISA"}>NBFC/ISA</option>
     <option value={"Course Query"}>Course Query</option>
     <option value={"Electives"}>Electives</option>
     <option value={"Referrals"}>Referrals</option>



</Select>
<FormLabel>Title</FormLabel>
  <Input onChange={(e)=>setTitle(e.target.value)} type='Text' />
  <FormLabel>Message</FormLabel>
  <Input onChange={(e)=>setMessage(e.target.value)} height={"450px"} type='Text' />
<br />
<br />
  <Button onClick={handleTicket} style={{display:"flex",justifySelf:"flex-start",backgroundColor:"black",color:"white"}}>
    Create ticket
  </Button>
</FormControl>


    </VStack>
    </Box>
  )
}

export default Ticket