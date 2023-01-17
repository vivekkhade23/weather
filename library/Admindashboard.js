

document.querySelector("#formdata").addEventListener("submit",Bookdetails);

function Bookdetails(e){
    e.preventDefault();

    let img=document.querySelector("#url").value;
    let bookName=document.querySelector("#book").value;
    let author=document.querySelector("#author").value;
    let genre=document.querySelector("#genre").value;
    let year=document.querySelector("#year").value;
    let publisher=document.querySelector("#publisher").value;
    let price=document.querySelector("#cost").value;


    console.log(img,bookName,author,genre,year,publisher,price);

    let data={
        "image_url":img,
        "book_name":bookName,
        "author":author,
        "genre":genre,
        "edition":year,
        "publisher":publisher,
        "cost":price,
        "borrowed":false
    }

data=JSON.stringify(data)


let responsse=postData(data);
getfetch();

}

async function postData(data){
    try{
let res=await fetch("https://zany-puce-boa-gown.cyclic.app/books",{
    method: "POST",
    body:data,
    headers: {
        "Content-type": "application/json"
    }
})
res=await res.json();
// console.log(res);
return res;

    }
    catch(err){
        console.log(err)
    }
}



 async function getfetch(){

 try{
    let res=await fetch("https://zany-puce-boa-gown.cyclic.app/books");
    res=await res.json();
    console.log("res",res)
    // res=data;
    renderData(res)
    // return res;

 } catch(err){
console.log(err)
 }

}
getfetch();
function renderData(data){
    
    let tbody=document.querySelector("#tbody1");
    


tbody.innerText='';
  
  console.log("data",data)

   for(let i=0;i<data.length;i++){
    let tr=document.createElement("tr")
    let td1=document.createElement("td"); 
    let td2=document.createElement("td"); 
    let td3=document.createElement("td");
    let td4=document.createElement("td");  
    let td5=document.createElement("td");
    let td6=document.createElement("td");
    let td7=document.createElement("td");
    let td8=document.createElement("button");
    let td9=document.createElement("button");
    let tdd=document.createElement("td");
   let tddd= document.createElement("td");

   let img=document.createElement("img")
img.src=data[i].image_url;
td1.append(img);
td2.innerText=data[i].book_name;
td3.innerText=data[i].author;
td4.innerText=data[i].genre;

td5.innerText=data[i].edition;
td6.innerText=data[i].publisher;
td7.innerText=data[i].cost;

td8.innerText="Edit";
td9.innerText="Delete";

td9.addEventListener("click",()=>Delete(data[i].id))

async function Delete(id){
    const res = await fetch(`https://zany-puce-boa-gown.cyclic.app/books/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json'
        }
    });
   getfetch();
}

td8.setAttribute("class","edit")
td9.setAttribute("class","delete")


tdd.append(td8);
tddd.append(td9);


tr.append(td1,td2,td3,td4,td5,td6,td7,tdd,tddd);
tbody.append(tr);


   }
}
// renderData()



function userrender(){
    let users=JSON.parse(localStorage.getItem("users"))

    let tbody=document.querySelector("#tbody2");
    tbody.innerText='';
    console.log("user",users)
    for(let i=0;i<users.length;i++){
        let tr=document.createElement("tr")
        let td1=document.createElement("td"); 
        let td2=document.createElement("td"); 
        let td3=document.createElement("td");
td1=users[i].name;
td2=users[i].email;
td3=users[i].password;


tr.append(td,td2,td3);
tbody.append(tr)




    }
}
userrender();