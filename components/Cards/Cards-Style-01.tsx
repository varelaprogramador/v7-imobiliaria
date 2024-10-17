import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import {
  Bed,
  Waves,
  MapPin,
  CarFront,
  DoorOpen,
  ShowerHead,
} from 'lucide-react'

interface CardProps {
  data: {
    categoria: string
    fundo: string
    nome: string
    localizacao: string
    quartostexto: string
    vagasvisib: boolean
    quartosvisib: boolean
    piscinavisib: boolean
    banheirovisb: boolean
    cloasetvisib: boolean
    qtdvagas: number
    qtdbanheiros: number
    link: string
  }
}

function Card({ data }: CardProps) {
  const {
    categoria,
    fundo,
    nome,
    localizacao,
    quartostexto,
    qtdvagas,
    qtdbanheiros,
    vagasvisib,
    quartosvisib,
    banheirovisb,
    piscinavisib,
    cloasetvisib,
    link,
  } = data // Desestrutura o objeto

  return (
    <Link href={link}>
      <article className="relative flex h-[450px] w-full max-w-[400px] flex-col justify-end bg-black text-white">
        <Image
          fill
          priority
          src={fundo}
          sizes="100%"
          alt={`${nome} - ${categoria}`}
          className="absolute z-0 object-cover"
        />
        <div className="relative z-10 flex h-full w-full flex-col justify-end gap-2 rounded-lg bg-[linear-gradient(to_bottom,_rgba(0,0,0,0),_rgba(0,0,0,1))] p-4 px-4">
          {/* Fundo semitransparente para o texto */}
          <h2>{categoria}</h2>
          <h1
            className="text-4xl"
            style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}
          >
            {nome}
          </h1>
          <div className="flex w-full gap-2">
            <MapPin size={20} />
            <p>{localizacao}</p>
          </div>
          <div className="grid grid-cols-3 border-t-2 pt-2">
            {quartosvisib && (
              <div className="flex gap-2">
                <Bed size={20} />
                <p className="text-sm">{quartostexto}</p>
              </div>
            )}
            {vagasvisib && (
              <div className="flex gap-2">
                <CarFront size={20} />
                <p className="text-sm">{qtdvagas} vagas</p>
              </div>
            )}
            {banheirovisb && (
              <div className="flex gap-2">
                <ShowerHead size={20} />
                <p className="text-sm">{qtdbanheiros} banheiros</p>
              </div>
            )}

            {piscinavisib && (
              <div className="flex gap-2">
                <Waves size={20}></Waves>
                <p className="text-sm">Piscina</p>
              </div>
            )}
            {cloasetvisib && (
              <div className="flex gap-2">
                <DoorOpen size={20} />
                <p className="text-sm">Closet</p>
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Card
