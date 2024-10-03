import React from 'react';
import bannerImage from '../assets/church.jpg'; // adjust the path based on your file structure

const SpiritualResources = () => {
  return (
    <div className="py-4 px-10">
      <div className="relative w-full h-64 mb-4">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">Spiritual Resources</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12">
        <p>
          Access a variety of spiritual resources to support your faith journey, including articles, videos, and other materials.
        </p>
        <div className='text-red-400 font-semibold p-4'>
            <p><a href="https://www.universalis.com/static/mass/orderofmass4.htm" className='text-color-yellow-500 underline'>The Canon Order of Mass</a></p>
        </div>
        <div className='text-red-400 font-semibold p-4'>
            <p><a href="https://www.youtube.com/channel/UCbrIxeH2TSwEc8eVwwMGv8w" className='text-color-yellow-500 underline'>Pause for Faith with Fr. Stephen Wang</a></p>
        </div>
        <div className='text-red-400 font-semibold p-4'>
            <p><a href="https://airmaria.com/2017/09/05/st-teresa-of-calcutta-a-reflection-on-eucharistic-adoration/" className='text-color-yellow-500 underline'>Mother Teresa’s Reflection on Adoration of Jesus in the Most Blessed Sacrament</a></p>
        </div>
        <div className='text-red-400 font-semibold p-4'>
            <p><a href="https://parish.rcdow.org.uk/tottenham/wp-content/uploads/sites/100/2020/03/Prayer-not-alone-.pdf" className='text-color-yellow-500 underline'>Prayer not alone</a></p>
        </div>
        <div className='text-red-400 font-semibold p-4'>
            <p><a href="https://www.loyolapress.com/retreats/say-yes-to-god/" className='text-color-yellow-500 underline'>The 3-Minute Retreat</a></p>
        </div>
        <div className='text-red-400 font-semibold p-4'>
            <p><a href="https://www.youtube.com/@CapuchinTv" className='text-color-yellow-500 underline'>Capuchin TV</a></p>
        </div>
        <div className='text-red-400 font-semibold p-4'>
            <p><a href="https://www.praymorenovenas.com/" className='text-color-yellow-500 underline'>All Novena Prayers</a></p>
        </div>
      </div>

    </div>
  );
};

export default SpiritualResources;
