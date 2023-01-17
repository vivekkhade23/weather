import { GET_ITEM } from "./singleprodactionTypes";

const initialState = {
    prodId: {},
    items:[],
 }

export default function singleprod (state = initialState, {payload,type}){
    switch(type){ 
        case GET_ITEM:
            return{
                ...state,
                prodId: payload
            }
            default:
                return state;

    }  
}