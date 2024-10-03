import React from 'react';
import ParishCenterCarousel from '../components/imageCarousel';

const SecondMass = () => {
  return (
    <section id="about" className="py-4 px-10">
      <ParishCenterCarousel />
      <div className="max-w-6xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold mb-4 mt-4 text-yellow-500">St Augustine Second Mass</h1>
          <p className="mb-4">
            The 2nd mass fraternity houses the Catholic
            Community JKUAT under the Chaplaincy (CATCOM)
            with 8 Student SCCs and 3 non-student SCCs, namely:
          </p>
          <ol style={{ listStyleType: 'decimal', paddingLeft: '20px' }} className="mb-4 ml-6">
            <li>St Agatha SCC</li>
            <li>Mother Teresa of Calcutta SCC</li>
            <li>St Padre Pio SCC</li>
            <li>St Paul SCC</li>
            <li>St Martin de Porres SCC</li>
            <li>St Stephen SCC</li>
            <li>St Therese of the Child Jesus SCC</li>
            <li>St Jude SCC</li>
            <li>St Charles Lwanga SCC</li>
            <li>Mary Mother of God SCC</li>
          </ol>
          
         
          <p className="mb-4">
            The numbers attending
            2nd mass have been growing steadily and we thank
            God for the growth we are witnessing. We are a
            praying worshipping believing community united with
            CATCOM to make our faith live and fun as well active
            in charity and walking together.
          </p>
          <p className="mb-4">
            2nd Mass is celebrated in English at 9.00 a.m. every Sunday at St
            Augustine Centre. When students are in session, the
            mass has a population of almost 1,200.
          </p>
        </div>
        <div>
          <h1>JKUAT Catholic Community (CATCOM)</h1>
          <p className="mb-4">
            This is a substituent of St Augustine 2nd Mass
            Family, comprising of Jomo Kenyatta University of Agriculture and Technology
            (JKUAT) students united in Faith.
          </p>
          <p className="mb-4">
            The Community comprises of 8 student Small
            Christian Communities. In addition, the communityhas other liturgical groups: The Pastoral Team, the
            Bible Prayer and Service (BPS) team , Communionand Liberation(CL) and our KMRM Choir.
          </p>
          <p className="mb-4">
            The Community engages in several activities
            organized in line with the university calendar. They include: Retreats, Charity Works, Hiking, Bike Ride,
            Picnics, Talent Days, Social Days, Music Concerts
            and many more.
          </p>
          <p className="mb-4">
            The Community is connected to the Parish via the
            JKUAT Chaplaincy under the stewardship of Fr
            Prof Lawrence Njoroge our Chaplain. The
            community brags of the unwavering support it
            receives from the St Augustine Parish Family in
            more ways than one.
          </p>
        </div>
    </div>
  </section>
  );
};

export default SecondMass;
