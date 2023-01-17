import "./App.css";
import {useState} from "react"
import Post from "./Components/Post";



function App() {
  const [data,setData]=useState([])

async function getPost(){
try{
let res=await fetch("https://jsonplaceholder.typicode.com/posts");
res=await res.json();
setData(res)
console.log(res)


}
catch(err){
  console.log(err)
}
}

  return (
    <div className="App" data-testid="app">
      <button
        id="get-posts-btn"
        onClick={getPost}
      >
        GET POSTS
      </button>
      <div id="post-container">
        {/*  map through the posts data and pass props to the Posts component */}
        {
          data.map((item)=>(
            <Post
            key={item.id}
            h1={item.title}
            h3={item.body}
            
            
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
