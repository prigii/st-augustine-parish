// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './pages/About';
import Clergy from './pages/Clergy';
import Outstations from './pages/Outstations';
import Groups from './pages/Groups';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow p-8">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/clergy" element={<Clergy />} />
            <Route path="/outstations" element={<Outstations />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
