import React, { useState } from "react";
import InputFile from "./InputFile";
import InputUrl from "./InputUrl.js";
import InputText from "./InputText.js";
import Nav from './nav.js';
import Textchange from './TextChanger.js';
import Footer from "./Footer.js";
import FAQ from "./FAQ.js";
import ChromeExtension from "./Extension.js";
import Ft from './Footer1.js';


const Home = () => {
  const sections = [
    { name: "Summarize Now", path: "/summarize" },
    { name: "Browser Extensions", path: "/extensions" },
    { name: "Features", path: "/features" },
    { name: "FAQs", path: "/faq" }
  ];
  
 
  
  
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const scrollTo = (element, duration) => {
    const navbarHeight = 180;
    const targetPosition = element.offsetTop - navbarHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
  
    const animation = (currentTime) => {
      if (startTime === null) {
        startTime = currentTime;
      }
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };
  
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };
  
    requestAnimationFrame(animation);
  };

  const scrollToComponent = (componentId) => {
    const section = document.getElementById(componentId);
    if (section) {
      scrollTo(section, 1000); // Adjust duration (e.g., 1000ms for 1 second)
    }
  };

  return (
    <>
    <Nav scrollToComponent={scrollToComponent} sections={sections} />
      <Textchange  scrollToComponent={scrollToComponent}/>
      
      <div className='summary-container'>
      <div className='custom-divider'></div>
      <div className='summary-header' id='summarize'><h1>Enter an Artical URL or paste your Text</h1></div>
      <center><div className='summary-action'>
        <button onClick={() => handleOptionChange("file")}>Upload File</button>
        <button onClick={() => handleOptionChange("url")}>Add URL</button>
        <button onClick={() => handleOptionChange("text")}>Add text</button>
      </div></center>
      {selectedOption === "file" && <InputFile />}
      {selectedOption === "text" && <InputText />}
      {selectedOption === "url" && <InputUrl />}
      <div className='custom-divider'></div>
      
    </div>

   
    
    <div id="extensions">
      <ChromeExtension />
    </div>
    <div className='custom-divider'></div>
    <div id="features">
    <Footer />
    </div>
    <div className='custom-divider'></div>
    <div id="faq">
    <FAQ />
    </div>
    <div className='custom-divider1' style={{ marginLeft: "10vw"}}></div>
    <Ft scrollToComponent={scrollToComponent}/>
    
    </>
  );
};

export default Home;
