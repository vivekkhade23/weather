import { Box, HStack, Image, Text } from '@chakra-ui/react'
import style from "./incident.module.css"
import React from 'react'
import fill from "./fill.svg"
import shape4 from "./shape4.svg"
import shape5 from "./shape5.svg"



function Incident() {
  return (
   <Box className={style.mainbox}>


<Box className={style.display1}>

<Box className={style.imageback}></Box>

</Box>



<Box className={style.display}>
  <Box className={style.homerologo}>
    <Text className={style.homerologoletter}>inciderint</Text>
  </Box>
  <Box className={style.heading}>
    <Text className={style.headingletter}>Lorem deterruisset </Text>
</Box >
  
<Box  className={style.parahome}>
    <Text className={style.parahomeletter}>
    Mei mazim iudico tritani te, qui feugait electram an. An mel <br /> corpora consectetuer. Duo veri eripuit honestatis ei.
    </Text>
<Box>
<Box>
    <Box style={{display:"flex"}}>
    <Box className={style.shape}><Image className={style.shape1} src={fill} alt="img"/></Box>
    <Box className={style.text}><Text className={style.text1}>Mandamus expetenda has ex</Text></Box>

</Box>


<Box style={{display:"flex"}}>
    <Box className={style.shape}><Image className={style.shape1} src={shape4} alt="img"/></Box>
    <Box className={style.text}><Text className={style.text1}>Mandamus expetenda has ex</Text></Box>

</Box>
<Box style={{display:"flex"}}>
    <Box className={style.shape}><Image className={style.shape1} src={shape5} alt="img"/></Box>
    <Box className={style.text}><Text className={style.text1}>Mandamus expetenda has ex</Text></Box>

</Box>

</Box>
</Box>
</Box>
<HStack>
{/* <Box className={style.buttonbox}>

<Text className={style.buttonletter}>Explore</Text>
</Box>

<Box className={style.buttonbox1}>

<Text className={style.buttonletter1}>Learn more</Text> */}
{/* </Box> */}
</HStack>

</Box>

</Box>


  )
}

export default Incident