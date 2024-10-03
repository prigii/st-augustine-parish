// src/pages/LandingPage.js
import React from 'react';
import Hero from '../components/hero';
import About from '../components/about';
// import Clergy from '../components/clergy';
import MassSchedule from '../components/mass-schedules';
// import UpcomingEvents from '../components/upcoming-events';
// import Contact from '../components/contact';
import Donate from '../components/donate';
import Sacraments from '../components/sacraments';



const LandingPage = () => {
  return (
    <div className='py-4 px-10'>
      
      <Hero />
      <About />
      <MassSchedule />
      {/* <UpcomingEvents /> */}
      <Sacraments />

      {/* <Contact /> */}
      <Donate />
      {/* <Clergy /> */}
     
    </div>
    
  );
};

export default LandingPage;

// max-w-6xl mx-auto