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
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginLeft: '130px' }}>
      {cats.map((cat) => (
        <Link key={cat.id} href={`/cat/${cat.id}`}>
          <div
            style={{
              border: '2px solid #ccc',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              width: '350px',
              boxShadow: '2px 2px 10px rgba(0,0,0,0.1)',
            }}
          >
            <img
              src={cat.url}
              alt={`Gato ${cat.id}`}
              style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h3 style={{ marginTop: '10px' }}>{cat.breedName}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cardgatos;
