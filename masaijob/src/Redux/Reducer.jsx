import { FILTER_JOBS, GET_JOB_LIST, POST_JOB_DATA } from "./actionTypes";

const Reducer = (state, { type, payload }) => {
    switch (type) {
        case POST_JOB_DATA:
            return {
                ...state,
               jobs:[...state.jobs,payload],
               filteredjobs:[...state.jobs,payload],
            };
            case GET_JOB_LIST:
                return {
                    ...state,
                  jobs:[...state.jobs]
                };
    case FILTER_JOBS:
        return{
            ...state,
            filteredjobs:payload
           
        }
        default:
            return state;
    }
}

export default Reducer