import { useState } from 'react'
import './App.css'

// let count = 0;

function App() {
  let [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello React!</h1>
      <p>This is my first React Project. <br /> Learing React from Legandary Developer Hitesh Sir. </p>
      <h2>Count : {count}</h2>
      <button onClick={incerase} >+</button>
      <button onClick={decrease} >-</button>
      <br />
      <button onClick={reset}>Reset</button>
    </>
  )

  function incerase() {
    count >= 20 ? window.alert(`Cant increase Value.\nBy the order of Hitesh Sir`) : setCount(count + 1);
    console.log(`increased ${setCount}`);
  }

  function decrease() {
    count <= 0 ? window.alert(`Cant decrease Value.\nBy the order of Hitesh Sir`) : setCount(count - 1);
    console.log(`decreased ${setCount}`);
  }

  function reset() {
    setCount(0);
    console.log(`reset ${count}`);
  }

}



export default App
