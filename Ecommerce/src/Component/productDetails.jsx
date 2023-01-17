import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'


function ProductDetails() {
    let {id=1} = useParams();
    // const { id } = useParams();
    const details = useSelector(state => state.products.items.find(item => item.id === id))


console.log(details,"details")


    console.log(id)
  return (
    <div>productDetails</div>
  )
}

export default ProductDetails