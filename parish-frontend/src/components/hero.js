// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="bg-cover bg-center h-96" style={{ backgroundImage: "url('/path-to-church-image.jpg')" }}>
      <div className="bg-black bg-opacity-50 h-full flex items-center justify-center text-center text-white p-4">
        <div>
          <h1 className="text-4xl font-bold">Welcome to St Augustine Catholic Parish, Juja</h1>
          <p className="mt-4 text-lg">Join us for our Mass proceedings and community events at the heart of Juja.</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
