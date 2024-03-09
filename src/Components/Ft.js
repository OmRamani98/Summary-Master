import React from 'react';
import '../Components/styles/myStyles.css'; // Import CSS file for styling
import logo from './images/logo.png';

const Footer = ({ scrollToComponent }) => {
    return (
      <footer className="custom-footer" style={{paddingLeft: "10vw",paddinRgight: "10vw",}}>
        <div className="custom-footer-content">
          <div className="custom-footer-logo">
            <img src={logo} alt="Company Logo" style={{height:"13vh",width:"11vw"}}/>
            
          </div>
          <div style={{display:"flex"}}>
          <div className="custom-footer-links">
          <ui>
            <li>
            <a onClick={() => scrollToComponent("summarize")}>SummarizeNow</a>
            </li>
            <li>
            <a onClick={() => scrollToComponent("extensions")}>Extensions</a>
            </li>
            <li>
            <a onClick={() => scrollToComponent("features")}>Features</a>
            </li>
            <li>
            <a onClick={() => scrollToComponent("faq")}>FAQs</a>
            </li>
          </ui>
          </div>
        </div>
        
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form action="#" method="post">
            <input type="email" name="email" className="text-input contact-input" placeholder="Your email address" />
            <textarea rows="4" name="message" className="text-input contact-input" placeholder="Your message"></textarea>
            <button type="submit" className="btn btn-big contact-btn">
              <i className="fas fa-envelope"></i>
              Send
            </button>
          </form>
        </div>
        </div>
      
        <br></br>
        <div className="custom-footer-bottom">
        <div className='custom-divider1' ></div>
          <p style={{color:"#999"}}>&copy; 2024 Summary Master. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;