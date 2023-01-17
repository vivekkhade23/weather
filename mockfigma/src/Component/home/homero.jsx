import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import style from "./homero.module.css"

function Homero() {
  return (

<Box className={style.homerobox}>
<Box className={style.display}>
  <Box className={style.homerologo}>
    <Text className={style.homerologoletter}>homero</Text>
  </Box>
  <Box className={style.heading}>
    <Text className={style.headingletter}>Debet molestiae constituto </Text>
</Box >
  
<Box  className={style.parahome}>
    <Text className={style.parahomeletter}>
    Quo ex ocurreret quaerendum. Mel <br /> cu ancillae similique. Mei no ubique persecuti, at sit iusto aliquam interpretaris.
    </Text>



</Box>
<Box>
<HStack  >
    <Box className={style.boxone}>
    <Box className={style.plus295}> 
<Text className={style.plus295letter}>295+</Text>
    </Box>
    <Box className={style.partem}>
    <Text className={style.partemletter}>Partem vocent </Text>

    </Box>
    <Box className={style.partempara}>
    <Text className={style.partemparaletter}>Ei nominavi suavitate deterruisset qui, assum ubique quodsi.</Text>


    </Box>


    </Box>


    <Box  className={style.boxtwo}>
    <Box  className={style.plus1500}>
    <Text className={style.plus295letter2}>1500+</Text>

    </Box>
    <Box className={style.partem2}>
    <Text  className={style.partemletter2}>Natum volutpat</Text>

    </Box>
    <Box className={style.partempara2}>
    <Text className={style.partemparaletter2}>Id qui purto dicit, bonorum minimum et sit.</Text>

    </Box>

    </Box>


</HStack>
</Box>
</Box>



<Box className={style.display2}>
<Box className={style.imageback}></Box>

</Box>
</Box>
    )
}

export default Homero