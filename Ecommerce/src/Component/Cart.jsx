import { Box, Button, Img, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import style from "./product.module.css"

function Cart() {
let cart=JSON.parse(localStorage.getItem("cart"))||[];


function placeorder(order){
  let orders=JSON.parse(localStorage.getItem("orders"))||[];

  orders={
    ...orders,order
  }

  localStorage.setItem("orders",JSON.stringify(orders))
}

  return (
    <div>
      <h1>Cart</h1>
      
<Box className={style.main}>
{
cart.map((el,index)=>{
  return(
    <VStack key={index} className={style.VStack}>
   
            <Img src={el.image} className={style.img} alt='img'/>
            <Text className={style.brand}>BRAND: {el.brand}</Text>
            <Text className={style.title}>TITLE: {el.title}</Text>
            <Text className={style.category}>CATEGORY: {el.category}</Text>
            <Text className={style.price}>PRICE: Rs{el.price}</Text>
    <Button onClick={()=>placeorder(el)} >Place order</Button>
   
        </VStack>
)
})
}

</Box>


    </div>
  )
}

export default Cart