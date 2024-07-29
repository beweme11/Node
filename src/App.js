import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './navbar';
import Home from './home';
import Contact from './contact';
import TextSentimentAnalysis from './txtupload'; // If needed
import FacialSentimentAnalyzer from './imgupload'; // If needed

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/toxicity" element={<TextSentimentAnalysis />} /> {/* Optional */}
        <Route path="/classify" element={<FacialSentimentAnalyzer />} /> {/* Optional */}
      </Routes>
    </Router>
  );
};

export default App;
