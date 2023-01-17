import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import style from "./home.module.css"


const Navbar = () => {
  return (
   <Box className={style.navbar}>
    {/* ****brand**** */}
    <Box className={style.brand}>
    <Link className={style.logo}   to={"/"}>travelaja</Link>
    </Box>

    <Box className={style.menu}>

  <Box className={style.navlinkbox}>  <Link className={style.navlink} to="/">Home</Link></Box>
  <Box className={style.navlinkbox}>   <Link className={style.navlink}  to="/discover">Discover</Link></Box>
  <Box className={style.navlinkbox}> <Link  className={style.navlink}to="/services">Services</Link></Box>
  <Box className={style.navlinkbox}> <Link  className={style.navlink}to="/news">News</Link></Box>
  <Box className={style.navlinkbox}>  <Link className={style.navlink} to="/aboutus">AboutUs</Link></Box>
  <Box className={style.navlinkbox}> <Link  className={style.navlink}to="/contact">Contact</Link></Box>
 </Box>
    <Box className={style.language}>
      <Box className={style.emogi}><div className={style.vector1}></div>
      <div className={style.vector2}></div></Box>
      <Box className={style.idbox}>
     <Text className={style.id}>  Id
     </Text>  
      </Box>
    </Box>
   </Box>
  )
}

export default Navbar