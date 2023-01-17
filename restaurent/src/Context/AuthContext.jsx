import { useState } from "react";
import { createContext } from "react";


export const AuthContext=createContext();

function AuthContextProvider({children}) {
const [email,setEmail]=useState("");
const [isAuth,setIsAuth]=useState(false);
const[token,setToken]=useState(null);

const toggle=()=>{
    setIsAuth(!isAuth)
}
function loginUser(token){
    setIsAuth(true);
    setToken(token)
}
function logoutUser(){
    setToken(null);
    setIsAuth(false);
}
return <AuthContext.Provider value={{isAuth,token,loginUser,logoutUser,toggle,email}}>{children}</AuthContext.Provider>


}

export default AuthContextProvider;
