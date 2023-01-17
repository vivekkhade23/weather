import { Box } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux';
import AllBookmarks from '../component/AllBookmarks';

const Bookmark = () => {
    const bookmarks= useSelector((store)=>store.bookmarks);


  return (
   <Box>
    {
        bookmarks?.map((el,ind)=>{
            return <AllBookmarks key={ind} data={el}  />
        })
    }
   </Box>
  )
}

export default Bookmark