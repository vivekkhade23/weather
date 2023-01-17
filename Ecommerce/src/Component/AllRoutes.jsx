import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Order from './Order'
import Product from './Product'
import ProductDetails from './productDetails'

function AllRoutes() {
  return (
    <div>

<Routes>
<Route path='/'element={<Product/>}/>
<Route path='/product/:id'element={<ProductDetails/>}/>
<Route path='/cart'element={<Cart/>}/>
<Route path='/orders'element={<Order/>}/>


</Routes>

    </div>
  )
}

export default AllRoutes