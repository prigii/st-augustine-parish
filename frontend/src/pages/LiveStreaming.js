import React from 'react';
import bannerImage from '../assets/church.jpg'; // adjust the path based on your file structure

const LiveStreaming = () => {
  return (
    <div className="py-4 px-10">
      <div className="relative w-full h-64">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold ">Live Streaming</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12">
        <p className="mt-4 mb-4">
          Join our live streaming of mass services and other parish events. Stay connected with our community from wherever you are.
        </p>
        {/* <h1 className="text-2xl font-bold mb-4 mt-4">Live Streaming</h1> */}
        <div className="aspect-w-16 aspect-h-9 items-center">
          <iframe
            width="900"
            height="560"
            src="https://www.youtube.com/embed/w6UssRg3AXA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      
    </div>
  );
};

export default LiveStreaming;
