
let users=JSON.parse(localStorage.getItem("users"))||[];

window.onload=function(){
    renderuserdata(users);
}

function renderuserdata(users){
    let tbody=document.querySelector("tbody");
    tbody.textContent='';
   

    for(let i=0;i<users.length;i++){
        let tr=document.createElement("tr")
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");
        let td6=document.createElement("td");
        let td7=document.createElement("td");
        let td8=document.createElement("td");
        let td9=document.createElement("button");
        let td10=document.createElement("button");
        let tdd=document.createElement("td");
       let tddd= document.createElement("td");


td9.setAttribute("class","reject")
td10.setAttribute("class","confirm")


        td1.innerText=users[i].id;
        td2.innerText=users[i].name;
        td3.innerText=users[i].age;
        td4.innerText=Math.floor(Math.random() * 9000 + 1000);
        td5.innerText=users[i].location;
        td6.innerText=users[i].destination;
        td7.innerText=users[i].date;
        td8.innerText=users[i].seat;
        td9.innerText="REJECT";
        td10.innerText="CONFIRM";







        td9.addEventListener("click", ()=>{removeFunction(users[i])});
 
      
        function removeFunction(user) {
    event.preventDefault();
    let newuser=users.filter((el)=> el.id!==user.id)
  
    localStorage.setItem("users",JSON.stringify(newuser))
    renderuserdata(newuser);
    
  }


td10.addEventListener("click",()=>{confirm(users[i],td4.innerText) })


function confirm(user,otp){
    
    let enterotp = prompt("Please enter your otp", "ex 1234");
    if(otp==enterotp){
        setTimeout(() => {
            alert(`${user.name} added to waiting list`);
        });
        setTimeout(() => {
            alert(`Booking ticket from ${user.location} to ${user.destination}`);
        }, 5000);
        setTimeout(() => {
            alert(`Ticket booked for ${user.date}`);
        }, 10000);

        let booked=JSON.parse(localStorage.getItem("booked"))||[];

        booked=[...booked,user];

        localStorage.setItem("booked",JSON.stringify(booked));
        removeFunction(user)


    }else{
      alert("incorrect otp")
      return;


    }

}

tdd.append(td9);
tddd.append(td10)
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8,tdd,tddd);
        tbody.append(tr)

    }
}

document.querySelector("#filter").addEventListener("change",()=>{filterbyseat(users)})

function filterbyseat(users){
    let filter=document.querySelector("#filter").value;

if(filter==""){
    renderuserdata(users)
}else{
    let newusers=users.filter((el)=>{ return el.seat==filter})
    renderuserdata(newusers)
}

}

document.querySelector("#agesortacsend").addEventListener("click",()=>sortByage(users));

function sortByage(users){
let newusers=users.sort((a,b)=>((+a.age)-(+b.age)))
renderuserdata(newusers)
}
document.querySelector("#agesortdesend").addEventListener("click",()=>sortByage(users));

function sortByage(users){
let newusers=users.sort((a,b)=>((+b.age)-(+a.age)))
renderuserdata(newusers)
}

document.querySelector("#datesortacsend").addEventListener("click",()=>dateasend(users));

function dateasend(users){
    let newusers=users.sort((a,b)=>((+a.date)-(+b.date)))
    renderuserdata(newusers)
    }

    document.querySelector("#datesortdesend").addEventListener("click",()=>dateasend(users));

function dateasend(users){
    let newusers=users.sort((a,b)=>((+b.date)-(+a.date)))
    renderuserdata(newusers)
    }