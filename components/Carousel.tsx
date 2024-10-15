import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './swiperStyle.css';

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

export default function CarouselSwiper() {

    const slides = [
        {
          id: 1,
          title: 'Como preparar seu imóvel para locação? 7 passos essenciais',
          description:
            'Colocar seu imóvel parado para locação é uma excelente oportunidade para ter uma ótima fonte de renda passiva mensal. No entanto, para garantir um bom inquilino e retorno financeiro, siga estes passos...',
          image: '/assets/carousel-image.png',
          link: '/post/como-preparar-imovel-locacao'
        },
        {
          id: 2,
          title: 'Os benefícios de alugar seu imóvel rapidamente',
          description:
            'Descubra as vantagens de alugar seu imóvel de forma ágil e eficiente. Maximize seu retorno com as melhores práticas.',
          image: '/assets/carousel-image.png',
          link: '/post/beneficios-alugar-rapido'
        },
        {
          id: 3,
          title: 'Melhore o valor do seu imóvel antes de alugar',
          description:
            'Pequenas reformas podem aumentar o valor do seu imóvel no mercado. Saiba onde investir antes de colocar seu imóvel para alugar.',
          image: '/assets/carousel-image.png',
          link: '/post/melhorar-valor-imovel'
        },
        {
          id: 4,
          title: 'Melhore o valor do seu imóvel antes de alugar',
          description:
            'Pequenas reformas podem aumentar o valor do seu imóvel no mercado. Saiba onde investir antes de colocar seu imóvel para alugar.',
          image: '/assets/carousel-image.png',
          link: '/post/melhorar-valor-imovel'
        },
        {
          id: 5,
          title: 'Melhore o valor do seu imóvel antes de alugar',
          description:
            'Pequenas reformas podem aumentar o valor do seu imóvel no mercado. Saiba onde investir antes de colocar seu imóvel para alugar.',
          image: '/assets/carousel-image.png',
          link: '/post/melhorar-valor-imovel'
        },
        {
          id: 6,
          title: 'Melhore o valor do seu imóvel antes de alugar',
          description:
            'Pequenas reformas podem aumentar o valor do seu imóvel no mercado. Saiba onde investir antes de colocar seu imóvel para alugar.',
          image: '/assets/carousel-image.png',
          link: '/post/melhorar-valor-imovel'
        },
        {
          id: 7,
          title: 'Melhore o valor do seu imóvel antes de alugar',
          description:
            'Pequenas reformas podem aumentar o valor do seu imóvel no mercado. Saiba onde investir antes de colocar seu imóvel para alugar.',
          image: '/assets/carousel-image.png',
          link: '/post/melhorar-valor-imovel'
        },
    
        
      ];
  return (
    <>
      <Swiper
      centeredSlides={true}
      spaceBetween={30}
      autoplay={{
        delay: 2000,
        
        disableOnInteraction: false,
      }}
        pagination={{
          dynamicBullets: true,
        
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
      

        {slides.map((slide) => (
          <SwiperSlide
            className='border rounded-md'
            key={slide.id}
          >
            
              <Image
                src={slide.image}
                alt={slide.title}
                width={1000}
                height={500}
                quality={100}
                className="object-cover w-full h-auto rounded-md"
              />
            
            <div className="w-full p-4 md:p-6 bg-white text-black flex flex-col items-start">
              <h2 className="text-lg md:text-xl font-bold mb-2">{slide.title}</h2>
              <p className="text-sm mb-4">{slide.description}</p>
              <Link href={slide.link}>
                <p className="text-blue-500 font-medium">Leia Mais</p>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
