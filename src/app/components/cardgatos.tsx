import React from 'react';
import Link from 'next/link';

interface Cat {
  id: string;
  url: string;
  breedName: string; // Nome da raça
}

interface CardGatosProps {
  cats: Cat[];
}

const Cardgatos: React.FC<CardGatosProps> = ({ cats }) => {
  return (
    <div className='flex flex-wrap gap-10 ml-[130px]'>
      {cats.map((cat) => (
        <Link key={cat.id} href={`/cat/${cat.id}`}>
    <div className="border-2 border-gray-300 rounded-lg p-2.5 text-center w-[350px] shadow-md">
            <img
               src={cat.url} 
               alt={`Gato ${cat.id}`} 
               className="w-full h-[300px] object-cover rounded-lg"
            />
            <h3 className="mt-2.5">{cat.breedName}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cardgatos;
