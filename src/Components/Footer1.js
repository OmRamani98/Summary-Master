import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import '../Components/styles/myStyles.css'; // Import CSS file for styling
import logo from './images/logo.png';

const Footer = ({ scrollToComponent }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://summary-master-node-contactusemail.onrender.com/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        toast.success('Thank you for your message! We will get back to you shortly.');
      } else {
        console.error('Failed to send email');
        toast.error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      <ToastContainer />
      <footer className="custom-footer" style={{ paddingLeft: "10vw", paddingRight: "10vw" }}>
        <div className="custom-footer-content">
          <div>
            <div className="custom-footer-logo" style={{ display: "flex", flexDirection: "column" }}>
              <img src={logo} alt="Company Logo" style={{ height: "9vh", width: "10vw" }} />
              <p> &emsp; &emsp; Summarize Anything <br></br>&emsp; &emsp; Including text,audio,video</p>
            </div>
          </div>
          <div style={{display:"flex"}}>
          <div className="custom-footer-links">
          <ui style={{ listStyle: 'none', padding: '0' }} >
          
            <h3>Quick Links</h3>
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
        
          <div className="contact-form">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <textarea
                rows="1"
                type="email"
                name="email"
                className="text-input contact-input"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                rows="3"
                name="message"
                className="text-input contact-input"
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit" className="btn btn-big contact-btn">
                Send
              </button>
            </form>
          </div>
        </div>

        <br></br>
        <div className="custom-footer-bottom">
          <div className='custom-divider1' ></div>
          <p style={{ color: "#999", marginBottom: "0px" }}>&copy; 2024 Summary Master. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
