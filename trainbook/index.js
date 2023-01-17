
document.querySelector("#form").addEventListener("submit",register);

function register(e){
    e.preventDefault();
    let id=document.querySelector("#uniqueid").value;
    let name=document.querySelector("#name").value;
    let age=document.querySelector("#age").value;
    let location =document.querySelector("#location").value;
    let destination=document.querySelector("#destination").value;
    let date=document.querySelector("#date").value;
    let select=document.querySelector("#select").value;
    



    console.log(id,name,age,location,destination,date,select)

    if(location==destination){
        alert("location and destination is same.user cannot be register. please enter proper Destination ")
        return;
    }

let olddata=JSON.parse(localStorage.getItem("users"))||[];

for(let i=0;i<olddata.length;i++){
    console.log(olddata[i].id)
if(olddata[i].id===id){
    alert("Unique id already exist");
    return;
}

}
olddata=[...olddata,{id:id,name:name,age:age,location:location,destination:destination,date:date,seat:select}]

console.log(olddata)
localStorage.setItem("users",JSON.stringify(olddata))



}