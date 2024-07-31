// src/components/Footer.js
import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const footerHeight = document.querySelector('footer').offsetHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= documentHeight - footerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`bg-yellow-700 text-white p-4 mt-8 fixed bottom-0 w-full transition-transform duration-300 ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="container mx-auto text-center">
        <p>Contact Information | Physical Location | Social Media Links</p>
      </div>
    </footer>
  );
};

export default Footer;
