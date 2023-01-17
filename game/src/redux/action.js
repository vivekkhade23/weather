import { GET_RANDOM_WORD, GET_SCORE, GET_USER_WORD, TYPING_WORD } from "./actionTypes"



export const getRandomword=(data)=>{
    return{
        type:GET_RANDOM_WORD,
        payload:data
    }
}
export const getUserword=(data)=>{
    return{
        type:GET_USER_WORD,
        payload:data
    }
}

export const typingWord=(data)=>{
    return{
        type:TYPING_WORD,
        payload:data
    }
}


export const getScore=(data)=>{
    return{
        type:GET_SCORE,
        payload:data,
    }
    
}
