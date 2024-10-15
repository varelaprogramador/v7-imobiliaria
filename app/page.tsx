'use client';
import Image from "next/image";
import CardsDestaque from "@/components/Cards/Cards-Style-01";
import CardsSecond from "@/components/Cards/Cards-Style-02";
import Banner from "@/components/Banner-Style-01";
import { Minus, Plus, Search } from "lucide-react";
import { useState, useEffect } from "react";
import CarouselSwiper from "@/components/Carousel";



const dataDestaque = [
  {
    categoria: "APARTAMENTO",
    fundo: "/assets/Cards/CardsDestaque/imovel-1.png",
    nome: "EPIC PALHANO",
    localizacao: "Santa Rosa - Londrina/PR",
    quartostexto: "4 quartos (2 suítes)",
    qtdvagas: 3,
    qtdbanheiros: 4,
    vagasvisib: true, // Visibilidade de vagas
    quartosvisib: true, // Visibilidade de quartos
    banheirovisb: true, // Visibilidade de banheiros
    piscinavisib: false,
    cloasetvisib: false,
    link: ''
  },
  {
    categoria: "APARTAMENTO",
    fundo: "/assets/Cards/CardsDestaque/imovel-1.png",
    nome: "EPIC PALHANO",
    localizacao: "Santa Rosa - Londrina/PR",
    quartostexto: "4 quartos (2 suítes)",
    qtdvagas: 3,
    qtdbanheiros: 4,
    vagasvisib: true, // Visibilidade de vagas
    quartosvisib: true, // Visibilidade de quartos
    banheirovisb: true, // Visibilidade de banheiros
    piscinavisib: false,
    cloasetvisib: false,
    link: ''
  },
  {
    categoria: "CASA",
    fundo: "/assets/Cards/CardsDestaque/imovel-2.png",
    nome: "Triplex",
    localizacao: "Universitário - Londrina/PR",
    quartostexto: "3 quartos (3 suítes)",
    qtdvagas: 3,
    qtdbanheiros: 4,
    vagasvisib: false, // Visibilidade de vagas
    quartosvisib: true, // Visibilidade de quartos
    banheirovisb: true, // Visibilidade de banheiros
    piscinavisib: true,
    cloasetvisib: false,
    link: '/imovel'
  },
  {
    categoria: "CASA",
    fundo: "/assets/Cards/CardsDestaque/imovel-3.png",
    nome: "Sobrado",
    localizacao: "Califórnia - Londrina/PR",
    quartostexto: "3 quartos (1 suíte)",
    qtdvagas: 3,
    qtdbanheiros: 3,
    vagasvisib: false, // Visibilidade de vagas
    quartosvisib: true, // Visibilidade de quartos
    banheirovisb: true, // Visibilidade de banheiros
    piscinavisib: false,
    cloasetvisib: true,
    link: ''
  },
];
const cardsData = [
  {
    categoria: "APARTAMENTO",
    fundo: "/assets/Cards/CardsDestaque/imovel-1.png",
    nome: "EPIC PALHANO",
    localizacao: "Santa Rosa - Londrina/PR",
    condominio: 400,
    venda: 400

  },
  {
    categoria: "APARTAMENTO",
    fundo: "/assets/Cards/CardsDestaque/imovel-1.png",
    nome: "EPIC PALHANO",
    localizacao: "Santa Rosa - Londrina/PR",
    condominio: 400,
    venda: 400

  },
  {
    categoria: "CASA",
    fundo: "/assets/Cards/CardsDestaque/imovel-2.png",
    nome: "Triplex",
    localizacao: "Universitário - Londrina/PR",
    condominio: 400,
    venda: 400
  },
  {
    categoria: "CASA",
    fundo: "/assets/Cards/CardsDestaque/imovel-3.png",
    nome: "Sobrado",
    localizacao: "Califórnia - Londrina/PR",

    venda: 400,
    condominio: undefined

  },
];
const bannerData = [{
  fundo: "/assets/Banner/imovel-1.png",
  tipo: "Sobrado",
  nome: "Condomínio Terras de Canaã",
  localizacao: "Loteamento Terras de Canaã - Cambé/PR",
  quartos: "4 quartos (4 suítes)",
  areaTotal: "1350",
  areaUtil: "500",
  temElevador: true,
  temGourmet: true,
  qtdBanheiros: 2,
  temArCondicionado: true,
  temPiscina: false,
  temChurrasqueira: true,
  valor: "R$ 450.000,00",
},
{
  fundo: "/assets/Banner/imovel-2.png",
  tipo: "Sobrado",
  nome: "Condomínio Terras de Canaã",
  localizacao: "Loteamento Terras de Canaã - Cambé/PR",
  quartos: "4 quartos (4 suítes)",
  areaTotal: "1350",
  areaUtil: "500",
  temElevador: true,
  temGourmet: true,
  qtdBanheiros: 2,
  temArCondicionado: true,
  temPiscina: false,
  temChurrasqueira: true,
  valor: "R$ 450.000,00",
}


];
const imovelCarousel = [
  {
    id: '1',
    titulo: 'Como preparar seu imóvel para locação?',
    descricao: 'Colocar seu imóvel parado para a locação é uma excelente oportunidade...',
    imagem: '/assets/Banner/imovel-2.png',
  },
  {
    id: '2',
    titulo: 'Investindo em Imóveis de Luxo',
    descricao: 'Saiba como investir em imóveis de alto padrão e obter um ótimo retorno...',
    imagem: '/assets/Banner/imovel-2.png',
  },
  {
    id: '3',
    titulo: 'Tendências do Mercado Imobiliário',
    descricao: 'Descubra as últimas tendências no mercado imobiliário para o ano...',
    imagem: '/assets/Banner/imovel-2.png',
  },
];

