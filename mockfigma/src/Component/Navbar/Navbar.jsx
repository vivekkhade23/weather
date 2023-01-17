import { Box, Button, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import style from "./navbar.module.css"

import { GoThreeBars } from "react-icons/go";

function Navbar() {
  return (
   <Box className={style.mainbox}>
<Text className={style.navlogo}>LOGO</Text>
<label  className={style.checkbtn}><GoThreeBars/></label>

<HStack className={style.menubar}>
<Text className={style.menutext}>About</Text>
<Text className={style.menutext}>Portfolio</Text>

<Text className={style.menutext}>Blog</Text>

<Text className={style.menutext}>Contact</Text>


</HStack>
<Box className={style.buttonbox}>

<Text className={style.buttonletter}>Sign up</Text>
</Box>
   </Box>
  )
}

export default Navbar