// src/pages/Donate.js

import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../components/checkoutform';

const stripePromise = loadStripe('your-publishable-key-here');

const Donate = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-yellow-500">Donate</h1>
      <p className="mb-4">
        Thank you for considering a donation to St. Augustine Catholic Parish. Your generous contributions help us
        continue our mission and support our community.
      </p>

      <h2 className="text-xl font-semibold mb-2">Donation Methods</h2>
      
      <div className="mb-4">
        <h3 className="text-lg font-semibold">MPESA</h3>
        <p>Paybill Number: 522533</p>
        <p>Account Number: 888888</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">KCB Bank</h3>
        <p>Account Number: [Insert KCB Bank Account Number]</p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold">Caritas Microfinance Bank</h3>
        <p>Paybill Number: 8998990</p>
        <p>Account Number: 308600</p>
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
  );
};

export default Donate;
