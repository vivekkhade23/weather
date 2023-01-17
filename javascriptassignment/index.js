// // 1 Create a function called toggler using closures

function toggler(...rest) {
    let curr = -1;
    return () => {
      curr = curr === rest.length - 1 ? 0 : curr + 1;
      return rest[curr];
    };
  }
  
  const toggle = toggler(1, 2, 3);
  
  console.log(toggle());
  console.log(toggle());
  console.log(toggle());

  
  //2.  Write a program to throttle using closures
  const btnThrottle = document.querySelector("#btn-throttle");
  
  const click = (...args) => console.log(`clicked to throttle btn ${args[0]}`);
  
  const throttle = (cb, wait = 1000) => {
    let lastCall = 0;
    return () => {
      if (Date.now() - lastCall > wait) {
        lastCall = Date.now();
        cb(lastCall);
      }
    };
  };
  
  btnThrottle.addEventListener("click", throttle(click, 1000));
  
  

//   DEbouncer 

document.getElementById("query").addEventListener("change",()=>myInput(document.getElementById("query").value))

let id;
const myInput = (q) => {
    debounce(main, 500,q)
}

function debounce(func, delay,q) {
    if (id) clearTimeout(id);
    id = setTimeout(function () {
        func(q);
    }, delay);
}

async function main(q) {
    searchCity(q);
}
async function searchCity(q) {
    try {

        if (q.length >= 1) {
            const url = `https://venomous-plough-7848.vercel.app/api/search/stays?q=${q}`;
            let res = await fetch(url);
            res = await res.json();
            console.log(res);
           data.push(res.sr)
        } else {
            data=[]

        }
    } catch (err) {
        console.log(err);
    }
}
console.log(data)