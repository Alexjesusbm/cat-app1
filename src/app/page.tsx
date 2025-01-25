"use client";

import { fetchCats } from "./services/catApi";
import ListItem from "./components/listItem";
import Loading from "./components/loading";
import Head from "next/head";
import { useState, useEffect } from "react";
import Pagination from "./pagination";

interface Cat {
  id: number;
  name: string;
  image: string;
}

export default function Home() {
  const [cats, setCats] = useState<Cat[]>([]); // Estado tipado
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const ITEMS_PER_PAGE = 3; // Limite de itens por página
  const TOTAL_ITEMS = 9; // Total de itens (exemplo)
  const TOTAL_PAGES = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE); // Total de páginas (3)

  useEffect(() => {
    const loadCats = async () => {
      setLoading(true);
      const newCats = await fetchCats(ITEMS_PER_PAGE, page); // Tipado como `Cat[]`
      setCats(newCats); // Agora o tipo é compatível
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
        <h1 className="text-center font-bold text-xl">Galeria de gatos</h1>
        {loading ? <Loading /> : <ListItem cats={cats} />}
        <Pagination
          limit={ITEMS_PER_PAGE}
          total={TOTAL_ITEMS}
          offset={page * ITEMS_PER_PAGE}
          setOffset={(newOffset: number) => setPage(newOffset / ITEMS_PER_PAGE)}
        />
      </div>
    </>
  );
}
