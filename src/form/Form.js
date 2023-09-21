import React, { useState } from "react";
import Tilt from 'react-parallax-tilt';

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
    <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex justify-center items-center">
     {/* <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160 animate-pulse"></div>
     <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180 animate-pulse"></div> */}
    <Tilt>
      <div className="container h-96 w-96 bg-white/10 bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
        <form className='h-full flex flex-col justify-evenly items-center'>
          <div className='text-white font-poppins text-2xl tracking-widest'>Login</div>

          <input
        type="text" className="bg-slate-100 rounded-full w-60 h-10"
        placeholder="Enter your name "
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email" className="bg-slate-100 rounded-full w-60 h-10 "
        placeholder=" Enter your email "
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
        

      {emailError && <p className="error">{emailError}</p>}
      <div className=" items-start ">
      <button className='cursor-pointer font-poppins rounded-full px-5 py-1 bg-green-400 bg-opacity-50 hover:bg-white hover:bg-opacity-80 '   onClick={handleQuiz}>Start Quiz</button> </div> 

        
        </form>
      </div>
    </Tilt>
   </div>
  )
};

export default Form;
