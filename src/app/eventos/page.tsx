'use client'

import React, { useEffect, useState } from 'react';
import Menu from "../../components/menu/Menu";
import CarrousselAulas from "@/components/carroussel/CarrousselAulas";
import Button from "@/components/button/Button";

export default function Aulas() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('/util.json')
      .then(response => response.json())
      .then(data => {
        // Filtrar os itens que têm o tipo "aulas"
        const filteredImages = data.images.filter((image: { tipo: string; }) => image.tipo === 'eventos');
        setImages(filteredImages);
      })
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  

  return (
    
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen max-h-screen font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <nav>
        <Menu />
      </nav>
      <main className="flex flex-row justify-center h-full w-full">
        <div className="container__textos bg-white h-full p-10 space-y-10" style={{ width: "calc(30% - 3.5rem)", marginLeft: "3.5rem" }}>
          <h1 className="text-6xl font-light font-inter">Nossos  
            <span className="block ml-16 text-6xl font-medium font-montserrat">Eventos</span>
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
            <h2 className="text-lg text-center font-medium font-montserrat mb-6">Professores</h2>
            <ul className="space-y-4 flex flex-col items-center">
              <li className="text-lg font-light font-inter w-[90%] flex items-center justify-center space-x-4">
                <div className="w-10 h-10 bg-black rounded-full"></div>
                <span>Carininha</span>
              </li>
              <li className="text-lg font-light font-inter w-[90%] flex items-center justify-center space-x-4">
                <div className="w-10 h-10 bg-black rounded-full"></div>
                <span>Fulaninha</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container_carrossel bg-slate-100 h-full w-[70%] flex justify-center items-center">
          <CarrousselAulas images={images} />
        </div>
      </main>
    </div>
  );
}