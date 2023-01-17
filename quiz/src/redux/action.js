import { GET_ALL_QUESTIONS, GET_CORRECT, GET_CORRECT_COUNT, GET_CURRENT_QUESTION, GET_INCORRECT, GET_INCORRECT_COUNT, GET_SCORE } from "./actionTypes"



export const getAllQuestions = (data) => {
    return {
        type: GET_ALL_QUESTIONS,
        payload: data
    }
}
export const getCurrentQuestions = (data) => {
    return {
        type: GET_CURRENT_QUESTION,
        payload: data
    }
}
export const getCorrect = (data) => {
    return {
        type: GET_CORRECT,
        payload: data
    }
}
export const getinCorrect = (data) => {
    return {
        type: GET_INCORRECT,
        payload: data
    }
}

export const getCorrectCount = () => {
    return {
        type: GET_CORRECT_COUNT,
    }
}

export const getinCorrectCount = () => {
    return {
        type: GET_INCORRECT_COUNT,
    }
}


export const getScore = (data) => {
    return {
        type: GET_SCORE,
        payload: data,
    }





}
