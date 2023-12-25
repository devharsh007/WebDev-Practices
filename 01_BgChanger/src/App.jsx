import { useState } from 'react'
import './App.css'

function App() {
  // setting the default color on screen
  let [color, setColor] = useState(`#000`);

  // all color set for screen to change
  let colorSet = [`#ff80ed`, `#065535`, `#133337`, `#ffffff`, `#008080`, `#e6e6fa`, `#ffd700`, `#0000ff`, `#d3ffce`]
  // Function for handling button events
  function handleChange(e) {
    setColor(e);
  }
  
  return (
    <>
      <div className='h-screen w-full p-0 relative flex justify-center'
        // setting the bgColor for screen
        style={{backgroundColor: color}}
      >
        <div className='border p-4 absolute bottom-10 w-4/5 text-white'>
          {
            // adding the buttons using map (ig its the better way )
            colorSet.map((e) => (
              <button
                // padding key (must do)
                key={e}
                style={{ backgroundColor: e }}
                onClick={() => handleChange(e)}
                className='bg-slate-200 border rounded-md text-black p-2 mx-3'>
                {e}
              </button>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
