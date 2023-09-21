import React, { useState } from "react";
import "./Form.css"

const Form = ({onStartQuiz}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };

  const handleQuiz = () => {
    if (name && validateEmail(email)) {
      onStartQuiz(name, email);
    } else {
      if (!name) {
        alert("Please provide your name.");
      }
      if (!email) {
        alert("Please provide a email address");
      }
      if (!validateEmail(email)) {
        setEmailError("Please provide enter a valid email address ");
      }
    }
  };

  return (
    <div className="form-container"> 
    <div className="Heading">
      <h2>Enter your information</h2>
      </div>
      <input
        type="text" className="input1"
        placeholder="Enter your name "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email" className="input2"
        placeholder="Enter your email "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError && <p className="error">{emailError}</p>}
      <div className="btn">
      <button className="button" onClick={handleQuiz}>Start Quiz</button>
      </div>
    </div>
  );
};

export default Form;
