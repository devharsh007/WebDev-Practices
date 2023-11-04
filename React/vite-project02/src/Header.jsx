/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

export default function Header() {
    const [currentTime, setCurrentTime] = useState(time().toUpperCase());
    const [currentDate, setCurrentDate] = useState(date().toUpperCase());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(time());
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, []);

    return (
        <div className='py-3 border-8'>
            <div className='flex justify-between px-10 font-sans text-2xl'>
                <div>Webcity</div>
                <div className='flex gap-12 flex-shrink'>
                    <div>Greet</div>
                    <div>{currentDate}</div>
                    <div></div>
                </div>
            </div>
        </div >
    );
}
function time() {
    const time = new Date().toLocaleTimeString();
    return time;
}
function date() {
    const date = new Date();
    const dateElement = date.getDate();
    const monthElement = date.getMonth() + 1;
    const yearElement = date.getFullYear();

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return `${dateElement} ${months[monthElement - 1]} ${yearElement}`;
}
