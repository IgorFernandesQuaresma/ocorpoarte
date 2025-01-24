import React, { createContext, useState, useEffect } from 'react';


interface ImageContextProps {
  images: Conteudo[];
  professor: string;
  tipo: string;
  handleImageChange: (image: Conteudo) => void;
}

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [professor, setProfessor] = useState('');
  const [tipo, setTipo] = useState('');

  useEffect(() => {
    fetch('/util.json')
      .then(response => response.json())
      .then(data => {
        setImages(data.images);
        if (data.images.length > 0) {
          setProfessor(data.images[0].professor);
          setTipo(data.images[0].tipo);
        }
      })
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  const handleImageChange = (image) => {
    setProfessor(image.professor);
    setTipo(image.tipo);
  };

  return (
    <ImageContext.Provider value={{ images, professor, tipo, handleImageChange }}>
      {children}
    </ImageContext.Provider>
  );
};