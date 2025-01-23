"use client";

import { fetchCats } from './services/catApi';
import ListItem from './components/listItem';
import Loading from './components/loading';
import Head from 'next/head';
import { useState, useEffect } from 'react';

export default function Home() {
  const [cats, setCats] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCats = async () => {
      setLoading(true);
      const newCats = await fetchCats(3, page);
      setCats(newCats);
      setLoading(false);
    };
    loadCats();
  }, [page]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full font-sans text-gray-2000 bg-[url('/fundo.png')] bg-cover bg-no-repeat bg-center m-0 min-h-screen">
        <h1 className='text-center font-bold text-xl'>Galeria de gatos</h1>
        {loading ? <Loading /> : <ListItem cats={cats} />}
        <div className="flex justify-center mt-5 gap-4">
        </div>
        
      </div>
    </>
  );
}

