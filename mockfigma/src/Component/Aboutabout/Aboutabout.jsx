import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import style from "./aboutabout.module.css"

function Aboutabout() {
  return (
   <Box className={style.aboutmain}>
    <Box className={style.aboutbox}>
<Text className={style.about}>About</Text>
<Box className={style.vivendo}>
    <Text className={style.vivendoletter}>Vivendo offendit persecuti</Text>
</Box>

</Box>

   </Box>
  )
}

export default Aboutabout