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
import FirstMass from './pages/FirstMass';
import SecondMass from './pages/SecondMass';
import ThirdMass from './pages/ThirdMass';
import StPaulGachororo from './pages/StPaulGachororo';
import MaryMotherOfGodMirimaini from './pages/MMG';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="main-content flex-grow mt-20">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/clergy" element={<Clergy />} />
            <Route path="/outstations" element={<Outstations />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/outstations/first-mass" component={FirstMass} />
            <Route path="/outstations/second-mass" component={SecondMass} />
            <Route path="/outstations/third-mass" component={ThirdMass} />
            <Route path="/outstations/st-paul-gachororo" component={StPaulGachororo} />
            <Route path="/outstations/mary-mother-of-god-mirimaini" component={MaryMotherOfGodMirimaini} />
      
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
