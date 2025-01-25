import React from 'react';
import Link from 'next/link';

interface CardItemProps {
  id: string;
  url: string;
  breedName: string;
}

const CardItem: React.FC<CardItemProps> = ({ id, url, breedName }) => (
  <Link href={`/cat/${id}`}>
    <div className="border-2 border-gray-300 rounded-lg p-2.5 text-center w-[350px] shadow-md">
      <img
        src={url}
        alt={`Gato ${id}`}
        className="w-full h-[300px] object-cover rounded-lg"
      />
      <h3 className="mt-2.5">{breedName}</h3>
    </div>
  </Link>
);

export default CardItem;