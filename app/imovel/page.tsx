'use client'

import Image from 'next/image'
import { useState } from 'react'

import {
  Bed,
  Mail,
  Play,
  Heart,
  Ruler,
  Waves,
  MapPin,
  Search,
  Share2,
  Calendar,
  BedDouble,
  ImageIcon,
  PhoneIcon,
} from 'lucide-react'

import Thumb from '@/components/Thumb'
import CardsSecond from '@/components/Cards/Cards-Style-02'

const items = [
  'Sacada',
  'Gourmet',
  'Porcelanato',
  'Piscina',
  'Sacada com Skin Glass',
  'Alarme',
  'Sala de estar',
  'Despensa',
  'Varanda',
  'Churrasqueira',
  'Sala',
  'Aceita Pet',
  'Vinílico',
  'Aquecimento Elétrico',
  'Sala de Jantar',
  'Cozinha',
]

const cardsData = [
  {
    categoria: 'APARTAMENTO',
    fundo: '/assets/Cards/CardsDestaque/imovel-1.png',
    nome: 'EPIC PALHANO',
    localizacao: 'Santa Rosa - Londrina/PR',
    condominio: 400,
    venda: 400,
  },
  {
    categoria: 'APARTAMENTO',
    fundo: '/assets/Cards/CardsDestaque/imovel-1.png',
    nome: 'EPIC PALHANO',
    localizacao: 'Santa Rosa - Londrina/PR',
    condominio: 400,
    venda: 400,
  },
  {
    categoria: 'CASA',
    fundo: '/assets/Cards/CardsDestaque/imovel-2.png',
    nome: 'Triplex',
    localizacao: 'Universitário - Londrina/PR',
    condominio: 400,
    venda: 400,
  },
]

