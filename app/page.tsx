'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

import Banner from '@/components/Banner-Style-01'
import { Minus, Plus, Search } from 'lucide-react'
import CarouselSwiper from '@/components/Carousel'
import CardsSecond from '@/components/Cards/Cards-Style-02'
import CardsDestaque from '@/components/Cards/Cards-Style-01'

const dataDestaque = [
  {
    categoria: 'APARTAMENTO',
    fundo: '/assets/Cards/CardsDestaque/imovel-1.png',
    nome: 'EPIC PALHANO',
    localizacao: 'Santa Rosa - Londrina/PR',
    quartostexto: '4 quartos (2 suítes)',
    qtdvagas: 3,
    qtdbanheiros: 4,
    vagasvisib: true, // Visibilidade de vagas
    quartosvisib: true, // Visibilidade de quartos
    banheirovisb: true, // Visibilidade de banheiros
    piscinavisib: false,
    cloasetvisib: false,
    link: '',
  },
  {
    categoria: 'APARTAMENTO',
    fundo: '/assets/Cards/CardsDestaque/imovel-1.png',
    nome: 'EPIC PALHANO',
    localizacao: 'Santa Rosa - Londrina/PR',
    quartostexto: '4 quartos (2 suítes)',
    qtdvagas: 3,
    qtdbanheiros: 4,
    vagasvisib: true, // Visibilidade de vagas
    quartosvisib: true, // Visibilidade de quartos
    banheirovisb: true, // Visibilidade de banheiros
    piscinavisib: false,
    cloasetvisib: false,
    link: '',
  },
  {
    categoria: 'CASA',
    fundo: '/assets/Cards/CardsDestaque/imovel-2.png',
    nome: 'Triplex',
    localizacao: 'Universitário - Londrina/PR',
    quartostexto: '3 quartos (3 suítes)',
    qtdvagas: 3,
    qtdbanheiros: 4,
    vagasvisib: false, // Visibilidade de vagas
    quartosvisib: true, // Visibilidade de quartos
    banheirovisb: true, // Visibilidade de banheiros
    piscinavisib: true,
    cloasetvisib: false,
    link: '/imovel',
  },
  {
    categoria: 'CASA',
    fundo: '/assets/Cards/CardsDestaque/imovel-3.png',
    nome: 'Sobrado',
    localizacao: 'Califórnia - Londrina/PR',
    quartostexto: '3 quartos (1 suíte)',
    qtdvagas: 3,
    qtdbanheiros: 3,
    vagasvisib: false, // Visibilidade de vagas
    quartosvisib: true, // Visibilidade de quartos
    banheirovisb: true, // Visibilidade de banheiros
    piscinavisib: false,
    cloasetvisib: true,
    link: '',
  },
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
  {
    categoria: 'CASA',
    fundo: '/assets/Cards/CardsDestaque/imovel-3.png',
    nome: 'Sobrado',
    localizacao: 'Califórnia - Londrina/PR',

    venda: 400,
    condominio: undefined,
  },
]

const bannerData = [
  {
    fundo: '/assets/Banner/imovel-1.png',
    tipo: 'Sobrado',
    nome: 'Condomínio Terras de Canaã',
    localizacao: 'Loteamento Terras de Canaã - Cambé/PR',
    quartos: '4 quartos (4 suítes)',
    areaTotal: '1350',
    areaUtil: '500',
    temElevador: true,
    temGourmet: true,
    qtdBanheiros: 2,
    temArCondicionado: true,
    temPiscina: false,
    temChurrasqueira: true,
    valor: 'R$ 450.000,00',
  },
  {
    fundo: '/assets/Banner/imovel-2.png',
    tipo: 'Sobrado',
    nome: 'Condomínio Terras de Canaã',
    localizacao: 'Loteamento Terras de Canaã - Cambé/PR',
    quartos: '4 quartos (4 suítes)',
    areaTotal: '1350',
    areaUtil: '500',
    temElevador: true,
    temGourmet: true,
    qtdBanheiros: 2,
    temArCondicionado: true,
    temPiscina: false,
    temChurrasqueira: true,
    valor: 'R$ 450.000,00',
  },
]

interface Municipio {
  id: number
  nome: string
}

