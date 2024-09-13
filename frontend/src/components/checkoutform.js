// src/components/CheckoutForm.js

import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    try {
      const { data: clientSecret } = await axios.post('/payments/create-payment/', {
        amount: 1000, // Example amount in cents
        payment_method_id: cardElement,
      });

      const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret);

      if (error) {
        console.error(error);
      } else if (paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded!');
        await axios.post('/payments/send-email/', {
          message: 'Donation received!',
        });
      }

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <CardElement className="p-2 border rounded mb-4" />
      <button
        className="bg-yellow-500 text-white px-4 py-2 rounded mb-8"
        type="submit"
        disabled={!stripe || loading}
      >
        {loading ? 'Processing...' : 'Donate'}
      </button>
    </form>
  );
};

export default CheckoutForm;