export default function Imovel() {
  const [textareaValue, setTextareaValue] = useState('')

  return (
    <div className="font-[family-name:var(--font-inter)]">
      <section className="w-full">
        <Thumb></Thumb>
      </section>

      <main className="grid grid-cols-[75%_25%] px-2 max-md:grid-cols-1">
        <div className="col-start-1 flex w-full flex-col gap-8 p-4">
          <section className="flex flex-col gap-3 border-b p-2">
            <h1 className="text-2xl font-semibold">
              Jd. Universitário - Casa Triplex com 3 Suítes, 3 dormitórios e 4
              banheiros, alto para venda
            </h1>

            <p>Casa</p>
            <div></div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <MapPin size={25}></MapPin>{' '}
                <p>
                  <span className="font-bold">Ver</span> no mapa
                </p>
              </div>
              <div className="flex gap-2">
                <button className="flex gap-2 rounded-md border border-black p-2 font-semibold hover:bg-orange-500 hover:text-white">
                  <ImageIcon size={20}></ImageIcon> GALERIA
                </button>
                <button className="flex gap-2 rounded-md border border-black p-2 font-semibold hover:bg-orange-500 hover:text-white">
                  <Play size={20}></Play> VIDEO
                </button>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-3 border-b p-2">
            <h3 className="text-xl">Valor:</h3>
            <h2 className="text-3xl font-bold">R$1.190.000</h2>
          </section>

          <section className="flex flex-col gap-8">
            <div className="grid grid-cols-5 items-center justify-center font-bold">
              <div className="flex flex-col items-center justify-center">
                <Ruler size={25}></Ruler>
                <h3 className="text-xl">1350 m² total</h3>
                <p>área total</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Ruler size={25}></Ruler>
                <h3 className="text-xl">220 m²</h3>
                <p>área util</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Bed size={25}></Bed>
                <h3 className="text-xl">3</h3>
                <p>Dormitórios</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <BedDouble size={25}></BedDouble>
                <h3 className="text-xl">3</h3>
                <p>Suites</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Waves size={25}></Waves>
                <h3 className="text-xl">1</h3>
                <p>Piscina</p>
              </div>
            </div>

            <p className="font-medium">
              No piso intermediário, você encontra um ambiente totalmente
              integrado entre: Sala de estar, sala de jantar, cozinha e área
              gourmet, todos com porcelanato de 1º linha, uma churrasqueira em
              área suspensa, e todo o conforto de um churrasco em família. Conta
              também com 4 vagas de garagem, 4 banheiros, sacada e varanda
              espaçosa.
              <br />
              <br />
              <br />* Estas informações refletem a opinião do corretor associado
              e não necessariamente da V7 Imobiliária , que não se
              responsabiliza por eventuais divergências ou prejuízos decorrentes
              do uso dessas informações.
            </p>

            <h2 className="text-xl font-bold">Comodidades do imóvel</h2>

            <div>
              <ul className="flex list-inside list-disc flex-wrap gap-4">
                {items.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold">Assista ao Vídeo</h2>
              <div className="aspect-video max-w-[25rem] bg-slate-300" />
            </div>
          </section>
          <section className="flex w-full flex-col gap-8">
            <h2 className="text-2xl">
              Empreendimentos e Loteamentos para{' '}
              <span className="font-bold">você</span>
            </h2>
            <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:px-4">
              {cardsData.map((imovel, index) => (
                <CardsSecond key={index} data={imovel} />
              ))}
            </div>
          </section>
          <section className="flex flex-col gap-8">
            <div className="w-[70%] max-md:w-full">
              <h2 className="mb-8 text-center text-2xl">
                <b>UNIVERSITÁRIO</b> - DESCUBRA COMO É MORAR AQUI!
              </h2>

              <Image
                src={'/assets/thumb-region.png'}
                alt="regiao"
                width={500}
                height={250}
                className="h-auto w-full object-cover"
              ></Image>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">Hotéis</h2>
              <h3>LondriStar, Do Lago, Galli, Alpha Hospedaria</h3>
            </div>
            <div className="flex gap-2">
              <button className="flex gap-2 rounded-md border border-black p-2 font-semibold hover:bg-orange-500 hover:text-white">
                <MapPin size={20}></MapPin> Explorar Região
              </button>
              <button className="flex gap-2 rounded-md border border-black p-2 font-semibold hover:bg-orange-500 hover:text-white">
                <Search size={20}></Search> Ver outros imóveis no bairro
              </button>
            </div>
          </section>
        </div>

        <div className="flex w-full justify-end">
          <div className="sticky top-0 flex max-w-[320px] flex-col gap-4 max-md:max-w-full">
            <section className="flex gap-2 max-md:justify-center">
              <button className="flex items-center justify-center gap-2 border border-gray-500 p-2 font-semibold">
                COMPARTILHAR <Share2 size={20}></Share2>
              </button>

              <button className="flex items-center justify-center gap-2 border border-gray-500 p-2 font-semibold">
                FAVORITAR <Heart size={20}></Heart>
              </button>
            </section>

            <section className="flex h-[100px] gap-2 bg-orange-500 p-2 text-white">
              <Image
                src={'/assets/profile-an.jpg'}
                alt="profile"
                width={85}
                height={120}
                className="rounded-full"
              />
              <div className="flex flex-col justify-center">
                <label>Corretor(a):</label>
                <h2 className="font-bold">Nome do Corretor(a)</h2>
              </div>
            </section>

            <section className="flex flex-col justify-center gap-2 bg-orange-500 p-2 text-white">
              <h3>Fale com o corretor(a):</h3>
              <div className="flex gap-2">
                <PhoneIcon color="white" />
                <h2 className="font-bold">(XX) X XXXX-XXXX</h2>
              </div>
              <button className="flex w-full items-center justify-center gap-2 rounded-md bg-gray-100 p-2 text-black">
                <Image
                  src={'/assets/whatsapp.svg'}
                  alt={'wp-icon'}
                  width={25}
                  height={25}
                />{' '}
                Whatsapp
              </button>
            </section>

            <section className="flex flex-col justify-center gap-2 bg-black p-4 text-white">
              <button className="flex items-center gap-2 text-xl font-semibold">
                <Calendar size={30} />
                Agendar visita
              </button>
            </section>

            <section className="flex flex-col justify-center gap-2 bg-orange-500 p-4 text-black">
              <div className="flex items-center gap-4">
                <Mail size={30} />
                <h2 className="text-xl">
                  Quero receber
                  <br />
                  <span className="font-bold">mais informações</span>
                </h2>
              </div>
              <input
                className="rounded-md p-2 outline-none"
                type="text"
                placeholder="Nome e Sobrenome"
              />
              <input
                className="rounded-md p-2 outline-none"
                type="text"
                placeholder="Telefone Celular"
              />
              <input
                className="rounded-md p-2 outline-none"
                type="email"
                placeholder="E-mail"
              />
            </section>

            <section className="flex flex-col justify-center gap-2 bg-orange-500 p-4 text-black">
              <h1 className="text-xl font-bold">Informações Desejadas</h1>
              <textarea
                className="p-2 text-black outline-none"
                placeholder="Escreva aqui..."
                value={textareaValue}
                onChange={e => setTextareaValue(e.target.value)}
              />
              <p className="text-center text-black">
                Os dados fornecidos neste formulário são sigilosos e de uso
                exclusivo da Coelho da Fonseca, e estão protegidos pela Lei
                Geral de Proteção de Dados (lei 13.709/2018)
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="z-30 grid w-full grid-cols-4 items-center justify-center border bg-gray-200 p-8 shadow-lg max-md:grid-cols-2 max-md:gap-10">
        <div className="flex flex-col gap-4 border-r-[1px] border-gray-900 text-lg max-md:p-3">
          <Image
            src={'/assets/logo-black.png'}
            alt={'logo'}
            width={250}
            height={250}
          ></Image>
          <div className="flex">
            <Image
              src={'/assets/whatsapp.svg'}
              alt={'wp-icon'}
              width={25}
              height={25}
            ></Image>
            <h2 className="font-semibold">(43) 3367-2587</h2>
          </div>
          <div className="flex">
            <Image
              src={'/assets/facebook.svg'}
              alt={'fb-icon'}
              width={25}
              height={25}
            ></Image>
            <Image
              src={'/assets/insta.svg'}
              alt={'in-icon'}
              width={25}
              height={25}
            ></Image>
          </div>
        </div>
        <div className="border-r-[1px] border-gray-900 text-center text-lg font-semibold max-md:border-none">
          <p>Sobre a V7 Imobiliária</p>
          <p>Explore os bairros</p>
          <p>Nossas sedes</p>
        </div>
        <div className="border-r-[1px] border-gray-900 text-center text-lg font-semibold max-md:p-3">
          <p>Anuncie seu imóvel</p>
          <p>Simular Financiamento</p>
          <p>Administração de Bens</p>
          <p>Política de Privacidade</p>
        </div>
        <div className="text-center font-semibold max-md:p-3">
          <p>Fale Conosco</p>
          <p>Trabalhe Conosco</p>
          <p>WhatsApp</p>
          <p>Login</p>
        </div>
      </footer>
    </div>
  )
}
