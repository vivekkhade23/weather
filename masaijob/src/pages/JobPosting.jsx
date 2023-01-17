import {  Input, VStack } from '@chakra-ui/react'
import React from 'react'
import {
    FormControl,
    FormLabel,
 
  } from '@chakra-ui/react'
  import { Select } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AddJobdata } from '../Redux/action'


function JobPosting() {
    const[title,setTitle]=useState("")
    const[city,setCity]=useState("")
    const[location,setLocation]=useState("")
    const[role,setRole]=useState("")
    const[level,setLevel]=useState("")
    const[position,setPosition]=useState("")
    const[language,setLanguage]=useState("")
    const[contract,setContract]=useState("")

    const dispatch=useDispatch();


const handleSubmit=()=>{
    const d= new Date();
let day=d.getDate();
let month=d.getMonth()+1;
let year=d.getFullYear();
// console.log(day,month,year)
let date=`${year}-${month}-${day}`
   
let data={
"company":title,
"postedAt": date.toString(),
"city": city,
"location": location,
"role": role,
"level": level,
"contract": contract,
"position": position,
"language": language,
}

console.log(data);
dispatch(AddJobdata(data));

fetch('https://jobapi-1it8.onrender.com/job/addjob', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((err) => {
    console.log('err:', err);
  });



}


   
  return (
    
    <VStack>

<FormControl onSubmit={handleSubmit} className='form'>
  <FormLabel>Company Name</FormLabel>
  <Input onChange={(e)=>setTitle(e.target.value)} type='text' />

  <FormLabel>City</FormLabel>
  <Input onChange={(e)=>setCity(e.target.value)} type='text' /> 

  <FormLabel>Location</FormLabel>
  <Input onChange={(e)=>setLocation(e.target.value)} type='text' />

  <FormLabel>Role</FormLabel>

  <Select onChange={(e)=>setRole(e.target.value)} placeholder='Role'>
  <option value='Frontend'>Frontend</option>
  <option value='Backend'>Backend </option>
  <option value='FullStack'>FullStack </option>
</Select>
  <FormLabel>Level</FormLabel>

<Select onChange={(e)=>setLevel(e.target.value)} placeholder='Level'>
  <option value='Junior'>Junior </option>

  <option value='Senior'>Senior </option>
</Select>
<FormLabel>Position</FormLabel>


<Select onChange={(e)=>setPosition(e.target.value)} placeholder='Position'>
  <option value='Backend Developer'>Backend Developer </option>
  <option value='Junior Frontend Developer'>Junior Frontend Developer </option>
  <option value='Junior Backend Developer'>Junior Backend Developer </option>
  <option value='FSD'>FSD </option>
</Select>
<FormLabel>Language</FormLabel>

<Select onChange={(e)=>setLanguage(e.target.value)} placeholder='Language '>
  <option value='Javascript'>Javascript </option>
  <option value='Java'>Java </option>
  <option value='C'>C </option>
  <option value='C++'>C++ </option>

</Select>
<FormLabel>Contract</FormLabel>

<Select onChange={(e)=>setContract(e.target.value)} placeholder='Contract'>
  <option value='full time'>full time </option>
  <option value='part time'>part time </option>
</Select>

<Input onClick={handleSubmit}  type={"submit"} />

</FormControl>


    </VStack>
  )
}

export default JobPosting