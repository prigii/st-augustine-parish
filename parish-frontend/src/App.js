// src/App.js
import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="bg-yellow-100 min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <main className="flex-grow p-4">
        {/* Include your main content here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