interface Municipio {
  id: number;
  nome: string;
}




export default function Home() {
  const [isFilterAvanced, setFilterAvanced] = useState(false);

  const [cities, setCities] = useState<Municipio[]>([]);

  useEffect(() => {
    const fetchCities = async () => {
      try {

        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados/PR/municipios');

        if (!response.ok) {
          throw new Error('Erro ao buscar municípios do estado do Paraná');
        }

        const municipiosData = await response.json();
        setCities(municipiosData); // Armazena os municípios no estado
        console.log('Municípios do Paraná:', municipiosData); // Log dos municípios
      } catch (error) {
        console.error('Erro ao buscar cidades:', error);
      }
    };

    fetchCities();
  }, []);


  return (
    <div className="font-[family-name:var(--font-inter)]">
      <section
        className={`bg-cover bg-center relative p-[100px] transition-all duration-300 ${isFilterAvanced ? 'min-h-[700px]' : 'min-h-[450px]'}`}
        style={{ backgroundImage: "url(/assets/banner.jpeg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white gap-4 p-6">
          <Image
            src={"/assets/logo.png"}
            alt="logo"
            width={250}
            height={250}
          />
          <div className="text-center">
            <h1 className="text-3xl font-semibold">
              Encontre a casa perfeita para <span className="text-[#F39200]">você e sua família</span>
            </h1>
            <h2 className="text-2xl font-light">Um novo imóvel para você e sua família com um atendimento personalizado e exclusivo</h2>
            <nav className="flex mt-4 gap-4 justify-center">
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
          <div className="bg-white grid grid-rows-1 text-black rounded-md border-gray-300">
            <div className="flex justify-start items-center w-[90vw] max-w-[600px] min-h-8 rounded-md border border-gray-300 p-3 text-black">
              <div className="flex items-center justify-between w-full">
                <label>Encontre seu imóvel:</label>
                <div className="flex gap-2">
                  <div className="justify-self-end gap-3 rounded-md border inline-flex">
                    <button className="bg-[#F39200] p-2 rounded-md text-white">Venda</button>
                    <button className="p-2">Locação</button>
                  </div>
                  <button
                    onClick={() => setFilterAvanced(!isFilterAvanced)}
                    className="flex gap-2 items-center border p-1 rounded-lg hover:bg-[#F39200] hover:text-white transition-colors"
                  >
                    Mais Filtro {isFilterAvanced ? <Minus size={20} /> : <Plus size={20} />}
                  </button>
                </div>
              </div>
            </div>
            {isFilterAvanced && (
              <div className={`p-4 transition-all duration-300`}>
                <h2>Filtros Avançados:</h2>
                <div className=" grid grid-cols-[150px_150px_200px] max-md:grid-cols-1 gap-8 mt-3">

                  <select className="outline-none p-2 border border-gray-300 rounded-md ">
                    <option value="" disabled>
                      Tipo de imóvel
                    </option>
                    <option value="apartamento">Apartamento</option>
                    <option value="casa">Casa</option>
                    <option value="sala_comercial">Sala Comercial</option>
                    <option value="terreno">Terreno</option>

                  </select>
                  <select className="outline-none p-2 border border-gray-300 rounded-md" id="cidade">
                    <option value="" disabled>
                      Selecione uma cidade
                    </option>
                    {cities.map((cidade) => (
                      <option key={cidade.id} value={cidade.nome}>
                        {cidade.nome}
                      </option>
                    ))}
                  </select>
                  <button

                    className="flex gap-2 items-center justify-center border p-2 rounded-lg hover:bg-[#F39200] hover:text-white transition-colors"
                  >
                    Buscar <Search size={18}></Search>
                  </button>


                </div>
              </div>
            )}
          </div>
          <p>Anuncie seu imóvel gratuitamente</p>
        </div>
      </section>

      <div className="grid grid-rows-[20px_1fr_20px] px-5 min-h-screen  pb-20 gap-16 max-md:px-0">

        <main className="flex flex-col gap-8 row-start-2 items-center justify-center px-2">
          <section className="w-full flex flex-col gap-8">
            <h2 className="text-4xl">
              Imóveis em <span className="font-bold">destaque</span>
            </h2>
            <div className="w-full flex flex-wrap gap-8 items-center max-md:justify-center">
              {dataDestaque.map((imovel, index) => (

                <CardsDestaque key={index} data={imovel} />
              ))}
            </div>
          </section>
          <section className="w-full flex flex-col gap-8">
            <h2 className="text-4xl">
              Veja algumas das nossas <span className="font-bold">novidades</span>
            </h2>
            <div className="flex flex-col gap-8 max-md:px-4">

              {bannerData.map((imovel, index) => (
                <Banner key={index} data={imovel} />
              ))}

            </div>
          </section>
          <section className="w-full flex flex-col gap-8">
            <h2 className="text-4xl">
              Imóveis <span className="font-bold">em destaque à venda</span>
            </h2>
            <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1  gap-8 max-md:px-4">

              {cardsData.map((imovel, index) => (
                <CardsSecond key={index} data={imovel} />
              ))}


            </div>
            <div className="flex items-center justify-center">
              <button className="bg-orange-500 p-3 rounded-md text-white  mt-4">
                Ver mais imóveis à venda
              </button>
            </div>
          </section>


          <section className="w-full flex flex-col gap-8">
            <h2 className="text-4xl">
              Imóveis  <span className="font-bold">em destaque para alugar</span>
            </h2>
            <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1  gap-8 max-md:px-4">

              {cardsData.map((imovel, index) => (
                <CardsSecond key={index} data={imovel} />
              ))}


            </div>
            <div className="flex items-center justify-center">
              <button className="bg-orange-500 p-3 rounded-md text-white  mt-4">
                Ver mais imóveis para alugar
              </button>
            </div>
          </section>
          <section className="w-full flex flex-col gap-8">
            <h2 className="text-4xl">
              Empreendimentos e Loteamentos para<span className="font-bold">você</span>
            </h2>
            <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1  gap-8 max-md:px-4">

              {cardsData.map((imovel, index) => (
                <CardsSecond key={index} data={imovel} />
              ))}


            </div>
            <div className="flex items-center justify-center">
              <button className="bg-orange-500 p-3 rounded-md text-white  mt-4 min-w-[200px]">
                Ver mais
              </button>
            </div>
          </section>




        </main>

      </div>

      <section className="w-full p-10 gap-10 flex flex-col justify-center max-md:items-center max-md:p-2">
        <h2 className="text-4xl">
          <span className="font-bold">Confira as últimas notícias sobre o mercado</span>
          <br></br>
          imobiliário em Londrina
        </h2>

        <CarouselSwiper></CarouselSwiper>

      </section>

      <footer className="w-full  bg-gray-200 grid grid-cols-4 items-center justify-center max-md:grid-cols-2 max-md:gap-10 p-8 shadow-lg border">
        <div className=" border-r-[1px] border-gray-900 text-lg max-md:p-3 flex flex-col gap-4">
          <Image
            src={"/assets/logo-black.png"}
            alt={"logo"}
            width={250}
            height={250}
          ></Image>
          <div className=" flex">
            <Image
              src={"/assets/whatsapp.svg"}
              alt={"wp-icon"}
              width={25}
              height={25}
            ></Image>
            <h2 className="font-semibold">(43) 3367-2587</h2>
          </div>
          <div className="flex">
            <Image
              src={"/assets/facebook.svg"}
              alt={"fb-icon"}
              width={25}
              height={25}
            ></Image>
            <Image
              src={"/assets/insta.svg"}
              alt={"in-icon"}
              width={25}
              height={25}
            ></Image>
          </div>

        </div>
        <div className="text-center border-r-[1px] border-gray-900 text-lg font-semibold max-md:border-none">
          <p>Sobre a V7 Imobiliária</p>
          <p>Explore os bairros</p>
          <p>Nossas sedes</p>

        </div>
        <div className="text-center border-r-[1px] border-gray-900 text-lg font-semibold max-md:p-3">
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
  );
}
