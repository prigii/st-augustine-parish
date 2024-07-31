import React from 'react';
import fatherPatrickImage from '../assets/fatherPatrick.jpg'; // Adjust the path based on your file structure
import fatherBernardImage from '../assets/fatherBernard.jpg'; // Adjust the path based on your file structure
import fatherLawrenceImage from '../assets/fatherLawrence.jpg'; // Adjust the path based on your file structure

const Clergy = () => {
  return (
    <section id="clergy" className="p-8 bg-gray-100 h-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Clergy</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow border-2 border-gray-300">
          <img src={fatherPatrickImage} alt="Rev Fr. Patrick Ndu'ngu" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Father In-Charge</h3>
            <p>Rev Fr. Patrick Ndu'ngu</p>
            <a href="#message-father-in-charge" className="text-yellow-700 hover:underline mt-2 block">Read message from the Father In-Charge</a>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border-2 border-gray-300">
          <img src={fatherBernardImage} alt="Fr Bernard Njuguna" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">Assistant Father In-Charge</h3>
            <p>Rev Fr. Bernard Njuguna</p>
            <a href="#message-assistant-father-in-charge" className="text-yellow-700 hover:underline mt-2 block">Read message from the Assistant Father In-Charge</a>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow border-2 border-gray-300">
          <img src={fatherLawrenceImage} alt="Rev Fr. Prof. Lawrence Njoroge" className="w-full h-48 object-cover rounded-t-lg" />
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">University Chaplain</h3>
            <p>Rev Fr. Prof. Lawrence Njoroge</p>
            <a href="#message-university-chaplain" className="text-yellow-700 hover:underline mt-2 block">Read message from the University Chaplain</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clergy;

