import {legacy_createStore as createStore,compose}  from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";
import singleprod from "./singleprodreducer";

export const store=createStore(
    reducer,
    
    compose(applyMiddleware(thunk))  //dev tool extension can be added 
)