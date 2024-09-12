import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import churchImage from '../assets/church.jpg';

const Footer = () => {
  return (
    <footer 
      className="bg-yellow-700 text-white p-8 w-full transition-transform duration-300"
      style={{ backgroundImage: `url(${churchImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-gray-900 bg-opacity-50 rounded-lg">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <table className="mx-auto my-4 text-left w-auto border-collapse border border-gray-400">
            <tbody>
              <tr>
                <td className="pr-4 border border-gray-400">Address:</td>
                <td className="border border-gray-400">Gachororo Road, Juja, Kenya</td>
              </tr>
              <tr>
                <td className="pr-4 border border-gray-400">Phone:</td>
                <td className="border border-gray-400">+254 712 345 678</td>
              </tr>
              <tr>
                <td className="pr-4 border border-gray-400">Email:</td>
                <td className="border border-gray-400">info@staugustinejuja.org</td>
              </tr>
              <tr>
                <td className="pr-4 border border-gray-400">Office Hours:</td>
                <td className="border border-gray-400">Monday - Friday, 8 AM - 4 PM</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4">We're here to assist you. Feel free to reach out with any questions or to schedule a visit.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube size={24} />
            </a>
          </div>
          <div className="text-center mt-8 font-bold">
        <p>&copy; 2024 St Augustine Parish Juja. All rights reserved.</p>
      </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
