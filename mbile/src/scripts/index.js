document.querySelector("#mobile_form").addEventListener("submit",function formdata(e){

    e.preventDefault();
    
    let name= document.querySelector("#mobile_name").value;
    let brand=document.querySelector("#mobile_brand").value;
    let price=document.querySelector("#mobile_price").value;
    let image=document.querySelector("#mobile_image").value;
   price=+price;
   console.log(price)

    const data={
        name,
        brand,
        price,
        image
    }
    console.log(data)
    let olddata=JSON.parse(localStorage.getItem("mobile_data"))||[]
    
    olddata.push(data);

    localStorage.setItem("mobile_data",JSON.stringify(olddata))

    name.innerText=null;
    brand.innerText=null;
    price.innerText=null;
    image.innerText=null;

});