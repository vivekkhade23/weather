import {legacy_createStore as createStore,applyMiddleware,compose} from "redux"
import thunk from"redux-thunk"
import Reducer from "./Reducer"


const initState={
   word:"",
   enteredword:"",
   score:0,
   typingword:""
}


export const store=createStore(Reducer,initState,
    compose(
applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
)