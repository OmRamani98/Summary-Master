import React, { useEffect, useState } from "react";
import Nav,{useremail} from './nav';

const EmailHistory = () => {
  const [history, setHistory] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch(
          `https://summary-master-6dea2-default-rtdb.firebaseio.com/USERDATA.json?orderBy="useremail"&equalTo="${useremail}"`
        );
        const data = await res.json();
        const historyArray = Object.values(data);
        setHistory(historyArray);
      } catch (error) {
        console.error("Error fetching history:", error);
      }
    };

    fetchHistory();
  }, [useremail]);

  const uniqueTimes = Array.from(new Set(history.map(item => item.time)));

  const handleTimeClick = (time) => {
    setSelectedTime((prevTime) => (prevTime === time ? null : time));
  };

  return (
    <div>
      <Nav/>
      <h2>Email History</h2>
      <style>
        {`
          .history-container {
            color:white;
            margin-top:20vh;
            display: flex;
            flex-direction: column;
            gap: 1rem; /* Create spacing between history items */
            padding: 1rem;
            border: 1px solid #ccc; /* Light border for contrast */
            border-radius: 5px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
            background-color: #060606; /* Light background for readability (adjustable) */
            font-family: 'Comic Sans MS', cursive; /* Fun and playful font family */
          }

          .history-item {
            display: flex;
            flex-direction: column;
            gap: 0.5rem; /* Spacing between text and summarized text */
            padding: 0.75rem;
            border: 1px solid #ccc; /* Light border for contrast */
            border-radius: 5px;
            transition: all 0.2s ease-in-out; /* Smooth hover effect */
            cursor: pointer; /* Indicate interactivity */
          }

          .history-item:hover { 
            transform: scale(1.01); /* Slight zoom on hover */
          }

          .history-item p {
            margin: 0; /* Remove default margin for better spacing */
            font-size: 16px;
            line-height: 1.5; /* Improve readability */
            font-family: 'Comic Sans MS', cursive; /* Fun and playful font family */
            color: #FFF; 
          }

          .history-item p:first-child {
            font-weight: bold; /* Differentiate between original text and summary */
          }
        `}
      </style>
      <div className="history-container">
        {uniqueTimes.map((time, index) => {
          const item = history.find(item => item.time === time);
          return (
            <div key={index} className="history-item">
              <p onClick={() => handleTimeClick(time)}>Time: {time}</p>
              {selectedTime === time && (
                <>
                  <br />
                  <p>Text: </p>
                  <p>{item.content}</p>
                  <br/>
                  <p>Summarized Text: </p>
                  <p>{item.text}</p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EmailHistory;
