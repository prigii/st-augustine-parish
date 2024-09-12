// src/pages/About.js
import React from 'react';
import ImageCarousel from '../components/imageCarousel';

const AboutParish = () => {
  return (
    <>
      
      <section id="about" className="p-8 bg-gray-100">
      <ImageCarousel />
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">About St Augustine Catholic Parish</h2>
          <p className="mb-4">
            St Augustine Catholic Parish, located in Juja, Kenya, has been serving the community for over 50 years. Our parish is a vibrant and welcoming community where individuals and families come together to worship, learn, and grow in faith.
          </p>
          <p className="mb-4">
            Our mission is to provide a place of worship and spiritual growth, where everyone feels welcomed and valued. We offer a variety of services and programs to support the spiritual, social, and educational needs of our parishioners.
          </p>
          <p className="mb-4">
            From our regular Mass schedules to our community outreach programs, we strive to live out the teachings of Christ in everything we do. Join us for worship, get involved in our ministries, or simply come to learn more about our faith.
          </p>
          <p className="mb-4">
            We look forward to welcoming you to St Augustine Catholic Parish, Juja. Together, let us continue to build a strong and faith-filled community.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutParish;
