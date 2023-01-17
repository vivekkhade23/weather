import { Box, Button, Image, Input } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'

function Tweetview() {
    const [gif,setGif]=useState([])
    const [inp,setInp]=useState("");

    const  searchdata=async ()=>{
       let res=await fetch(`https://api.giphy.com/v1/gifs/search?api_key=6sUiCstB4qTHPNQijjg4VbVQmkkWHTWO&q=${inp}&limit=25&offset=0&rating=g&lang=en`)
        res=await res.json();
      setGif(res.data)
    }
    console.log(gif)


  return (
    <div>
        
<Input  onChange={(e)=>setInp(e.target.value)} placeholder="serach giphy" /> 
<Button  onClick={searchdata}>SEARCH</Button>

<Box>
    {gif?.map((el)=>{
return <Box key={el.id}>
    <Image src={el.images.original.url}   alt="image"/> 
    </Box>
    })}
</Box>
    </div>
  )
}

export default Tweetview