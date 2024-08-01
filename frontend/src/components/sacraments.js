// src/components/Sacraments.js
import React from 'react';
import sacramentBg from '../assets/hostchalice.jpg'; // adjust the path based on your file structure

const sacramentsData = [
  {
    number: 1,
    title: 'Baptism',
    description: 'Celebrate the beginning of your child\'s faith journey with us.'
  },
  {
    number: 2,
    title: 'Penance & Reconciliation',
    description: 'Find healing and forgiveness through the Sacrament of Reconciliation.'
  },
  {
    number: 3,
    title: 'Holy Eucharist',
    description: 'Participate in the holy banquet of our Lord Jesus Christ through the sacrament of the Eucharist.'
    
  },
  {
    number: 4,
    title: 'Confirmation',
    description: 'Get prepared to receive the fruits and gifts of the Holy Spirit.'
    
  },
  {
    number: 5,
    title: 'Anointing of the Sick',
    description: 'Receive the healing grace of God during times of illness or struggle.'
    
  },
  {
    number: 6,
    title: 'Matrimony',
    description: 'Let us guide you as you embark on the sacrament of marriage.'
  },
  {
    number: 7,
    title: 'Holy Orders',
    description: 'For the harvest is plenty but the labourers are few in the vineyard of the Lord. Come and be guided how to join the religious and priesthood.'
  }
];

const Sacraments = () => {
  return (
    <section
      id="sacraments"
      className="p-8"
      style={{ backgroundImage: `url(${sacramentBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Sacraments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sacramentsData.map((sacrament) => (
          <div
            key={sacrament.number}
            className="bg-yellow-100 border border-yellow-500 p-6 rounded-lg flex items-start"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-200 border border-yellow-500 rounded-full text-yellow-700 font-bold text-xl">
              {sacrament.number}
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">{sacrament.title}</h3>
              <p className="mt-2 text-gray-800">{sacrament.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sacraments;
