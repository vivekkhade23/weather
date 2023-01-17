function setJokes(data) {
  // get the joke-container div
  // craete a div and add a p tag in it with class as joke-text
  // append the div to joke-container div;
  let box=document.querySelector("#joke-container")
let div=document.createElement("div");
let p=document.createElement("p");
p.className="joke-text"
p.innerText=data.value;
div.appendChild(p)
box.appendChild(div);
}

let getRandomJoke = async () => {
  // fetch request to get a random joke
  // return the data ona successfull request
  // return error text on failure
  try{
    let res=await fetch("https://api.chucknorris.io/jokes/random");
    res=await res.json();
    setJokes(res)
    return(res)

  }
  catch(err){
    return "something went wrong";
  }
};
let getJokeByCategory = async (event) => {
  // // fetch request to get a random joke by category
  // return the data ona successfull request
  // return error text on failure
console.log(event.target.value);
try{
  let res=await fetch(`https://api.chucknorris.io/jokes/random?category=${event.target.value}`);
  res=await res.json();
  setJokes(res)
return(res)

}
catch(err){
  return "something went wrong";
}


};
window.onload = function () {
  // add click event to button
  // add change event to select tag
 document.querySelector("#get-category").addEventListener("change",()=>getJokeByCategory(event))

document.querySelector("#get-jokes-data").addEventListener("click",getRandomJoke)

};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    getRandomJoke,
    setJokes,
    getJokeByCategory,
  };
}
