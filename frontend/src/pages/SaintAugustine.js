import React from 'react';
import logo from '../assets/staugustine.jpg'; // adjust the path based on your file structure
import image1 from '../assets/augustine.webp'; // adjust the path based on your file structure
import image2 from '../assets/StAugustine.png'; // adjust the path based on your file structure
import image3 from '../assets/staugustine1.jpg'; // adjust the path based on your file structure
import bannerImage from '../assets/church.jpg'; // adjust the path based on your file structure


const SaintAugustine = () => {
  return (
    <div className="py-4 px-10">
      <div className="relative w-full h-64 mb-4">
        <img
          src={bannerImage}
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-white text-4xl font-bold">Saint Augustine</h1>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-3xl text-center font-bold mb-4 mt-8 text-yellow-500">About Saint Augustine of Hippo</h2>
        <div className="mb-4">
          <img
            src={logo}
            alt="Saint Augustine"
            className="w-48 mr-4 mb-4"
          />
          <p>
            Saint Augustine of Hippo (13 November 354 – 28 August 430) was a Roman African, early Christian theologian and philosopher from Numidia whose writings influenced the development of Western Christianity and Western philosophy. He was the bishop of Hippo Regius (present-day Annaba, Algeria) in North Africa and is viewed as one of the most important Church Fathers in Western Christianity for his writings in the Patristic Era.
          </p>
        </div>
        <div className="mb-4">
          <img
            src={image1}
            alt="Saint Augustine"
            className="w-48 mr-4 mb-4"
          />
          <p>
            Augustine was born in 354 in the municipium of Thagaste (now Souk Ahras, Algeria) in the Roman province of Numidia. His mother, Monica, was a devout Christian; his father, Patricius, was a Pagan who converted to Christianity on his deathbed. Augustine was educated in North Africa and later in Rome and Milan.
          </p>
        </div>
        <div className="mb-4">
          <img
            src={image2}
            alt="Saint Augustine"
            className="w-48 mr-4 mb-4"
          />
          <p>
            Augustine's works, including "The City of God," "On Christian Doctrine," and "Confessions," continue to be influential. His thoughts profoundly influenced the medieval worldview and the Protestant Reformation. He is a saint in the Catholic Church, the Eastern Orthodox Church, and the Anglican Communion.
          </p>
        </div>
        <div className="">
          <img
            src={image3}
            alt="Saint Augustine"
            className="w-48 mr-4 mb-4"
          />
          <p>
            Augustine died on 28 August 430. His feast day is celebrated on the anniversary of his death, 28 August. His contributions to theology, philosophy, and the foundations of the Church remain significant to this day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SaintAugustine;
