import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import Pagination from "../Components/Pagination";
import RestaurantTable from "../Components/RestaurantTable";
import { AuthContext } from "../Context/AuthContext";


function Dashboard() {
  const{isAuth,token,logoutUser}=useContext(AuthContext);

console.log(token);
const[data,setData]=useState([]);
const[page,setPage]=useState(1);
const [limit,setLimit]=useState(10);

useEffect(()=>{
  fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=${page}&limit=${limit}`)
  .then(res=>res.json())
  .then(res=>{
    setData(res)
    // console.log(data);
  })
  .catch((err)=>{
    console.log(err)
  })
},[page,limit])

// console.log(data);
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button onClick={logoutUser} className="logout" data-testid="logout-btn">Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* restaurant table */}
        <RestaurantTable data={data.data}/>
      </div>
      <div data-testid="pagination-container">
        <Pagination
        totalPages={data?.totalPages}
        currentPage={page}
        handlePageChange={(page)=>setPage(page)}
        />
      </div>
    </div>
  );
}

export default Dashboard;
