import React, { useState } from 'react';
import './FAQ.css'; // Ensure you create a FAQ.css file for styling

const questionsAnswers = [
  {
    question: "How does this work?",
    answer: "This works by using a classification algorithm that sorts data based on input parameters."
  },
  {
    question: "Why did you choose to make a comet classifier?",
    answer: "We chose to make a comet classifier to help researchers and enthusiasts identify comet types efficiently."
  },
  {
    question: "Are you going to add more features?",
    answer: "Yes, we plan to add more features as we collect more data and improve our algorithms."
  },
  {
    question: "What did the comet say to the asteroid?",
    answer: "You rock, but I'm out of this world!"
  }
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null); 

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-accordion">
        {questionsAnswers.map((qa, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => handleToggle(index)}>
              {qa.question}
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </button>
            <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
              <p>{qa.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;