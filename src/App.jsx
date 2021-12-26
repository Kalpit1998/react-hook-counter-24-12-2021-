import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  function changeCount(value){
    setCounter(counter + value);
  }

  function doubleCount(){
    setCounter(counter * 2);
  }

  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={()=> {changeCount(1)}}>Add</button>
      <button onClick={()=> {changeCount(-1)}}>Sub</button>
      <button onDoubleClick={doubleCount}>Double</button>
    </div>
  );
}

export default App;
