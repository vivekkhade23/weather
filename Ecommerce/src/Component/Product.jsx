import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import{ Box, Button, Img, Select, Text, VStack }from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import style from "./product.module.css"
import Pagination from './Pagination';
import { getFailure, getLoading, getSuccess } from "../Redux/action";
import { useDispatch } from "react-redux";
import { getDetails } from '../Redux/singleprodaction';



function Product() {
const [prod,setProd]=useState([]);
const [page,setPage]=useState(1);
const [orderBy, setOrderBy] = useState("asc");
const dispatch=useDispatch();


useEffect(()=>{
    try{
        dispatch(getLoading());
fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12&sort_by=price&orderBy=${orderBy}`)
.then(res=>res.json())
.then(res=>setProd(res.data))
.then((res) => dispatch(getSuccess(res.data)))
    }
    catch(err){
        dispatch(getFailure());
    }

   
   
    
    
},[page,orderBy])

function onChangefilter(e){
console.log(e.target.value);
if(e.target.value===""){
    setProd(prod);
    return;
}
let data=prod.filter((el)=>{
    return el.category===e.target.value;
})
console.log(data)
setProd(data)

}


const highTolow = () => {
    setOrderBy("desc")
  }

  const lowTohigh = () => {
    setOrderBy("asc")
  }

  return (
    <div>
        <Text>PRODUCTS</Text>
        <br />
        <Select onChange={onChangefilter} placeholder='Select option'>
  <option value="">All</option>
  <option value='kids'>kids</option>
  <option value='men'>men</option>
  <option value='women'>women</option>
  <option value='homedecor'>homedecor</option>
</Select>
<br />
<br />
<Button style={{border:"none",padding:"5px",color:"white",backgroundColor:"black",margin:"5px"}} onClick={lowTohigh} >Sort low to high</Button>
<Button style={{border:"none",padding:"5px",color:"white",backgroundColor:"black",margin:"5px"}} onClick={highTolow} >Sort high to low</Button>
    <br /> 

<br />
<Pagination current={page} onchange={(value)=>setPage(value)}  />

<br />
<br />
<Box className={style.main}>
{prod.map((el,index)=>{
    return(
        <VStack key={index} className={style.VStack} onClick={()=> dispatch(getDetails(el.id))}>
        <Link 
        className={style.link}
        key={index}
        to={`product/${el.id}`}
        >
                <Img src={el.image} className={style.img} alt='img'/>
                <Text className={style.brand}>BRAND: {el.brand}</Text>
                <Text className={style.title}>TITLE: {el.title}</Text>
                <Text className={style.category}>CATEGORY: {el.category}</Text>
                <Text className={style.price}>PRICE: Rs{el.price}</Text>
        
        </Link>
            </VStack>
    )
})}

</Box>



    </div> 
  )
}

export default Product
