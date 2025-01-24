'use client'

import React, { useEffect, useState } from 'react';
import Menu from "../../components/menu/Menu";
import CarrousselAulas from "@/components/carroussel/CarrousselAulas";
import Button from "@/components/button/Button";

export default function Aulas() {
  const [images, setImages] = useState([]);
  const [professorImage, setProfessorImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/util.json')
      .then(response => response.json())
      .then(data => {
        // Filtrar os itens que têm o tipo "aulas"
        const filteredImages = data.images.filter((image) => image.tipo === 'aulas');
        setImages(filteredImages);

        if (filteredImages.length > 0) {
          setProfessorImage(filteredImages[0].professor);
        }
      })
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  useEffect(() => {
    if (images.length > 0) {
      setProfessorImage(images[currentIndex].professor);
    }
  }, [currentIndex, images]);

  const handleImageChange = (index) => {
    setCurrentIndex(index);
  };

  console.log(professorImage)

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen max-h-screen font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <nav>
        <Menu />
      </nav>
      <main className="flex flex-row justify-center h-full w-full">
        <div className="container__textos bg-white h-full p-10 space-y-6" style={{ width: "calc(30% - 3.5rem)", marginLeft: "3.5rem" }}>
          <h1 className="text-6xl font-light font-inter">Nossas  
            <span className="block ml-24 text-6xl font-medium font-montserrat">Aulas</span>
          </h1>
          <p className="text-xl font-light font-inter w-[90%] text-left">Textinho de criapipipi popopo lalalala sejam rainhas princesas mendigas, lugar de mulher é onde ela quiser</p>

          <Button
            width="w-[80%]"
            height="h-[45px]"
            color="bg-red-500"
            borderRadius="rounded-xl"
            text="Botão"
            image=""
          />

          <div>
            <h2 className="text-lg text-center font-medium font-montserrat mb-4">Professores</h2>
            <ul className="space-y-2 flex flex-col items-center">
              {professorImage === "Carininha" && (
                <li className="text-lg font-light font-inter w-[90%] flex items-center justify-center space-x-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img src="/fotos/Carina.jpeg" alt="Carininha" width={56} height={56} />
                </div>
                <span>Carininha</span>
              </li>
              )}
              {professorImage === "Fulaninha" && (
                <li className="text-lg font-light font-inter w-[90%] flex items-center justify-center space-x-4">
                <div className="w-14 h-14 rounded-full overflow-hidden">
                  <img src="/fotos/Eu.jpeg" alt="Fulaninha" width={56} height={56} />
                </div>
                <span>Fulaninha</span>
              </li>
              )}
            </ul>
          </div>
        </div>
        <div className="container_carrossel bg-slate-100 h-full w-[70%] flex justify-center items-center">
          <CarrousselAulas images={images} onImageChange={handleImageChange} />
        </div>
      </main>
    </div>
  );
}