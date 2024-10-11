import React from "react";
import Image from "next/image"; // Importa o componente Image
import { Bed, CarFront, DoorOpen, MapPin, ShowerHead, Waves } from "lucide-react";

interface CardProps {
    data: {
        categoria: string;
        fundo: string; // Novo campo para a imagem de fundo
        nome: string;
        localizacao: string;
        condominio: number | undefined;
        venda: number | undefined;
    };
}

function Card({ data }: CardProps) {
    const {
        categoria,
        fundo,
        nome,
        localizacao,
        condominio,
        venda
    } = data; // Desestrutura o objeto

    return (
        <article className=" bg-black w-[400px] max-h-[600px] flex flex-col justify-end text-black">

            <div className="w-full min-h-[300px]" style={{ backgroundImage: `url(${fundo})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>

            </div>
            <div className=" w-full h-full flex flex-col justify-end gap-2 px-4 py-5 bg-[#D9D9D9]">

                <h2>{categoria}</h2>
                <h1 className="text-4xl" >{nome}</h1>
                <div className="w-full flex gap-2">
                    <MapPin size={20} />
                    <p>{localizacao}</p>
                </div>
            </div>

            <div className="flex flex-col px-4 gap-2 min-h-[75px] w-full justify-center bg-[#898989] text-white py-3">
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
    );
}

export default Card;
