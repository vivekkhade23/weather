import { Box } from '@chakra-ui/react'
import React from 'react'
import style from "./home.module.css"


function Hero() {
  return (
    <Box className={style.heromain}>
<Box className={style.herotitle}>

<Box className={style.explore}>Explore the world with a smile</Box>
<Box className={style.lorem}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,
</Box>

</Box>
<Box  className={style.herosearch}>

</Box>
    </Box>
  )
}

export default Hero