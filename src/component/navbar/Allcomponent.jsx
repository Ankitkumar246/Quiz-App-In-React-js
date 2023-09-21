import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavIndex from './NavIndex';
import Home from './Home';
import Blog from './Blog';
import Contact from './Contact';
import About from './About';
import Main from './Main';

const Allcomponent = () => {
  return (
    <Router>
      <div>
        <NavIndex />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Allcomponent;
