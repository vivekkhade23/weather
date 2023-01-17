import logo from './logo.svg';
import './App.css';

import {Heading} from "@chakra-ui/react"
import Comments from './Comment/Comments';

function App() {
  return (
    <div className="App">
    <Heading>React-Comment</Heading>
    <Comments/>
    </div>
  );
}

export default App;
