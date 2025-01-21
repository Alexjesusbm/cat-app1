import axios from 'axios';

// Defina os tipos para as respostas da API e os gatos
interface Cat {
  id: string;
  url: string;
}

interface DetailedCat extends Cat {
  breedName: string;
}

interface Breed {
  name: string;
}

const apiClient = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_CAT_API_KEY!,
  },
});

export const fetchCats = async (limit: number = 10): Promise<DetailedCat[]> => {
  const response = await apiClient.get<Cat[]>('/images/search', {
    params: { limit, has_breeds: 1 },
  });

  // Usando Promise.all para buscar detalhes de cada gato
  const detailedCats = await Promise.all(
    response.data.map(async (cat) => {
      const detailedCat = await fetchCatById(cat.id);
      return {
        id: cat.id,
        url: cat.url,
        breedName: detailedCat.breeds?.[0]?.name || 'Nome não disponível',
      };
    })
  );

  return detailedCats;
};

export const fetchCatById = async (id: string): Promise<{ breeds?: Breed[] }> => {
  const response = await apiClient.get<{ breeds?: Breed[] }>(`/images/${id}`);
  return response.data;
};
