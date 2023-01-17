let list=document.querySelector("#mobile_list");
let mobilelist=JSON.parse(localStorage.getItem("mobile_data"));

console.log(mobilelist)

mobilelist.map(function (el, index) {
let div=document.createElement("div");
div.className="mobile";

let img=document.createElement("img");
img.className="image"

let name=document.createElement("h3");
let brand=document.createElement("h4");
let price=document.createElement("div");
let btn=document.createElement("button");
btn.innerText="remove";
btn.className="remove";

btn.addEventListener("click",function (){
    remove(el,index)

})

    img.src=el.image;
    name.textContent=el.name;
    brand.textContent=el.brand;
    price.textContent=el.price;

    div.append(img,brand,name,price,btn)
    list.append(div);
}
)


function remove(el,index){

    let mobilelist=JSON.parse(localStorage.getItem("mobile_data"))||[];
    mobilelist.splice(index,1);
list.innerHTML='';
    // localStorage.setItem("mobile_data",'');

    localStorage.setItem("mobile_data",JSON.stringify(mobilelist));


    mobilelist.map(function (el, index) {
    let div=document.createElement("div");
    div.className="mobile";

    let img=document.createElement("img");
    img.className="image"

    let name=document.createElement("h3");
    let brand=document.createElement("h4");
    let price=document.createElement("div");
    let btn=document.createElement("button");
    btn.innerText="remove";
    btn.className="remove";

    btn.addEventListener("click",function (){
    remove(el,index)

    })

    img.src=el.image;
    name.textContent=el.name;
    brand.textContent=el.brand;
    price.textContent=el.price;

    div.append(img,brand,name,price,btn)
    list.append(div);
})
}

document.querySelector("#sort_lth").addEventListener("click",sort_lth)
function sort_lth(){
    let mobilelist=JSON.parse(localStorage.getItem("mobile_data"));
mobilelist.sort((a,b)=>(a.price)-(b.price))

list.innerHTML='';

// localStorage.setItem("mobile_data",'')
// localStorage.setItem("mobile_data",JSON.stringify(mobilelist))

mobilelist.map(function (el, index) {
    let div=document.createElement("div");
    div.className="mobile";
    
    let img=document.createElement("img");
    img.className="image"

    let name=document.createElement("h3");
    let brand=document.createElement("h4");
    let price=document.createElement("div");
    
    let btn=document.createElement("button");
    btn.innerText="remove";
    btn.className="remove";

    btn.addEventListener("click",function (){
        remove(el,index)
    
    })
    
        img.src=el.image;
        name.textContent=el.name;
        brand.textContent=el.brand;
        price.textContent=el.price.toString();
    
        div.append(img,brand,name,price,btn)
        list.append(div);
    }
    )
}


document.querySelector("#sort_htl").addEventListener("click",sort_htl)
function sort_htl(){
    let mobilelist=JSON.parse(localStorage.getItem("mobile_data"));
mobilelist.sort((a,b)=>(b.price)-(a.price))

list.innerHTML='';

// localStorage.setItem("mobile_data",'')
// localStorage.setItem("mobile_data",JSON.stringify(mobilelist))

mobilelist.map(function (el, index) {
    let div=document.createElement("div");
    div.className="mobile";
    
    let img=document.createElement("img");
    img.className="image"
    let name=document.createElement("h3");
    let brand=document.createElement("h4");
    let price=document.createElement("div");
    let btn=document.createElement("button");
    btn.innerText="remove";
    btn.className="remove";
    btn.addEventListener("click",function (){
        remove(el,index)
    
    })
    
        img.src=el.image;
        name.textContent=el.name;
        brand.textContent=el.brand;
        
        price.textContent=el.price.toString();
        // price.textContent
    
        div.append(img,brand,name,price,btn)
        list.append(div);
    }
    )
    // window.location.reload(true);
}