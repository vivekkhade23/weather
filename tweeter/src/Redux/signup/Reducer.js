import {  GET_USER, LOGOUT, SET_USER, UPDATE_USER} from "./actionType"

export const Reducer = (state, { type, payload }) => {
    switch (type) {
        case SET_USER:
            return {
                ...state,
                users:[...state.users,...payload]
            }
        case GET_USER:
            return {
                ...state,
              user:payload,
              isAuth:true
            }
case UPDATE_USER:{
    return{
        ...state,
        user:payload,
        isAuth:true
    }
}
case LOGOUT:{
    return{
        ...state,
        user:[],
        isAuth:false
    }
}
       

        default:
            return state;
    }
}

