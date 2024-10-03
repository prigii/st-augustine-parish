import React from 'react';

const StPaulGachororo = () => {
  return (
    <div className="py-4 px-10">
      <div className="max-w-6xl mx-auto mt-12">
        <h1 className="text-2xl font-bold mb-4 text-yellow-500">St Paul Catholic Church, Gachororo</h1>
        <p>Welcome to the St Paul Catholic Church, Gachororo page.</p>
        <p className='font-bold'>Mass times: Sunday 9am - 11am</p>
        <p className="mb-4">
          As the St Paul’s Outstation, we are in the final stages of
          constructing a beautiful and spacious church as our
          faith and the number of Christians continue to grow
          exponentially. Other projected projects are the
          construction of ablution block, fencing the two
          outstation plots and landscaping the church
          compound.
        </p>
        <p className="mb-4">
        St. Paul Gachororo outstation has eleven
        Jumuiyas each having between 18 and 32 families. namely:
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
        
        <p className="mb-4">
          CMA has 30 Commissioned active members while CWAis an active group with 85 members. Choir, PMC, MYM,
          YCA and YSC are also active groups in our outstation
          each having between 20 and 100 members. Devotional
          groups including Pioneer, Sacred Heart, Legion of Maryare also active.
        </p>
      </div>
    </div>
  );
};

export default StPaulGachororo;
