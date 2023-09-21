import React from 'react';

function Result({ name, score }) {
  return (
    <div>
      <h2>Quiz Result</h2>
      <p>Hello, {name}! Your score is: {score}/10</p>
    </div>
  );
}

export default Result;

