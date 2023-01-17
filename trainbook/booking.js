let booked=JSON.parse(localStorage.getItem("booked"))||[];
window.onload=()=>{
    renderbookeduserdata(booked)
}



function renderbookeduserdata(booked){
    // console.log()
    let tbody=document.querySelector("tbody");
    tbody.innerHTML='';
   

    for(let i=0;i<booked.length;i++){
        let tr=document.createElement("tr")
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        let td4=document.createElement("td");
        let td5=document.createElement("td");
        let td6=document.createElement("td");
        let td7=document.createElement("td");
     





        td1.innerText=booked[i].id;
        td2.innerText=booked[i].name;
        td3.innerText=booked[i].age;
        td4.innerText=booked[i].location;
        td5.innerText=booked[i].destination;
        td6.innerText=booked[i].date;
        td7.innerText=booked[i].seat;
      
        tr.append(td1,td2,td3,td4,td5,td6,td7);
     tbody.append(tr)



    }     
      
  }
  document.querySelector("#filter").addEventListener("change",()=>{filterbyseat(booked)})

  function filterbyseat(booked){
      let filter=document.querySelector("#filter").value;
  
  if(filter==""){
      renderbookeduserdata(booked)
  }else{
      let newbooked=booked.filter((el)=>{ return el.seat==filter})
      renderbookeduserdata(newbooked)
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