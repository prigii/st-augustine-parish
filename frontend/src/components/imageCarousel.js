// src/components/ImageCarousel.js
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import carouselImages from '../data/carouselImages';

const ImageCarousel = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      {carouselImages.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} />
          <p className="legend">{image.legend}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
