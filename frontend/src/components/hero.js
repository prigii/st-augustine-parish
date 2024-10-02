import React from 'react';
import churchImage from '../assets/church-front.jpg'; // adjust the path based on your file structure

const Hero = () => {
  return (
    <section className="h-240 ml-12 mr-12 md:flex">
      <div className="container mx-auto flex flex-col md:flex-row h-full">
        <div className="flex flex-col justify-center text-left text-yellow-600 p-4 md:p-8 w-full md:w-1/2">
          <h1 className="text-5xl font-semibold">Welcome to St. Augustine Catholic Parish & University Chaplaincy, Juja</h1>
          <p className="mt-4 text-lg">Join us for our Mass proceedings and community events at the heart of Juja.</p>
          <div className="mt-6 space-x-4">
            <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-700">About Us</button>
            <button className="bg-white text-black border-2 border-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-white">Visit Us</button>
          </div>
        </div>
        <div className="lg:w-1/2 mb-6 px-4 mt-8 lg:mt-6">
          <img src={churchImage} alt="St Augustine" className="w-full h-full object-cover rounded-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
