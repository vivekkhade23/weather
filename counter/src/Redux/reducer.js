//Complete the reducer function logic inside the curly braces {}
import { ADD,REDUCE } from "./actionTypes";
const initialState = {counter:10};

const reducer = (state = initialState, action) => {
    console.log(action,state)
    switch (action.type) {
        case ADD:return {...state,
            counter:state.counter+ 1};

        case REDUCE: return{...state,
            counter:state.counter  - 1};
     
        default: return state;
    }
};

export { reducer };
