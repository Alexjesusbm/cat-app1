'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchCatById } from '../../services/catApi';

interface CatDetails {
  id: string;
  url: string;
  breeds?: {
    weight: { metric: string };
    name: string;
    temperament: string;
    origin: string;
    country_codes: string;
    country_code: string;
    life_span: string;
    wikipedia_url: string;
  }[];
}

export default function Dadosgato() {
  const { id } = useParams(); // Obtém o ID do gato na URL
  const [cat, setCat] = useState<CatDetails | null>(null);

  useEffect(() => {
    const loadCat = async () => {
      const data = await fetchCatById(id as string); // Busca os detalhes do gato
      setCat(data);
    };
    loadCat();
  }, [id]);

  if (!cat) return <p>Carregando...</p>;

  return (
    <div className="text-center p-5">
      <h1>{cat.breeds ? cat.breeds[0].name : 'Nome não disponível'}</h1>
      <img src={cat.url} alt="Gato" style={{ width: '400px' }} />
      {cat.breeds && (
        <div>
          <p>
            <strong>Peso:</strong> {cat.breeds[0].weight.metric} kg
          </p>
          <p>
            <strong>Temperamento:</strong> {cat.breeds[0].temperament}
          </p>
          <p>
          <strong>Origem:</strong> {cat.breeds[0].origin}
          </p>
          <p>
          <strong>Sigla do País:</strong> {cat.breeds[0].country_code}
          </p>
          <p>
          <strong>Tempo de vida:</strong> {cat.breeds[0].life_span}
          </p>
          <p>
          <strong>Link Wikipedia:</strong> {cat.breeds[0].wikipedia_url}
          </p>
        </div>
      )}
    </div>
  );
}
