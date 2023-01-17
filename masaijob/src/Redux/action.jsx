import { FILTER_JOBS, GET_JOB_LIST, POST_JOB_DATA, SORT_JOBS } from "./actionTypes"

export const AddJobdata=(data)=>{
    return {
type: POST_JOB_DATA,
payload:data
    }
}

export const GetJobdata=()=>{
    return {
type: GET_JOB_LIST,
    }
}

export const filterJob=(data)=>{
    return{
        type:FILTER_JOBS,
        payload:data
    }
}
export const sortjobs=(data)=>{
    return{
        type:SORT_JOBS,
        payload:data,
    }
}