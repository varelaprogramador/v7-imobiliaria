import React from "react";
import Image from "next/image"; 
import { Bed, CarFront, DoorOpen, MapPin, ShowerHead, Waves} from "lucide-react";
import Link from "next/link";

interface CardProps {
    data: {
        categoria: string;
        fundo: string; 
        nome: string;
        localizacao: string;
        quartostexto: string;
        vagasvisib: boolean;
        quartosvisib: boolean;
        piscinavisib: boolean; 
        banheirovisb: boolean;
        cloasetvisib: boolean; 
        qtdvagas: number;
        qtdbanheiros: number;
        link:string
    };
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
        link
    } = data; // Desestrutura o objeto

    return (
        <Link href={link}>
        <article className="relative bg-black w-[400px] h-[450px] flex flex-col justify-end text-white">
            <Image 
                src={fundo} 
                alt={`${nome} - ${categoria}`} 
                layout="fill" 
                objectFit="cover" 
                className="absolute z-0" // A imagem fica atrás
            />
            <div className="relative z-10 w-full h-full flex flex-col justify-end gap-2 px-4 bg-[linear-gradient(to_bottom,_rgba(0,0,0,0),_rgba(0,0,0,1))] p-4 rounded-lg">
                {/* Fundo semitransparente para o texto */}
                <h2>{categoria}</h2>
                <h1 className="text-4xl" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>{nome}</h1>
                <div className="w-full flex gap-2">
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
    );
}

export default Card;
