// src/components/ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import parishCenter from '../data/staugustineCarousel';

const ParishCenterCarousel = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {parishCenter.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} />
          <p className="legend">{image.legend}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ParishCenterCarousel;
