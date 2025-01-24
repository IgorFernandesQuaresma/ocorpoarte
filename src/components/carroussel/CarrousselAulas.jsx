'use client'

import React, {useContext, useEffect, useState } from 'react';
import Card from '../card/Card';

const CarrousselAulas = ({ images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    
  };

  return (
    <div className="flex flex-col items-center w-5/6">
      {images.length > 0 && (
        <div className="transition-transform duration-500 ease-in-out w-full">
          <Card
            key={images[currentIndex].id}
            id={images[currentIndex].id}
            url={images[currentIndex].url}
            title={images[currentIndex].title}
            description={images[currentIndex].description}
          />
        </div>
      )}
      <div className="flex gap-4 mt-4">
        <button
          onClick={handlePrev}
          className="w-20 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="w-20 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CarrousselAulas;