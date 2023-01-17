import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

function SingleRestaurantPage() {
const[loading,setLoading]=useState(false)
const[datas,setDatas]=useState([])
const {id}=useParams();


useEffect(()=>{
  setLoading(true)
  fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants/${id}`)
  .then((res)=>res.json())
  .then((res)=>{
    setLoading(false)
    console.log("res",res.data)
    setDatas(res.data)
    // return res.data;
    console.log(datas)
    
  })
  .catch((err)=>{
    setLoading(false);
  })
},[id])

console.log(datas)
  return (
    <div className="singlecard" data-testid="restaurant-container">
      <div>
        <h3 data-testid="restaurant-name">{datas.name}</h3>
      </div>
      <div data-testid="restaurant-type">Type:{datas.type}</div>
      <div data-testid="restaurant-rating">Rating:{datas.rating}</div>
      <div data-testid="restaurant-votes">Votes:{datas.number_of_votes}</div>
      <div data-testid="restaurant-price">Starting Price:{datas.price_starts_from}</div>
      <div>
        <img data-testid="restaurant-image" width={"100px"}
        src={datas.image}
        alt={datas.name}
        />
      </div>

<Link to="/dashboard">Go Back</Link>

    </div>
  );
}
export default SingleRestaurantPage;
