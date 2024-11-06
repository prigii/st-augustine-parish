import React from 'react';
import ParishCenterCarousel from '../components/imageCarousel';

const FirstMass = () => {
  return (
    <section id="about" className="py-4 px-10">
      <ParishCenterCarousel />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 mt-4 text-yellow-500">St Augustine First Mass</h1>
        <p className="mb-4">Welcome to the St Augustine First Mass page.</p>
        <p className="mb-4">
          St. Augustine First Mass Outstation has an
          attendance of about 500 parishioners. The
          Celebration of Mass starts at 7.00 am and is
          always the First Mass on Sunday hence the
          name. It has a total of 16 Small Christian
          Communities, namely:
        </p>
        <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }} className="mb-4 ml-6">
          <li>St Kizito SCC</li>
          <li>St Stephen SCC</li>
          <li>St John the Baptist SCC</li>
          <li>St Joseph the Worker SCC</li>
          <li>St Jude SCC</li>
          <li>St Rita SCC</li>
          <li>St Jacinta SCC</li>
          <li>Our Lady of Lourdes SCC</li>
          <li>St Mathias Mulumba SCC</li>
          <li>St Faustina SCC</li>
          <li>St Lucy SCC</li>
          <li>St Philomena SCC</li>
          <li>St Theresa SCC</li>
          <li>St Cecilia SCC</li>
          <li>St Claire SCC</li>
          <li>St Joachim SCC</li>
        </ol>
      
        <p className="mb-4">
          The first mass also has ecclesial groups,
          Choir, CMA, CWA, MYM PMC and YCM,
          Sacred heart and Legion of Mary. The CMA
          and the CWA have been having very rigorous
          recruitment exercise of new members who
          undergo training before commissioning. The
          other Groups are also not left behind. This
          shows tremendous growth in our Christian
          Faith. 
        </p>
      </div>
    </section>
  );
};

export default FirstMass;

