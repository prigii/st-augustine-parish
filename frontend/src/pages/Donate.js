// src/pages/Donate.js

import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/checkoutform';
import mpesa from '../assets/mpesa-logo1.png'
import caritas from '../assets/caritas-logo.png'
import kcb from '../assets/kcb-logo.png'
import ParishCenterCarousel from '../components/imageCarousel';

const stripePromise = loadStripe('your-publishable-key-here');

const Donate = () => {
  return (
    <section id="about" className="py-4 px-10">
      <ParishCenterCarousel />
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl text-yellow-500 font-bold mb-4">Donate</h1>
        <p className="mb-4">
          Thank you for considering a donation to St. Augustine Catholic Parish Juja. Your generous contributions help us
          continue our mission and support our community.
        </p>

        <h2 className="text-xl font-semibold mb-2">Donation Methods</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex flex-col items-center p-4 border-2 rounded">
            <img src={mpesa} alt="MPESA Logo" className="w-22 h-16 mb-2" />
            <h3 className="text-lg font-semibold">MPESA</h3>
            <p>Paybill Number: 522533</p>
            <p>Account Number: 888888</p>
          </div>

          <div className="flex flex-col items-center p-4 border-2 rounded">
            <img src={kcb} alt="KCB Logo" className="w-22 h-16 mb-2" />
            <h3 className="text-lg font-semibold">KCB Bank</h3>
            <p>Directly Transfer to KCB Account Number: </p>
          </div>

          <div className="flex flex-col items-center p-4 border-2 rounded">
            <img src={caritas} alt="Caritas Logo" className="w-22 h-16 mb-2" />
            <h3 className="text-lg font-semibold">Caritas Microfinance Bank</h3>
            <p>Paybill Number: 8998990</p>
            <p>Account Number: 308600</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mb-2">Leave an Optional Message</h2>
        <textarea
          className="w-full p-2 border rounded mb-4"
          rows="4"
          placeholder="Optional message"
        ></textarea>

        <h2 className="text-xl font-semibold mb-4 mt-6">Donate with Card</h2>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </section>
  );
};

export default Donate;
