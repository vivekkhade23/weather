document.querySelector("#form").addEventListener("submit",LoginAdmin);
function LoginAdmin(e){
    e.preventDefault();
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    console.log(email,password)

    if(email=="admin@gmail.com"&& password=="masai"){
        alert("login successful");
        window.location.href="Admindashboard.html"
    }else{
        alert("invalid credentials");
    }

}