import { Box, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'

function Productcard({data}) {
let props={...data}
const Onclick=async(id)=>{
    // :itemID/delete
    // https://mockkkkk.onrender.com/product
    const res = await fetch(`https://mockkkkk.onrender.com/product/${id}/delete`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    });
     res = 'deleted';
  
      
        return res;
}


const AddBookMark=(el)=>{
      fetch(`https://mockkkkk.onrender.com/bookmark/addBookmark`, {
        method: 'POST',
        body: JSON.stringify({
            itemTitle:el.itemTitle,
            quantity:el.quantity,
            priority:el.priority,
            description:el.description,
            dateTime:el.dateTime,
        }),
        headers: {
            'Content-type': 'application/json'
        }
    })
    .then(res => res.json())
 
    .then(res => console.log(res));  
      
}

  return (
   <Box style={{display:"flex",flexDirection:"coloumn"}}>
    <Text>{props.itemTitle}</Text>
    <Text>{props.quantity}</Text>
    <Text>{props.priority}</Text>
    <Text>{props.dateTime}</Text>
 <HStack>
<Button Onclick={()=>AddBookMark(props._id)}>BookMark</Button>
  <Button Onclick={()=>Onclick(props)}>Delete</Button>

 </HStack>
  
   </Box>
  )
}

export default Productcard;