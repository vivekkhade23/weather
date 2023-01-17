document.querySelector("#formuser").addEventListener("submit",signinUser);
function signinUser(e){
    e.preventDefault();
    let username=document.querySelector("#username").value;
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    console.log(email,password)
    let newuser={
        name:username,
        email:email,
        password:password,
    }

let users=JSON.parse(localStorage.getItem("users"))||[];
users=[...users,newuser]
localStorage.setItem("users",JSON.stringify(users));

window.location.href="userlogin.html"

    
}