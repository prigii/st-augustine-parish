import React from 'react';
import churchImage from '../assets/church-front.jpg'; // adjust the path based on your file structure
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-white ">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className=" lg:w-1/2 px-4">
          <h1 className="lg:text-5xl text-3xl font-bold text-yellow-500 mb-4">Welcome to St. Augustine Catholic Parish & University Chaplaincy, Juja</h1>
          <p className="mt-4 text-lg">Join us for our Mass proceedings and community events at the heart of Juja.</p>
          <div className="mt-6 space-x-4">
            <NavLink to='/about-parish'><button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-700">About Us</button></NavLink>
            <NavLink to='/contact'><button className="bg-white text-black border-2 border-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-white">Visit Us</button></NavLink>
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
