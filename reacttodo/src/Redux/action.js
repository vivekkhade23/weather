import { LOGIN } from "./actionType";


export function Loginuser(data){
    return {
        type:LOGIN,
        payload:data
    }
}