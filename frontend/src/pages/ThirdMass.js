import React from 'react';
import ParishCenterCarousel from '../components/imageCarousel';

const ThirdMass = () => {
  return (
    <section id="about" className="py-4 px-10">
      <ParishCenterCarousel />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-yellow-500">St Augustine Third Mass</h1>
        <p className='font-bold'>Mass times: Sunday 11am - 12.30pm</p>
        <p className="mb-4">Welcome to the St Augustine Third Mass page. Here you can find information about our activities, meetings, and more.</p>
        <p className="mb-4">
          Third mass currently has approximately 700
          Christians who attend mass every Sunday. The
          mass commences at 11.00 a.m. At the same time, 
          PMC mass is held every Sunday at the old
          church grounds within the Parish. 
          </p>
        <p className="mb-4">
          Third mass outstation currently has Eight SCCs, namely:
        </p>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }} className="mb-4 ml-6">
            <li>St Monica SCC</li>
            <li>St John Paul II SCC</li>
            <li>St Agnes SCC</li>
            <li>St George SCC</li>
            <li>Blessed Irene Nyaatha SCC</li>
            <li>St Maria Goretti SCC</li>
            <li>St Bakhita SCC</li>
            <li>St John Bosco SCC</li>
          </ol>
          Active ecclesial groups are CMA, CWA, PMC, MYM,
          Senior Youth, YCA and Choir.
        
        <p className="mb-4">
        
        </p>
      </div>
    </section>
  );
};

export default ThirdMass;
