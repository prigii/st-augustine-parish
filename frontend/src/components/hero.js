import React from 'react';
import churchImage from '../assets/church1.jpg'; // adjust the path based on your file structure

const Hero = () => {
  return (
    <section className="h-120 mt-12 ml-12 mr-12 md:flex">
      <div className="flex flex-col md:flex-row h-full">
        <div className="flex flex-col justify-center text-left text-yellow-800 p-4 md:p-8 w-full md:w-1/2">
          <h1 className="text-7xl font-semibold">Welcome to St. Augustine Catholic Parish & JKUAT Chaplaincy, Juja</h1>
          <p className="mt-4 text-lg">Join us for our Mass proceedings and community events at the heart of Juja.</p>
          <div className="mt-6 space-x-4">
            <button className="bg-yellow-700 text-black px-4 py-2 rounded hover:bg-yellow-800">About Us</button>
            <button className="bg-white text-black border-2 border-yellow-700 px-4 py-2 rounded hover:bg-yellow-700 hover:text-white">Visit Us</button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-4">
          <img src={churchImage} alt="St Augustine" className="h-auto w-full max-w-full max-h-96 rounded-lg object-cover transform scale-100" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
