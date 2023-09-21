import React, { useState, useEffect } from 'react';


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
    <div className=" mx-auto 2xl:my-35  sm:flex-row bg-cyan-600 p-4 space-x-4 2xl:flex-row md:w-4/6 md:h-4/4 md:space-y-8 rounded-2xl ">
      <div className="flex-grow">
      <p className="text-red-700 text-bold text-right">Time Left: {timeLeft} seconds</p>
        <h3 className="text-amber-400 font-bold">Question {questionNumber + 1}:</h3>
        <p className="text-center font-extrabold text-2xl p-4">{question}</p>
       
      </div>
    
      <ul className="flex flex-col  lg:space-y-10 sm:space-y-4 sm:space-x-2 ">
        {options.map((option, index) => (
          
          <li  
            key={index}
            onClick={() => handleOptionClick(index)}
            className={` lg:space-y-20 p-2 rounded-md cursor-pointer ${selectedOptionIndex === index ? 'bg-orange-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {option}
          </li>
        ))}
      </ul>
      <div className='flex justify-center'>
      {isButtonVisible && (
        <button
          onClick={handleNextClick}
          disabled={!isButtonVisible}
          className="bg-green-800 text-white justify-center px-4 py-2 rounded-md shadow-md hover:bg-blue-600 cursor-pointer"
        >
          Next
        </button>
        
      )}
      </div>
    </div>
  );
}

export default Question;