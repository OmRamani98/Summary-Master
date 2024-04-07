import React, { useEffect } from "react";


let keyset;
const DataFetcherText = ({ text, sliderValue, onFetchComplete }) => {
  console.log("text:",text);
    useEffect(() => {
    const fetchData = async () => {
      console.log("summarize clicked");
      try {
        const response = await fetch('https://summary-master-flask-text.onrender.com/summary', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: text, sliderValue: sliderValue }),
        });

        if (response.ok) {
          const responseData = await response.json();
          console.log("rsum",responseData.summary);
          onFetchComplete(responseData.summary);
          keyset=responseData.keywords;
           
          console.log("Keyset",keyset);
          
          
        } else {
          console.error('Server responded with an error');
        }
      } catch (error) {
        console.error("Error fetching summary from Django server:", error.message);
      }
    };

    fetchData();

  }, [text, sliderValue, onFetchComplete]);

  return (
  <>console.log("DataFetcherText")</>
  );
};

export default DataFetcherText;
export { keyset };