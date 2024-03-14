import React, { useState } from 'react';
import '../Components/styles/myStyles.css'; // Import CSS file for styling


const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={toggleOpen} 
    style={
      isOpen
        ? {
          backgroundColor: "#333",
          }
        : {
          }}>
      <div className="question">
        <span>{question}</span>
        <span className={`icon ${isOpen ? 'open' : ''}`}>&#x25BC;</span>
      </div>
      {isOpen && <div className="answer">{answer}</div>}
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  const faqData = [
    {
      question: 'What is Summary Master?',
      answer: 'Summary Master is a versatile tool designed to summarize various types of content including text documents, Word files, TXT files, YouTube URLs, image text, videos, and audio files.'
    },
    {
      question: 'How accurate are the summaries generated by Summary Master?',
      answer: 'Summary Master utilizes advanced natural language processing algorithms to ensure accurate and concise summaries. However, the accuracy may vary depending on the complexity and quality of the input content.'
    },
    {
      question: 'Is there a limit to the length of text or content that Summary Master can process?',
      answer: 'Summary Master can handle a wide range of content lengths, from short paragraphs to lengthy documents. While there isn\'t a strict limit, extremely large texts may require more processing time.'
    },
    {
      question: 'Is there a Chrome extension available for Summary Master?',
      answer: 'Yes, Summary Master offers a convenient Chrome extension for easy access and integration with your browsing experience. With the extension, you can summarize web content directly from your browser.'
    },
    {
      question: 'Can Summary Master summarize content from academic papers and research articles?',
      answer: 'Yes, Summary Master is adept at summarizing content from academic papers and research articles. It can identify key points, main arguments, and important findings, providing concise summaries for academic purposes.'
    },
  ];

  return (
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={index === openIndex}
            toggleOpen={() => toggleOpen(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;