'use client';
import Thumb from "@/components/Thumb";
import { Bed, BedDouble, Calendar, Heart, ImageIcon, Mail, MapPin, PhoneIcon, Play, Ruler, Search, Share2, Waves } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CardsSecond from "@/components/Cards/Cards-Style-02";

const items = [
  "Sacada",
  "Gourmet",
  "Porcelanato",
  "Piscina",
  "Sacada com Skin Glass",
  "Alarme",
  "Sala de estar",
  "Despensa",
  "Varanda",
  "Churrasqueira",
  "Sala",
  "Aceita Pet",
  "Vinílico",
  "Aquecimento Elétrico",
  "Sala de Jantar",
  "Cozinha",
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

];
export default function Imovel() {
  const [textareaValue, setTextareaValue] = useState("");

  return (
    <div className=" font-[family-name:var(--font-inter)]">
      <section className=" w-full ">
      <Thumb></Thumb>
      </section>

      <main className="grid grid-cols-[75%_25%] px-2 max-md:grid-cols-1">
        <div className="flex flex-col gap-8 col-start-1   p-4  w-full">
          <section className=" border-b  flex flex-col  gap-3 p-2">
            <h1 className="font-semibold text-2xl ">
              Jd. Universitário - Casa Triplex com 3 Suítes, 3 dormitórios e 4 banheiros, alto para venda
            </h1>

            <p>Casa</p>
            <div>

            </div>
            <div className=" flex justify-between">
              <div className="flex gap-2">
                <MapPin size={25}></MapPin> <p><span className="font-bold">Ver</span> no mapa</p>
              </div>
              <div className="flex gap-2">
                <button className=" border border-black flex gap-2 font-semibold p-2 rounded-md hover:bg-orange-500 hover:text-white">
                  <ImageIcon size={20}></ImageIcon> GALERIA
                </button>
                <button className=" border border-black flex gap-2 font-semibold p-2 rounded-md hover:bg-orange-500 hover:text-white">
                  <Play size={20}></Play> VIDEO
                </button>
              </div>
            </div>
          </section>
          <section className=" border-b  flex flex-col  gap-3 p-2">
            <h3 className="text-xl">Valor:</h3>
            <h2 className="font-bold text-3xl">R$1.190.000</h2>
          </section>
          <section className=" flex flex-col gap-8">
            <div className=" grid grid-cols-5 justify-center items-center font-bold">
              <div className=" flex flex-col justify-center items-center ">
                <Ruler size={25}></Ruler>
                <h3 className="text-xl">1350 m² total</h3>
                <p>área total</p>
              </div>
              <div className=" flex flex-col justify-center items-center ">
                <Ruler size={25}></Ruler>
                <h3 className="text-xl">220 m²</h3>
                <p>área util</p>
              </div>
              <div className=" flex flex-col justify-center items-center ">
                <Bed size={25}></Bed>
                <h3 className="text-xl">3</h3>
                <p>Dormitórios</p>
              </div>
              <div className=" flex flex-col justify-center items-center ">
                <BedDouble size={25}></BedDouble>
                <h3 className="text-xl">3</h3>
                <p>Suites</p>
              </div>
              <div className=" flex flex-col justify-center items-center ">
                <Waves size={25}></Waves>
                <h3 className="text-xl">1</h3>
                <p>Piscina</p>
              </div>

            </div>

            <p className=" font-medium">
              No piso intermediário, você encontra um ambiente totalmente integrado entre: Sala de estar, sala de jantar, cozinha e
              área gourmet, todos com porcelanato de 1º linha, uma churrasqueira em área suspensa, e todo o conforto de um churrasco
              em família. Conta também com 4 vagas de garagem, 4 banheiros, sacada e varanda espaçosa.
              <br />
              <br />
              <br />
              * Estas informações refletem a opinião do corretor associado e não necessariamente da V7 Imobiliária , que não se
              responsabiliza por eventuais divergências ou prejuízos decorrentes do uso dessas informações.
            </p>
            <h2 className=" text-xl font-bold">
              Comodidades do imóvel
            </h2>
            <div className=" max-h-[100px]">
              <ul className="px-4 grid grid-cols-5 list-disc gap-x-8">
                {items.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className=" text-xl font-bold">
                Assista ao Vídeo
              </h2>
              <div className="bg-slate-300 w-[400px] min-h-[300px]">

              </div>
            </div>
          </section>
          <section className="w-full flex flex-col gap-8">
            <h2 className="text-2xl">
              Empreendimentos e Loteamentos para <span className="font-bold">você</span>
            </h2>
            <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1  gap-8 max-md:px-4">

              {cardsData.map((imovel, index) => (
                <CardsSecond key={index} data={imovel} />
              ))}


            </div>

          </section>
          <section className=" flex flex-col gap-8">
            <div className="w-[70%] max-md:w-full ">
              <h2 className="text-2xl text-center mb-8"><b>UNIVERSITÁRIO</b> - DESCUBRA COMO É MORAR AQUI!</h2>

              <Image
                src={"/assets/thumb-region.png"}
                alt="regiao"
                width={500}
                height={250}
                className="object-cover w-full h-auto"
              ></Image>
            </div>
            <div className=" flex flex-col">
              <h2 className="text-2xl font-bold">Hotéis</h2>
              <h3>LondriStar, Do Lago, Galli, Alpha Hospedaria</h3>


            </div>
            <div className="flex gap-2">
              <button className=" border border-black flex gap-2 font-semibold p-2 rounded-md hover:bg-orange-500 hover:text-white">
                <MapPin size={20}></MapPin> Explorar Região
              </button>
              <button className=" border border-black flex gap-2 font-semibold p-2 rounded-md hover:bg-orange-500 hover:text-white">
                <Search size={20}></Search> Ver outros imóveis no bairro
              </button>
            </div>
          </section>
        </div>





        <div className="w-full flex justify-end ">
          <div className="flex flex-col gap-4 max-w-[320px] sticky top-0  max-md:max-w-full ">
            <section className="flex gap-2 max-md:justify-center">
              <button className="flex gap-2 border border-gray-500 p-2 font-semibold items-center justify-center">
                COMPARTILHAR <Share2 size={20}></Share2>
              </button>
              <button className="flex gap-2 border border-gray-500 p-2 font-semibold items-center justify-center">
                FAVORITAR <Heart size={20}></Heart>
              </button>
            </section>

            <section className="bg-orange-500 h-[100px] p-2 flex gap-2 text-white">
              <Image
                src={"/assets/profile-an.jpg"}
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

            <section className="bg-orange-500 flex flex-col gap-2 justify-center p-2 text-white">
              <h3>Fale com o corretor(a):</h3>
              <div className="flex gap-2">
                <PhoneIcon color="white" />
                <h2 className="font-bold">(XX) X XXXX-XXXX</h2>
              </div>
              <button className="w-full flex justify-center items-center p-2 gap-2 bg-gray-100 rounded-md text-black">
                <Image
                  src={"/assets/whatsapp.svg"}
                  alt={"wp-icon"}
                  width={25}
                  height={25}
                /> Whatsapp
              </button>
            </section>

            <section className="bg-black flex flex-col gap-2 justify-center p-4 text-white">
              <button className="flex gap-2 font-semibold text-xl items-center">
                <Calendar size={30} />Agendar visita
              </button>
            </section>

            <section className="bg-orange-500 flex flex-col gap-2 justify-center p-4 text-black">
              <div className="flex items-center gap-4">
                <Mail size={30} />
                <h2 className="text-xl">Quero receber<br />
                  <span className="font-bold">mais informações</span>
                </h2>
              </div>
              <input className="outline-none p-2 rounded-md" type="text" placeholder="Nome e Sobrenome" />
              <input className="outline-none p-2 rounded-md" type="text" placeholder="Telefone Celular" />
              <input className="outline-none p-2 rounded-md" type="email" placeholder="E-mail" />
            </section>

            <section className="bg-orange-500 flex flex-col gap-2 justify-center p-4 text-black">
              <h1 className="font-bold text-xl">Informações Desejadas</h1>
              <textarea
                className="text-black outline-none p-2"
                placeholder="Escreva aqui..."
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
              />
              <p className="text-black text-center">
                Os dados fornecidos neste formulário são sigilosos
                e de uso exclusivo da Coelho da Fonseca, e estão
                protegidos pela Lei Geral de Proteção de Dados
                (lei 13.709/2018)
              </p>
            </section>
          </div>
        </div>
      </main>
      <footer className="w-full  bg-gray-200 grid grid-cols-4 items-center justify-center max-md:grid-cols-2 max-md:gap-10 p-8 shadow-lg border z-30">
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
