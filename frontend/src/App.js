// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Footer from './components/footer';
// Importing page components 

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
      <Navbar />
      <Hero />
      <Routes>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/clergy" component={Clergy} />
        <Route path="/outstations" component={Outstations} />
        <Route path="/groups" component={Groups} />
        <Route path="/contact" component={Contact} />
        <Route path="/donate" component={Donate} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
