import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/staugustine.jpg'; // adjust the path based on your file structure

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for Groups dropdown
  const [isOutstationsOpen, setIsOutstationsOpen] = useState(false); // State for Outstations dropdown
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);

  const dropdownRef = useRef(null); // Ref for Groups dropdown menu
  const outstationsRef = useRef(null); // Ref for Outstations dropdown menu
  const aboutRef = useRef(null); // Ref for About dropdown menu


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleAboutDropdown = () => {
    setIsAboutDropdownOpen(!isAboutDropdownOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsAboutDropdownOpen(false);
  };

  const toggleOutstations = () => {
    setIsOutstationsOpen(!isOutstationsOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
    if (outstationsRef.current && !outstationsRef.current.contains(event.target)) {
      setIsOutstationsOpen(false);
    }
    if (aboutRef.current && !aboutRef.current.contains(event.target)) {
      setIsAboutDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-yellow-400 shadow-md p-4 text-black w-full top-0 z-50 flex flex-col md:flex-row justify-between items-center">
      <div className="flex items-center justify-between w-full md:w-auto ml-20">
        <div className="flex items-center">
          <img src={logo} alt="St Augustine" className="h-10 w-10 mr-3" />
          <div className="text-2xl font-bold leading-tight">
          St. Augustine Catholic Parish &<br />University Chaplaincy, Juja
        </div>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>
      <ul
        className={`md:flex justify-center space-x-6 ${isOpen ? "block" : "hidden"} md:block w-full md:w-auto mt-4 md:mt-0 mr-8`}
      >
        <li className="text-center md:text-left relative">
          <NavLink
            to="/"
            className="block text-l font-semibold py-2 md:py-0 custom-underline"
            activeClassName="text-yellow-700"
            onClick={closeMenu}
            end
          >
            Home
          </NavLink>
        </li>
        <li className="text-center md:text-left relative">
          <button onClick={toggleAboutDropdown} className="block text-l font-semibold py-2 md:py-0 custom-underline">
            About
          </button>
          {isAboutDropdownOpen && (
            <ul ref={aboutRef} className="absolute bg-white shadow-lg rounded-md mt-2 z-10 w-56">
              <li>
                <NavLink
                  to="/about-parish"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={closeMenu}
                >
                  About the Parish
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/saint-augustine"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={closeMenu}
                >
                  Saint Augustine
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mass-readings-prayers"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={closeMenu}
                >
                  Mass Readings & Prayers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/live-streaming"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={closeMenu}
                >
                  Live Streaming
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/vatican-news"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={closeMenu}
                >
                  Vatican News
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/spiritual-resources"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={closeMenu}
                >
                  Spiritual Resources
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        
        <li className="text-center md:text-left relative">
          <button onClick={toggleOutstations} className="block text-l font-semibold py-2 md:py-0 custom-underline">
            Outstations
          </button>
          {isOutstationsOpen && (
            <ul ref={outstationsRef} className="absolute bg-white shadow-lg rounded-md mt-2 z-10 w-56">
              <li>
                <NavLink
                  to="/outstations/first-mass"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={() => {
                    closeMenu();
                    setIsOutstationsOpen(false); // Close dropdown on item click
                  }}
                >
                  First Mass
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/outstations/second-mass"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={() => {
                    closeMenu();
                    setIsOutstationsOpen(false); // Close dropdown on item click
                  }}
                >
                  Second Mass
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/outstations/third-mass"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={() => {
                    closeMenu();
                    setIsOutstationsOpen(false); // Close dropdown on item click
                  }}
                >
                  Third Mass
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/outstations/st-paul-gachororo"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={() => {
                    closeMenu();
                    setIsOutstationsOpen(false); // Close dropdown on item click
                  }}
                >
                  St Paul Gachororo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/outstations/mary-mother-of-god-mirimaini"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={() => {
                    closeMenu();
                    setIsOutstationsOpen(false); // Close dropdown on item click
                  }}
                >
                  Mary Mother of God Mirimaini
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li className="text-center md:text-left relative">
          <button onClick={toggleDropdown} className="block text-l font-semibold py-2 md:py-0 custom-underline">
            Groups
          </button>
          {isDropdownOpen && (
            <ul ref={dropdownRef} className="absolute bg-white shadow-lg rounded-md mt-2 z-10 w-56">
              <li>
                <NavLink
                  to="/groups/cma"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={() => {
                    closeMenu();
                    setIsDropdownOpen(false); // Close dropdown on item click
                  }}
                >
                  CMA
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/groups/cwa"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={() => {
                    closeMenu();
                    setIsDropdownOpen(false); // Close dropdown on item click
                  }}
                >
                  CWA
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/groups/yca"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={() => {
                    closeMenu();
                    setIsDropdownOpen(false); // Close dropdown on item click
                  }}
                >
                  YCA
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/groups/ysc"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={() => {
                    closeMenu();
                    setIsDropdownOpen(false); // Close dropdown on item click
                  }}
                >
                  YSC
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/groups/mym"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={() => {
                    closeMenu();
                    setIsDropdownOpen(false); // Close dropdown on item click
                  }}
                >
                  MYM
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/groups/pmc"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={() => {
                    closeMenu();
                    setIsDropdownOpen(false); // Close dropdown on item click
                  }}
                >
                  PMC
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/groups/choir"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={() => {
                    closeMenu();
                    setIsDropdownOpen(false); // Close dropdown on item click
                  }}
                >
                  Choir
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/groups/sacred-heart-of-jesus"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={() => {
                    closeMenu();
                    setIsDropdownOpen(false); // Close dropdown on item click
                  }}
                >
                  Sacred Heart of Jesus
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/groups/legion-of-mary"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={() => {
                    closeMenu();
                    setIsDropdownOpen(false); // Close dropdown on item click
                  }}
                >
                  Legion of Mary
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/groups/self-help-group"
                  className="block px-4 py-2 text-black hover:bg-gray-200"
                  onClick={() => {
                    closeMenu();
                    setIsDropdownOpen(false); // Close dropdown on item click
                  }}
                >
                  Self Help Group
                </NavLink>
              </li>
            </ul>
          )}
        </li>
        <li className="text-center md:text-left relative">
          <NavLink
            to="/contact"
            className="block text-l font-semibold py-2 md:py-0 custom-underline"
            activeClassName="underline text-yellow-700"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
        </li>
        <li className="text-center md:text-left">
          <button>
            <NavLink
              to="/donate"
              className="bg-gray-900 text-white block text-l font-semibold px-4 py-2 rounded hover:bg-yellow-700"
              onClick={closeMenu}
            >
              Donate
            </NavLink>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
