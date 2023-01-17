import { GET_RANDOM_WORD, GET_SCORE, GET_USER_WORD, TYPING_WORD } from "./actionTypes";

const Reducer = (state, { type, payload }) => {
    switch (type) {
      case GET_RANDOM_WORD:
        return{
            ...state,
            word:payload
        }
        case GET_USER_WORD:
            return{
                ...state,
                enteredword:payload
            }
            case GET_SCORE:
                return{
                    ...state,
                    score:payload
                }
                case TYPING_WORD:
                    return{
                        ...state,
                        typingword:payload
                    }
        
        default:
            return state;
    }
}

export default Reducer