import { Box, Button, Img, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import style from "./product.module.css"


function Order() {
  let orders=JSON.parse(localStorage.getItem("orders"))||[];




  return (
    <div>     
      <h1>Placed orders</h1>
<Box className={style.main}>
{
orders.map((el,index)=>{
  return(
    <VStack key={index} className={style.VStack}>
   
            <Img src={el.image} className={style.img} alt='img'/>
            <Text className={style.brand}>BRAND: {el.brand}</Text>
            <Text className={style.title}>TITLE: {el.title}</Text>
            <Text className={style.category}>CATEGORY: {el.category}</Text>
            <Text className={style.price}>PRICE: Rs{el.price}</Text> 
        </VStack>
)
})
}
</Box>



    </div>
  )
}

export default Order