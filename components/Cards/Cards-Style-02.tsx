import React from 'react'
import { MapPin } from 'lucide-react'

interface CardProps {
  data: {
    categoria: string
    fundo: string // Novo campo para a imagem de fundo
    nome: string
    localizacao: string
    condominio: number | undefined
    venda: number | undefined
  }
}

function Card({ data }: CardProps) {
  const { categoria, fundo, nome, localizacao, condominio, venda } = data // Desestrutura o objeto

  return (
    <article className="flex max-h-[600px] w-full flex-col justify-end bg-black text-black md:max-w-[400px]">
      <div
        className="min-h-[300px] w-full"
        style={{
          backgroundImage: `url(${fundo})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>
      <div className="flex h-full w-full flex-col justify-end gap-2 bg-[#D9D9D9] px-4 py-5">
        <h2>{categoria}</h2>
        <h1 className="text-4xl">{nome}</h1>
        <div className="flex w-full gap-2">
          <MapPin size={20} />
          <p>{localizacao}</p>
        </div>
      </div>

      <div className="flex min-h-[75px] w-full flex-col justify-center gap-2 bg-[#898989] px-4 py-3 text-white">
        {condominio && (
          <>
            <p className="text-md">Condominio : R${condominio}</p>
          </>
        )}
        {venda && (
          <>
            <p className="text-md">Vendas : R${venda}</p>
          </>
        )}
      </div>
    </article>
  )
}

export default Card
