
import React, { useState, useEffect } from 'react';
import './Question.css';

function Question({ question, options, onSelectOption, questionNumber, timeLeft }) {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);

  useEffect(() => {
    setSelectedOptionIndex(null); 
  }, [question]);

  const handleOptionClick = (index) => {
    setSelectedOptionIndex(index);
  };

  const handleNextClick = () => {
    if (selectedOptionIndex !== null) {
      onSelectOption(options[selectedOptionIndex]); 
    }
  };
  const isButtonVisible = selectedOptionIndex !== null;

  return (
    <div className="question-container">
      <h3>Question {questionNumber + 1}:</h3>
      <p>{question}</p>
      <p>Time Left: {timeLeft} seconds</p>
      <ul>
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(index)}
            className={`option ${selectedOptionIndex === index ? 'selected' : ''}`}
          >
            {option}
          </li>
        ))}
      </ul>
       {isButtonVisible && (
        <button onClick={handleNextClick} disabled={!isButtonVisible}>
          Next
        </button>
      )}
    </div>
  );
}

export default Question;


