import React from 'react'
import { Link } from 'react-router-dom'
import style from "./product.module.css"


function Navbar() {
  return (
    <div>
 <div className={style.Navbar}>
        <Link className={style.link} to="/">Home</Link>
        <Link className={style.link} to="/cart">cart</Link>
        <Link className={style.link} to="/orders"> placed orders</Link>
      </div>



    </div>
  )
}

export default Navbar