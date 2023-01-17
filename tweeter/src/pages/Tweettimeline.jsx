import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Tweetadd from '../components/Tweetadd'
import Tweetview from '../components/Tweetview'

const Tweettimeline = () => {
    const {isAuth}=useSelector((store)=>store.isAuth);
    const navigate = useNavigate();


    if(isAuth===false){
        return   navigate("/signin")
       }
  return (
    <div>
<Tweetadd/>
<Tweetview/>


    </div>
  )
}

export default Tweettimeline