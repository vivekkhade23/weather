document.querySelector("#userlogin").addEventListener("submit",Loginuser);
function Loginuser(e){
    e.preventDefault();
    let email=document.querySelector("#email").value;
    let password=document.querySelector("#password").value;
    console.log(email,password)

    let users=JSON.parse(localStorage.getItem("users"));
let c=0;
  for(let i=0;i<users.length;i++){
if(email==users[i].email&&password==users[i].password){
    alert("login successful");
    window.location.href="book.html"
}
else{
    c++;
}
  }
  if(c==users.length){
    alert("login failed")
  }

}