// src/components/Navbar.js
import React, { useState } from 'react';
import logo from '../assets/staugustine.jpg'; // adjust the path based on your file structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-yellow-900 p-4 text-white flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="St Augustine" className="h-10 w-10 mr-3" />
        <div className="text-2xl font-bold">St Augustine Catholic Parish, Juja</div>
      </div>
      <button className="md:hidden" onClick={toggleMenu}>
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <li><a href="/" className="block py-2 md:py-0 hover:text-yellow-400">Home</a></li>
        <li><a href="/about" className="block py-2 md:py-0 hover:text-yellow-400">About</a></li>
        <li><a href="/clergy" className="block py-2 md:py-0 hover:text-yellow-400">Clergy</a></li>
        <li><a href="/outstations" className="block py-2 md:py-0 hover:text-yellow-400">Outstations</a></li>
        <li><a href="/groups" className="block py-2 md:py-0 hover:text-yellow-400">Groups</a></li>
        <li><a href="/contact" className="block py-2 md:py-0 hover:text-yellow-400">Contact</a></li>
        <li><a href="/donate" className="block py-2 md:py-0 bg-yellow-500 text-brown-700 px-4 py-2 rounded hover:bg-yellow-600">Donate</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
