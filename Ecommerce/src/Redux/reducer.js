import { GET_DATA_LOADING, GET_DATA_FAILURE,GET_DATA_SUCCESS } from "./actionType";

const initState={
    box:[],
    isLoading:false,
    isError:false
};

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case GET_DATA_LOADING:{
            return {
                ...state,
                isLoading:true,
                isError:false
            }
        }

        case GET_DATA_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true
            }
        }

        case GET_DATA_SUCCESS:{
            return{
                ...state,
                isLoading:false,

                isError:false,
                box:[...payload]
            }
        }

        default:
            return state;


    }

}