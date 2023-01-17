import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const navigate=useNavigate();
  const {isAuth,loginUser}=useContext(AuthContext);
  const [formState,setFormState]=useState({email:"",password:""});
  let token="ABCD";

  function handleSubmit(e){
    e.preventDefault();
    fetch("https://reqres.in/api/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formState)
    })
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res),
      loginUser(token);
    }).catch((err)=>{
      console.log(err)
    })
  }
  if(isAuth){
    return navigate("/dashboard")
  }



  return (
    <div className="loginbox">
      <form onSubmit={handleSubmit} data-testid="login-form">
        <div className="logindiv1">
          <label>
            Email
            <input data-testid="email-input" type="email" placeholder="email" value={"eve.holt@reqres.in"} />
          </label>
        </div>
        <div className="logindiv2">
          <label>
            Password
            <input
              data-testid="password-input"
              type="password"
              placeholder="password"
              value={"cityslicka"}
            />
          </label>
        </div>
        <div className="logindiv3">
          <input data-testid="form-submit" type="submit" value="SUBMIT" />
        </div>
      </form>
      <div>
        <Link to="/">Go Back</Link>
      </div>
    </div>
  );
}
export default Login;
