// src/components/MassSchedule.js
import React from 'react';

const MassSchedule = () => {
  return (
    <section id="mass-schedule" className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-8 text-center">Mass Schedule</h2>
      <div className="relative max-w-2xl mx-auto">
        <div className="border-r-4 border-yellow-500 absolute h-full top-0 left-1/2 transform -translate-x-1/2"></div>
        <ul className="list-none p-0 m-0">
          <li className="mb-16 flex items-center">
            <div className="w-1/2 flex justify-end pr-8">
              <div className="text-right">
                <h3 className="text-xl font-semibold">Weekday Masses</h3>
                <p>Monday - Friday at 6:15 AM</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-yellow-500 w-8 h-8 rounded-full text-white flex items-center justify-center z-10">1</div>
              <div className="border-b-2 border-yellow-500 absolute right-full top-1/2 transform -translate-y-1/2 w-8"></div>
            </div>
            <div className="w-1/2 pl-8"></div>
          </li>
          <li className="mb-16 flex items-center">
            <div className="w-1/2 pr-8"></div>
            <div className="relative">
              <div className="bg-yellow-500 w-8 h-8 rounded-full text-white flex items-center justify-center z-10">2</div>
              <div className="border-b-2 border-yellow-500 absolute left-full top-1/2 transform -translate-y-1/2 w-8"></div>
            </div>
            <div className="w-1/2 flex justify-start pl-8">
              <div className="text-left">
                <h3 className="text-xl font-semibold">Weekend Masses</h3>
                <p>Saturday at 7:00 AM, Sunday at 7:00 AM, 9:00 AM, and 11:00 AM</p>
              </div>
            </div>
          </li>
          <li className="mb-16 flex items-center">
            <div className="w-1/2 flex justify-end pr-8">
              <div className="text-right">
                <h3 className="text-xl font-semibold">Holy Days' Masses</h3>
                <p>Check the parish bulletin for specific times.</p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-yellow-500 w-8 h-8 rounded-full text-white flex items-center justify-center z-10">3</div>
              <div className="border-b-2 border-yellow-500 absolute right-full top-1/2 transform -translate-y-1/2 w-8"></div>
            </div>
            <div className="w-1/2 pl-8"></div>
          </li>
        </ul>
      </div>
      <div className="mt-8 text-center">
        <a href="/about-parish" className="text-yellow-500 font-bold hover:underline">
          Check mass schedules for our outstations
        </a>
      </div>
    </section>
  );
};

export default MassSchedule;
