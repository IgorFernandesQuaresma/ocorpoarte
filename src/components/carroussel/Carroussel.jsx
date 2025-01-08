'use client';

import { useEffect, useState } from 'react';

export default function Carroussel() {

    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        fetch('/util.json')
          .then((response) => response.json())
          .then((data) => setImages(data.images));
      }, []);

      
      const cardStyles = [
        { height: 'h-full' },  // cardOne
        { height: 'h-[90%]' },  // cardTwo
        { height: 'h-[90%]' },  // cardThree
      ];

      const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      };
    
      const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      };


    return (
    <div className="w-[95%] h-[70%] rounded-2xl">
        <div className="w-full h-full flex justify-center items-center gap-4 transform translate-x-[15%]">
  {/* Exibindo apenas 3 cards, independentemente da quantidade de imagens */}
            {images.slice(0, 3).map((image, index) => (
                <div 
                key={image.id}
                className={`w-[30%] ${cardStyles[index]?.height} } rounded-2xl shadow-md shadow-black`}
                >
                {/* Aqui, vamos exibir a imagem correspondente com base no currentIndex */}
                <img
                    src={images[(index + currentIndex) % images.length]?.url}
                    alt={images[(index + currentIndex) % images.length]?.description}
                    className="w-full h-full object-cover object-right-bottom rounded-lg"
                />
                </div>
            ))}
</div>


        <div className="flex justify-center gap-20 mt-4">
        <button
         onClick={goToPrevious}
          className= " w-20 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
        >
          &lt;
        </button>
        <button
          onClick={goToNext}
          className="w-20 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
        >
          &gt;
        </button>
      </div>
    </div>
    );
  }