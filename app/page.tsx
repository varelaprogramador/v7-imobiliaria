import Image from "next/image";
import CardsDestaque from "@/components/Cards/Cards-Style-01";
import CardsSecond from "@/components/Cards/Cards-Style-02";
import Banner from "@/components/Banner-Style-01";
import { Plus } from "lucide-react";

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

export default function Home() {
  return (
    <div className="  font-[family-name:var(--font-inter)]">

      <section
        className="bg-cover bg-center min-h-[400px] relative p-[100px]"
        style={{ backgroundImage: "url(/assets/banner.jpeg)" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-white  gap-4 p-6">
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
          <div className="bg-white flex justify-start items-center w-[90vw] max-w-[600px] min-h-8 rounded-md border border-gray-300 p-3 text-black">
            <div className="flex items-center justify-between w-full">
              <label >
                Encontre seu imóvel:
              </label>
              <div className="flex gap-2">

              <div className=" justify-self-end gap-3 rounded-md border inline-flex">
                <button className="bg-[#F39200] p-2 rounded-md text-white">
                  Venda
                </button>
                <button className=" p-2  ">
                  Locação
                </button>
              </div>

              <button className="flex gap-2 items-center border p-1 rounded-lg hover:bg-[#F39200] hover:text-white transition-colors">
                Mais Filtro <Plus size={20}></Plus>
              </button>

              </div>


            </div>
          </div>
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
    </div>
  );
}
