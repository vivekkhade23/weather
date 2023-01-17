import {legacy_createStore as createStore,applyMiddleware,compose} from "redux"
import thunk from"redux-thunk"
import { Reducer } from "./signup/Reducer"

const initState={
    user:[],
   users:[],
   posts:[],
isAuth:false
}


export const store=createStore(Reducer,initState,
    compose(
applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
)