// src/pages/LandingPage.js
import React from 'react';
import Hero from '../components/hero';
import About from '../components/about';
import Clergy from '../components/clergy';
import MassSchedules from '../components/mass-schedules';
import UpcomingEvents from '../components/upcoming-events';
import Contact from '../components/contact';
import Donate from '../components/donate';
import Sacraments from '../components/sacraments';

const LandingPage = () => {
  return (
    <div>
      
      <Hero />
      <About />
      <Clergy />
      <MassSchedules />
      <UpcomingEvents />
      <Sacraments />
      <Contact />
      <Donate />
      
      {/* Add other sections here... */}
    </div>
  );
};

export default LandingPage;
