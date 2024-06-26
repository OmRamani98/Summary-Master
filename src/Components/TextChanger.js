
import React, { useEffect, useState } from 'react'


export default function TextChanger({ scrollToComponent }) {
  const [texts] = useState([
    "Summarize any Paper",
    "Summarize any Paragraph",
    "Summarize any Youtube Videos",
    "Summarize any Audio",
    "Summarize any Video",
    "Summarize any Image"
]); // Array of text contents
const [currentIndex, setCurrentIndex] = useState(0);
const [charIndex, setCharIndex] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
}, [texts]);

// Function to handle typing effect
useEffect(() => {
    const timeout = setTimeout(() => {
        if (charIndex < texts[currentIndex].length) {
            setCharIndex((prevIndex) => prevIndex + 1);
        } else {
            setCharIndex(0);
        }
    }, 100); // Typing speed

    return () => clearTimeout(timeout);
}, [currentIndex, charIndex, texts]);
    return (
        <div className='front-container'>
            <div className="content-wrapper">
                <div className="content">{texts[currentIndex]}</div>
            </div>
            <div className='content'>In a Click.</div>
            <div className='front-info'><p>Summery Master helps you summarize any piece of text into concise, easy to digest content so you can free yourself from information overload.</p></div>
            <div className='front-last'><a onClick={() => scrollToComponent("summarize")}>SUMMARIZE NOW - IT'S FREE</a></div>
        </div>
    )
}

