import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';

const Main = () => {
  return (
    <Router>
      <Routes>
        {/* The Routes decides which component to show based on the current url. */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default Main;
