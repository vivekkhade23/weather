import { GET_ALL_QUESTIONS, GET_CORRECT, GET_CORRECT_COUNT, GET_CURRENT_QUESTION, GET_INCORRECT, GET_INCORRECT_COUNT, GET_SCORE } from "./actionTypes"

const Reducer = (state, { type, payload }) => {
    switch (type) {
      case GET_ALL_QUESTIONS:
        return{
            ...state,
            questions:payload
        }
        case GET_CURRENT_QUESTION:
            return{
                ...state,
                currentQuestion:payload
            }
            case GET_SCORE:
                return{
                    ...state,
                    score:state.score+payload
                }
                case GET_CORRECT:
                    return{
                        ...state,
                        correct:payload
                    } 
                    case GET_INCORRECT:
                        return{
                            ...state,
                            incorrect:payload
                        } 


                        case GET_INCORRECT_COUNT:
                            return{
                                ...state,
                                incorrectcount:state.incorrectcount+1
                            } 
                            case GET_CORRECT_COUNT:
                                return{
                                    ...state,
                                    correctcount:state.correctcount+1
                                }      

        default:
            return state;
    }
}

export default Reducer