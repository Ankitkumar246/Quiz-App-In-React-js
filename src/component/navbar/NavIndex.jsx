
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-2 h-auto shadow-2xl bg-gradient-to-r from-[#e9e9ec] to-[#cdbfec] ">
    <div className="flex items-start justify-between max-w-4xl mx-10">
      <div className="">
        <Link to={'/'}>
          <img
            className='w-10 h-10 rounded-2xl'
            src='https://i.pinimg.com/564x/be/37/fe/be37feee9904479a9b9ecec0b6eb62c3.jpg'
            alt="Home"
          />
        </Link>
      </div>
      <div className="hidden md:block">
        <ul className="space-x-8">
          <li className="inline-block">
            <Link to={'/'} className="text-xl text-black hover:text-gray-200">Home</Link>
          </li>
          <li className="inline-block">
            <Link to={'./About'} className="text-xl text-black hover:text-gray-200">About</Link>
          </li>
          <li className="inline-block">
            <Link to={'./Blog'} className="text-xl text-black hover:text-gray-200">Blog</Link>
          </li>
          <li className="inline-block">
            <Link to={'./Contact'} className="text-xl text-black hover:text-gray-200">Contact</Link>
          </li>
          <li className="inline-block">
            <Link to={'./Main'} className="text-xl text-black hover:text-gray-200">Quiz</Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <button
          className="text-white hover:text-gray-200"
          onClick={toggleNavbar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            ></path>
          </svg>
        </button>
      </div>
    </div>
    {isOpen && (
      <div className="mt-2 md:hidden ml-12">
        <ul className="space-y-2">
          <li>
            <Link to={'/'} className="block  text-black hover:text-neutral-600">Home</Link>
          </li>
          <li>
            <Link to={'./About'} className="block  text-black hover:text-neutral-600">About</Link>
          </li>
          <li>
            <Link to={'./Blog'} className="block  text-black hover:text-neutral-600">Blog</Link>
          </li>
          <li>
            <Link to={'./Contact'} className="block  text-black hover:text-neutral-600">Contact</Link>
          </li>
          <li>
            <Link to={'./Main'} className="block  text-black hover:text-neutral-600">Quiz</Link>
          </li>
        </ul>
      </div>
    )}
  </nav>
  );
};

export default Navbar;
