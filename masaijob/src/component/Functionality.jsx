import { Select, VStack } from '@chakra-ui/react'
import React from 'react'
// import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterJob, sortjobs } from '../Redux/action'

const Functionality = ({data}) => {
const jobs=useSelector((store)=>store.jobs)
const dispatch=useDispatch();
const filteredjobs=useSelector((store)=>store.filteredjobs)








    function handleFilter(e){
if(e.target.value==="all"){
  let filteredjobs=jobs.filter((el)=>{
    return el.role;
});
  dispatch(filterJob(filteredjobs));
  return;
}
let filteredjobs=jobs.filter((el)=>{
    return el.role===e.target.value
});
// console.log("filter",filteredjobs)
dispatch(filterJob(filteredjobs));
    }

function handleSort(e){
    let q=e.target.value;
    
 if(q==="asc")  {
    filteredjobs.sort((a,b)=>a.postedAt.split("-").join("").map(Number)-b.postedAt.split("-").join("").map(Number))
   

    }
 if(q==="desc"){
  filteredjobs.sort((a,b)=>b.postedAt.split("-").join("").map(Number)-a.postedAt.split("-").join("").map(Number))

}
let sortedArray=[...filteredjobs]
dispatch(sortjobs(sortedArray))
}



  return (
  <VStack>
<Select placeholder='Role' onChange={handleFilter} >
  <option value="all">All</option>
<option value='Frontend'>Frontend</option>
  <option value='Backend'>Backend </option>
  <option value='FullStack'>FullStack </option>
</Select>
<br />
<Select placeholder='Sorting by date' onChange={handleSort}>
  <option value='asc'> Ascending</option>
  <option value='desc'>Descending</option>
</Select>



  </VStack>
  )
}

export default Functionality