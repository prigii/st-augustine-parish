import React from 'react';

const About = () => {
  return (
    <section id="about" className="p-16 bg-yellow-500 h-auto">
      <div className="bg-white p-6 rounded-lg shadow-md h-auto md:h-96 lg:h-full">
        <h2 className="text-3xl font-bold mb-6 text-center"><a href="/about-parish">About Our Church</a></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-yellow-100 p-4 rounded-lg shadow border-2 border-gray-600">
            <h3 className="text-xl font-semibold mb-2">Our History</h3>
            <p>St Augustine Catholic Church has served the Juja community since 2002, with a legacy of faith, service, and community.</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow border-2 border-gray-600">
            <h3 className="text-xl font-semibold mb-2">Vibrant Community</h3>
            <p>Our diverse congregation comes together to worship, learn, and support one another in our spiritual journey.</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow border-2 border-gray-600">
            <h3 className="text-xl font-semibold mb-2">Welcoming Environment</h3>
            <p>We strive to create an inclusive and welcoming space for all who seek to deepen their relationship with God.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
