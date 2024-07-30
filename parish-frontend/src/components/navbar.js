import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/staugustine.jpg'; // adjust the path based on your file structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white p-4 text-black flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="St Augustine" className="h-10 w-10 mr-3" />
        <div className="text-xl font-bold">St Augustine Catholic Parish, Juja</div>
      </div>
      <button className={`md:hidden ${isOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <li>
          <NavLink to="/" className="block text-l font-semibold py-2 md:py-0 custom-underline" end>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="block text-l font-semibold py-2 md:py-0 custom-underline">About</NavLink>
        </li>
        <li>
          <NavLink to="/clergy" className="block text-l font-semibold py-2 md:py-0 custom-underline">Clergy</NavLink>
        </li>
        <li>
          <NavLink to="/outstations" className="block text-l font-semibold py-2 md:py-0 custom-underline">Outstations</NavLink>
        </li>
        <li>
          <NavLink to="/groups" className="block text-l font-semibold py-2 md:py-0 custom-underline">Groups</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="block text-l font-semibold py-2 md:py-0 custom-underline">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/donate" className="block text-l font-semibold md:py-0 bg-yellow-500 text-brown-700 px-4 py-2 rounded hover:bg-yellow-600">Donate</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
