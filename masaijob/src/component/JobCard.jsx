import { Box, Button, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import style from "./style.module.css"


function JobCard({data}) {
    console.log(data,"data")
  return (
   <Box className={style.mainbox} >
    <Box className={style.subbox}>
    <Image className={style.image}  src='https://cdn.vectorstock.com/i/preview-1x/13/04/male-profile-picture-vector-2041304.jpg' alt='img'  />

<VStack>
    <Text className={style.name}>{data.company}</Text>
    <Heading>{data.position}</Heading>
    <HStack>
        <Text>{data.postedAt}</Text>
        <Text>.</Text>
        <Text>{data.contract}</Text>
        <Text>.</Text>
        <Text>{data.location}</Text>
    </HStack>
</VStack>
</Box>
<Box>
    <Button className={style.button}>{data.role}</Button>
    <Button className={style.button}>{data.level}</Button>
    <Button className={style.button}>{data.language}</Button>

</Box>


   </Box>
  )
}

export default JobCard