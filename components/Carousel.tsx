// components/Carousel.tsx
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';

const Carousel: React.FC = () => {
  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false });
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay]);

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
    <div className="embla" ref={emblaRef}>
      <div className="embla__container ">
        {slides.map((slide) => (
          <div
            className="embla__slide  "
            key={slide.id}
          >
            <div className="w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                width={500}
                height={500}
                quality={100}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="w-full p-4 md:p-6 bg-white text-black flex flex-col items-start">
              <h2 className="text-lg md:text-xl font-bold mb-2">{slide.title}</h2>
              <p className="text-sm mb-4">{slide.description}</p>
              <Link href={slide.link}>
                <p className="text-blue-500 font-medium">Leia Mais</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
