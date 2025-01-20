import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_CAT_API_KEY!,
  },
});

export const fetchCats = async (limit: number = 10) => {
  const response = await apiClient.get('/images/search', {
    params: { limit, has_breeds: 1 }, 
  });

  const detailedCats = await Promise.all(
    response.data.map(async (cat: any) => {
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

export const fetchCatById = async (id: string) => {
  const response = await apiClient.get(`/images/${id}`);
  return response.data;
};
