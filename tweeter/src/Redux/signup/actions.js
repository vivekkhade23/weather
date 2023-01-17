import { GET_USER, LOGOUT, SET_USER, UPDATE_USER } from "./actionType"



export const setUser=(post)=>async (dispatch)=>{
    let data=await fetch("https://tweeter-fly0.onrender.com/user",{
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body:JSON.stringify(post)
    })
    data=await data.json();
    dispatch({
      type:SET_USER,
      payload:data,
    
    })
     
  }
  

  export const getUser=(id)=>async(dispatch)=>{
    let data=await fetch(`https://tweeter-fly0.onrender.com/user/${id}`)

    data=await data.json();
    dispatch({
      type:GET_USER,
      payload:data,
    
    })
  }

export const updateUSer=(put)=>async (dispatch)=>{   
    dispatch({
      type:UPDATE_USER,
      payload:put,
    
    })
}
export const Logoutuser=()=>(dispatch)=>{
    dispatch({type:LOGOUT})
}