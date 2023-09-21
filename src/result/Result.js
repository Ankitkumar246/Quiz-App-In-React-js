import React, { useState, useEffect } from 'react';
import Feedback from './Feedback';

const Result = ({ name, score }) => {
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    if (score >= 10) {
      setTimeout(() => {
        setShowFeedback(true);
      }, 4000);
    }
  }, [score]);

  const goBack = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="flex justify-center mx-auto w-80 h-70 mt-10">
        <div className="bg-lime-400 rounded-lg p-6 shadow-md justify-center text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Quiz Result</h2>
          <p className="text-lg text-gray-600">Hello, {name}! Your score is: {score}/10</p>

          {score === 10 ? (
            <p className="text-green-500">Congratulations</p>
          ) : (
            <p>Try again</p>
          )}

          <div className="flex justify-center items-baseline mt-3">
            <button
              onClick={goBack}
              className="bg-slate-950 hover:bg-lime-500 text-white font-bold py-2 px-4 border border-lime-400 hover:border-lime-500 rounded"
            >
              Go back
            </button>
          </div>
        </div>
      </div>

      {showFeedback && <Feedback />}
    </>
  );
};

export default Result;
