import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/staugustine.jpg'; // adjust the path based on your file structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md p-4 text-black fixed w-full top-0 z-50   flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center justify-between w-full md:w-auto ml-20 mr-12">
        <div className="flex items-center">
          <img src={logo} alt="St Augustine" className="h-10 w-10 mr-3" />
          <div className="text-xl font-bold">St Augustine Catholic Parish, Juja</div>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          )}
        </button>
      </div>
      <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block w-full md:w-auto mt-4 md:mt-0`}>
        <li className="text-center md:text-left"><NavLink to="/" className="block text-l font-semibold py-2 md:py-0 custom-underline" activeClassName="text-yellow-700" onClick={closeMenu} end>Home</NavLink></li>
        <li className="text-center md:text-left"><NavLink to="/about" className="block text-l font-semibold py-2 md:py-0 custom-underline" activeClassName="text-yellow-700" onClick={closeMenu}>About</NavLink></li>
        <li className="text-center md:text-left"><NavLink to="/clergy" className="block text-l font-semibold py-2 md:py-0 custom-underline" activeClassName="underline text-yellow-700" onClick={closeMenu}>Clergy</NavLink></li>
        <li className="text-center md:text-left"><NavLink to="/outstations" className="block text-l font-semibold py-2 md:py-0 custom-underline" activeClassName="underline text-yellow-700" onClick={closeMenu}>Outstations</NavLink></li>
        <li className="text-center md:text-left"><NavLink to="/groups" className="block text-l font-semibold py-2 md:py-0 custom-underline" activeClassName="underline text-yellow-700" onClick={closeMenu}>Groups</NavLink></li>
        <li className="text-center md:text-left"><button><NavLink to="/contact" className="bg-yellow-700 text-black block text-l font-semibold px-4 py-2 rounded hover:bg-yellow-800">Contact</NavLink></button></li>
        <li className="text-center md:text-left"><button><NavLink to="/donate" className="bg-yellow-700 text-black block text-l font-semibold px-4 py-2 rounded hover:bg-yellow-800">Donate</NavLink></button></li>  
      </ul>
    </nav>
  );
};

export default Navbar;
