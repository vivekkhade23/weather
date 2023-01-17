import { LOGIN } from "./actionType";



 export const Reducer=(state,{type,payload})=>{

switch(type){
    case LOGIN:{
        return {
            ...state,
          
          isAuth:true,
            token:payload
        }
    }
    default:
        return state
}

 }