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
       
       let tbody=document.querySelector(".tbody");
       
   
   
   tbody.innerText='';
     
     console.log("data",data)
   
      for(let i=0;i<data.length;i++){
       let tr=document.createElement("div")
       tr.setAttribute("class","div")
       tr1=document.createElement("div")
    //    let td1=document.createElement("div"); 
       let td2=document.createElement("div"); 
       let td3=document.createElement("div");
       let td4=document.createElement("div");  
       let td5=document.createElement("div");
       let td6=document.createElement("div");
       let td7=document.createElement("div");
       let td8=document.createElement("button");
      
       let tdd=document.createElement("div");
    
   
      let img=document.createElement("img")
   img.src=data[i].image_url;
//    td1.append(img);
   td2.innerText=data[i].book_name;
   td3.innerText=data[i].author;
   td4.innerText=data[i].genre;
   
   td5.innerText=data[i].edition;
   td6.innerText=data[i].publisher;
   td7.innerText=data[i].cost;
   td8.innerText="Borrow";
   
   
   td8.setAttribute("class","borrow")
  
   
   
   tdd.append(td8);

   
   
   tr.append(img,td2,td3,td4,td5,td6,td7,tdd);
   tbody.append(tr);
   
   
      }
   }
   