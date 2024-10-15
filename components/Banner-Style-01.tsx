import { Bed, DoorClosed, MapIcon, Microwave, Plus, Ruler, ShowerHead, UtensilsCrossed, Waves, Wind } from "lucide-react";
import React from "react";
import Image from "next/image";


interface BannerProps {
    data: {
        fundo:string,
        tipo: string;
        nome: string;
        localizacao: string;
        quartos: string;
        areaTotal: string;
        areaUtil: string;
        temElevador: boolean;
        temGourmet: boolean;
        qtdBanheiros: number;
        temArCondicionado: boolean;
        temPiscina: boolean;
        temChurrasqueira: boolean;
        valor: string;
    };
}

function Banner({ data }: BannerProps) {
    const {
        fundo, 
        tipo,
        nome,
        localizacao,
        quartos,
        areaTotal,
        areaUtil,
        temElevador,
        temGourmet,
        qtdBanheiros,
        temArCondicionado,
        temPiscina,
        temChurrasqueira,
        valor
    } = data;

    return (
        <article className="flex w-full bg-[#F9F8F5] max-w-[2000px] max-md:flex-col">
            {/* Bloco Preto para a imagem */}
            <div className="bg-black w-[40%] min-h-[300px] max-md:w-full h-full bg-cover bg-center  " style={{ backgroundImage: `url(${fundo})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            </div>

            <div className="p-8 w-[70%] flex flex-col gap-6 max-md:w-full">
                <h2 className="text-lg font-semibold text-black uppercase">
                    {tipo}
                </h2>
                <h1 className="text-4xl font-bold text-black">{nome}</h1>

                <div className="flex items-center gap-2 text-black">
                    <MapIcon className="w-5 h-5 " />
                    <p>{localizacao}</p>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4 ">
                    <div className="flex items-center font-bold gap-2">
                        <Bed className="w-5 h-5 " />
                        <p>{quartos}</p>
                    </div>
                    <div className="flex items-center font-bold gap-2">
                        <Ruler className="w-5 h-5" />
                        <p>{areaTotal} m² total</p>
                    </div>
                    <div className="flex items-center font-bold gap-2">
                        <Ruler className="w-5 h-5" />
                        <p>{areaUtil} m² útil</p>
                    </div>
                    {temElevador && (
                        <div className="flex items-center font-bold gap-2">
                            <DoorClosed className="w-5 h-5" />
                            <p>Elevador Privativo</p>
                        </div>
                    )}
                    {temGourmet && (
                        <div className="flex items-center font-bold gap-2">
                            <UtensilsCrossed className="w-5 h-5" />
                            <p>Gourmet</p>
                        </div>
                    )}
                    <div className="flex items-center font-bold gap-2">
                        <ShowerHead className="w-5 h-5" />
                        <p>{qtdBanheiros} banheiros</p>
                    </div>
                    {temArCondicionado && (
                        <div className="flex items-center font-bold gap-2">
                            <Wind className="w-5 h-5" />
                            <p>Ar-Condicionado</p>
                        </div>
                    )}
                    {temPiscina && (
                        <div className="flex items-center font-bold gap-2">
                            <Waves className="w-5 h-5" />
                            <p>Piscina</p>
                        </div>
                    )}
                    {temChurrasqueira && (
                        <div className="flex items-center font-bold gap-2">
                            <Microwave className="w-5 h-5" />
                            <p>Churrasqueira</p>
                        </div>
                    )}
                </div>

                <div className="mt-6">
                    <h3 className="text-xl text-black font-bold">Vendas</h3>
                    <h2 className="text-xl font-bold text-gray-800">{valor}</h2>
                </div>
                <div className="w-full grid grid-cols-4 gap-20 justify-center items-center">
                <Image
                src={fundo}
                alt={"casa"}
                width={90}
                height={90}
                quality={100}
                className="object-cover w-full h-auto rounded-md"
              />
              <Image
                src={fundo}
                alt={"casa"}
                width={90}
                height={90}
                quality={100}
                className="object-cover w-full h-auto rounded-md"
              />
              <Image
                src={fundo}
                alt={"casa"}
                width={90}
                height={90}
                quality={100}
                className="object-cover w-full h-auto rounded-md"
              />
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-center font-semibold">
                    21 fotos
                </h2>
                <Plus size={24}>

                </Plus>
              </div>




                </div>
            </div>
        </article>
    );
}

export default Banner;
