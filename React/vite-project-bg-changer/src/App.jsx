
import { useState } from "react"
function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div className="min-full h-screen duration-200"
        style={{ backgroundColor: color }}>
        <div className="flex fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-2xl">
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "red" }} onClick={() => setColor("red")}>
              Red
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "green" }} onClick={() => setColor("green")} >
              Green
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-white shadow-xl"
              style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")} >
              Blue
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-xl"
              style={{ backgroundColor: "yellow" }} onClick={() => setColor("yellow")}>
              Yellow
            </button>
            <button className="outline-none px-4 py-1 rounded-full text-black shadow-xl"
              style={{ backgroundColor: "magenta" }} onClick={() => setColor("magenta")}>
              Magenta
            </button>
          </div>
        </div>
      </div >

    </>
  )
}

export default App
