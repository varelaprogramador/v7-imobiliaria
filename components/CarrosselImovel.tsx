// components/CarrosselImovels.tsx
"use client";
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

interface Imovel {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
}

interface CarrosselImovelsProps {
  Imovels: Imovel[];
}

const CarrosselImovels: React.FC<CarrosselImovelsProps> = ({ Imovels }) => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop className="relative">
      {Imovels.map((Imovel) => (
        <div key={Imovel.id} className="relative">
          {/* Imagem */}
          
          <Image
  src={Imovel.imagem}
  alt={Imovel.titulo}
  width={500}
  quality={100}
  height={250}
  className="rounded-lg"
  style={{ objectFit: 'cover', height: '600px', width: '100%' }}
/>

          {/* Conteúdo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 rounded-lg p-16 flex flex-col justify-end">
            <h3 className="text-white text-2xl font-bold">{Imovel.titulo}</h3>
            <p className="text-gray-200 mt-2">{Imovel.descricao}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarrosselImovels;
