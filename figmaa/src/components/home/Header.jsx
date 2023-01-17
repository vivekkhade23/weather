import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from './Hero'

import style from "./home.module.css"
import Navbar from './Navbar'

const Header = () => {
  return (
    <Box className={style.header}  >
<Navbar/>
<Hero/>
    </Box>
  )
}

export default Header