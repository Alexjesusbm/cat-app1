import React from 'react';
import CardItem from './cardItem';

interface ListItemProps {
  cats: {
    id: string;
    url: string;
    breedName: string;
  }[];
}

const ListItem: React.FC<ListItemProps> = ({ cats }) => (
  <div className='flex flex-wrap gap-10 justify-center'>
    {cats.map((cat) => (
      <CardItem key={cat.id} id={cat.id} url={cat.url} breedName={cat.breedName} />
    ))}
  </div>
);

export default ListItem;
