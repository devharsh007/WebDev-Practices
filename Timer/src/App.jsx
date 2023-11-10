import React from 'react'
import Timer from './timer'

export default function App() {
  return (
    <div>
      <h1 className='text-7xl'>Timer App</h1>
      <p className='mt-5 text-3xl'>This is a simple timer app.</p>
      <hr />
      <Timer/>
    </div>
  )
}