export default function Home() {
  const [isFilterAdvanced, setFilterAdvanced] = useState(false)

  const [cities, setCities] = useState<Municipio[]>([])

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await fetch(
          'https://servicodados.ibge.gov.br/api/v1/localidades/estados/PR/municipios',
        )

        if (!response.ok) {
          throw new Error('Erro ao buscar municípios do estado do Paraná')
        }

        const municipiosData = await response.json()
        setCities(municipiosData) // Armazena os municípios no estado
        // console.log('Municípios do Paraná:', municipiosData) // Log dos municípios
      } catch (error) {
        // console.error('Erro ao buscar cidades:', error)
      }
    }

    fetchCities()
  }, [])

  return (
    <div className="font-[family-name:var(--font-inter)]">
      <section
        className={`relative bg-cover bg-center p-[100px] transition-all duration-300 ${
          isFilterAdvanced ? 'min-h-[700px]' : 'min-h-[450px]'
        }`}
        style={{ backgroundImage: 'url(/assets/banner.jpeg)' }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black bg-opacity-70 p-6 text-white">
          <Image src={'/assets/logo.png'} alt="logo" width={250} height={250} />

          <div className="text-center">
            <h1 className="text-3xl font-semibold">
              Encontre a casa perfeita para{' '}
              <span className="text-[#F39200]">você e sua família</span>
            </h1>
            <h2 className="text-2xl font-light">
              Um novo imóvel para você e sua família com um atendimento
              personalizado e exclusivo
            </h2>
            <nav className="mt-4 flex justify-center gap-4">
              <div className="link-hover">
                <a>Alugar</a>
              </div>
              <div className="link-hover">
                <a>Comprar</a>
              </div>
              <div className="link-hover">
                <a>Vender</a>
              </div>
            </nav>
          </div>

          <div className="grid grid-rows-1 rounded-md border-gray-300 bg-white text-black">
            <div className="flex min-h-8 w-[90vw] max-w-[600px] items-center justify-start rounded-md border border-gray-300 p-3 text-black">
              <div className="flex w-full items-center justify-between">
                <label>Encontre seu imóvel:</label>
                <div className="flex gap-2">
                  <div className="inline-flex gap-3 justify-self-end rounded-md border">
                    <button className="rounded-md bg-[#F39200] p-2 text-white">
                      Venda
                    </button>
                    <button className="p-2">Locação</button>
                  </div>
                  <button
                    onClick={() => setFilterAdvanced(!isFilterAdvanced)}
                    className="flex items-center gap-2 rounded-lg border p-1 transition-colors hover:bg-[#F39200] hover:text-white"
                  >
                    Mais Filtro{' '}
                    {isFilterAdvanced ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}
                  </button>
                </div>
              </div>
            </div>
            {isFilterAdvanced && (
              <div className={`p-4 transition-all duration-300`}>
                <h2>Filtros Avançados:</h2>
                <div className="mt-3 grid grid-cols-[150px_150px_200px] gap-8 max-md:grid-cols-1">
                  <select className="rounded-md border border-gray-300 p-2 outline-none">
                    <option value="" disabled>
                      Tipo de imóvel
                    </option>
                    <option value="apartamento">Apartamento</option>
                    <option value="casa">Casa</option>
                    <option value="sala_comercial">Sala Comercial</option>
                    <option value="terreno">Terreno</option>
                  </select>
                  <select
                    className="rounded-md border border-gray-300 p-2 outline-none"
                    id="cidade"
                  >
                    <option value="" disabled>
                      Selecione uma cidade
                    </option>
                    {cities.map(cidade => (
                      <option key={cidade.id} value={cidade.nome}>
                        {cidade.nome}
                      </option>
                    ))}
                  </select>
                  <button className="flex items-center justify-center gap-2 rounded-lg border p-2 transition-colors hover:bg-[#F39200] hover:text-white">
                    Buscar <Search size={18}></Search>
                  </button>
                </div>
              </div>
            )}
          </div>
          <p>Anuncie seu imóvel gratuitamente</p>
        </div>
      </section>

      <div className="grid min-h-screen grid-rows-[20px_1fr_20px] gap-16 px-5 pb-20 max-md:px-0">
        <main className="row-start-2 flex flex-col items-center justify-center gap-8 px-2">
          <section className="flex w-full flex-col gap-8">
            <h2 className="text-4xl">
              Imóveis em <span className="font-bold">destaque</span>
            </h2>
            <div className="flex w-full flex-wrap items-center gap-8 max-md:justify-center">
              {dataDestaque.map((imovel, index) => (
                <CardsDestaque key={index} data={imovel} />
              ))}
            </div>
          </section>
          <section className="flex w-full flex-col gap-8">
            <h2 className="text-4xl">
              Veja algumas das nossas{' '}
              <span className="font-bold">novidades</span>
            </h2>
            <div className="flex flex-col gap-8 max-md:px-4">
              {bannerData.map((imovel, index) => (
                <Banner key={index} data={imovel} />
              ))}
            </div>
          </section>
          <section className="flex w-full flex-col gap-8">
            <h2 className="text-4xl">
              Imóveis <span className="font-bold">em destaque à venda</span>
            </h2>
            <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:px-4">
              {cardsData.map((imovel, index) => (
                <CardsSecond key={index} data={imovel} />
              ))}
            </div>
            <div className="flex items-center justify-center">
              <button className="mt-4 rounded-md bg-orange-500 p-3 text-white">
                Ver mais imóveis à venda
              </button>
            </div>
          </section>

          <section className="flex w-full flex-col gap-8">
            <h2 className="text-4xl">
              Imóveis <span className="font-bold">em destaque para alugar</span>
            </h2>
            <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:px-4">
              {cardsData.map((imovel, index) => (
                <CardsSecond key={index} data={imovel} />
              ))}
            </div>
            <div className="flex items-center justify-center">
              <button className="mt-4 rounded-md bg-orange-500 p-3 text-white">
                Ver mais imóveis para alugar
              </button>
            </div>
          </section>
          <section className="flex w-full flex-col gap-8">
            <h2 className="text-4xl">
              Empreendimentos e Loteamentos para
              <span className="font-bold">você</span>
            </h2>
            <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:px-4">
              {cardsData.map((imovel, index) => (
                <CardsSecond key={index} data={imovel} />
              ))}
            </div>
            <div className="flex items-center justify-center">
              <button className="mt-4 min-w-[200px] rounded-md bg-orange-500 p-3 text-white">
                Ver mais
              </button>
            </div>
          </section>
        </main>
      </div>

      <section className="flex w-full flex-col justify-center gap-10 p-10 max-md:items-center max-md:p-2">
        <h2 className="text-4xl">
          <span className="font-bold">
            Confira as últimas notícias sobre o mercado
          </span>
          <br></br>
          imobiliário em Londrina
        </h2>
      </section>

      {/* <footer className="grid w-full grid-cols-4 items-center justify-center border bg-gray-200 p-8 shadow-lg max-md:grid-cols-2 max-md:gap-10"> */}
      <footer className="bg-gray-20 grid grid-cols-1 place-items-center gap-8 bg-gray-200 p-8 shadow-lg sm:grid-cols-2 sm:place-items-stretch lg:grid-cols-4">
        <div className="flex flex-col items-center justify-center gap-4 border-gray-900 text-lg max-md:p-3 sm:border-r-[1px]">
          <Image
            alt={'logo'}
            width={250}
            height={250}
            src={'/assets/logo-black.png'}
          />

          <div className="flex">
            <Image
              src={'/assets/whatsapp.svg'}
              alt={'wp-icon'}
              width={25}
              height={25}
            />
            <h2 className="font-semibold">(43) 3367-2587</h2>
          </div>

          <div className="flex">
            <Image
              src={'/assets/facebook.svg'}
              alt={'fb-icon'}
              width={25}
              height={25}
            />

            <Image
              src={'/assets/insta.svg'}
              alt={'in-icon'}
              width={25}
              height={25}
            />
          </div>
        </div>

        <div className="border-gray-900 text-center text-lg font-semibold max-md:border-none lg:border-r-[1px]">
          <p>Sobre a V7 Imobiliária</p>
          <p>Explore os bairros</p>
          <p>Nossas sedes</p>
        </div>

        <div className="border-gray-900 text-center text-lg font-semibold max-md:p-3 sm:border-r-[1px]">
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
