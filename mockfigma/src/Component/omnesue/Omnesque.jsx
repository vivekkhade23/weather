import { Box, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import style from "./omnesque.module.css"
import shape1 from "./CombinedShape.svg"
import shape2 from "./shape2.svg"
import shape3 from "./shape3.svg"


function Omnesque() {
  return (
 <Box className={style.mainom} >
<Box>
<Box className={style.vivendobox} >
    <Text className={style.vivendoboxletter}>
    Vivendo omnesque
    </Text>
</Box>

<Box className={style.para}>
    <Text  className={style.paraletter}>Eu minim movet quodsi eum. Et vim dolore epicurei, ut aeque postea nam, at posse dicta est.</Text>
</Box>
</Box>


<Box className={style.HStackbox}>
<Box className={style.hstacks}>

<Box className={style.boxbox}>
<Image src={shape1} className={style.shape1}  alt="image"/>

<Box className={style.head}><Text className={style.headletter}>Quidam officiis</Text></Box>
<Box className={style.paras}><Text className={style.parasletter}>Pro ad ubique erroribus, in modo mutat sed. Suscipit, natum animal qui et.</Text></Box>


<Box  className={style.rect}></Box>
<Box  className={style.learn}>
<Text  className={style.learnletter}>Learn more</Text>
</Box>


</Box>


<Box className={style.boxbox1}>
<Image src={shape2} className={style.shape2}  alt="image"/>

<Box className={style.head}><Text className={style.headletter}>Quidam officiis</Text></Box>
<Box className={style.paras}><Text className={style.parasletter}>Pro ad ubique erroribus, in modo mutat sed. Suscipit, natum animal qui et.</Text></Box>


<Box  className={style.rect}></Box>
<Box  className={style.learn}>
<Text  className={style.learnletter}>Learn more</Text>
</Box>


</Box>
<Box className={style.boxbox2}>
<Image src={shape3} className={style.shape3}  alt="image"/>

<Box className={style.head}><Text className={style.headletter}>Quidam officiis</Text></Box>
<Box className={style.paras}><Text className={style.parasletter}>Pro ad ubique erroribus, in modo mutat sed. Suscipit, natum animal qui et.</Text></Box>


<Box  className={style.rect}></Box>
<Box  className={style.learn}>
<Text  className={style.learnletter}>Learn more</Text>
</Box>


</Box>


</Box>



</Box>


 </Box>
  )
}

export default Omnesque