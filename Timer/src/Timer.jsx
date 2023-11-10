import React from 'react'

export default function Timer() {   
    return (
        <div>
            <div>00:00</div>
            <div>
            <button>Start</button>
            <button>Stop</button>
            </div>
        </div>
  )
}

let currentTime;
const timer = () =>{
    if(currentTime){
        clearInterval(currentTime);
    } else {
        let startTime = new Date().getTime();
        const updateTimer = () => {
            const now = new Date().getTime();
            const distance = now - startTime;
            
