import { GET_ITEM } from "./singleprodactionTypes"

 
export const getDetails =(id)=> (dispatch) => {
     dispatch({type: GET_ITEM, payload: id})
}