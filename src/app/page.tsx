import { fetchCats } from './services/catApi'; // Importa a função para buscar gatos
import Cardgatos from './components/cardgatos'; // Componente para exibir a galeria
import Head from 'next/head';

export default async function Home() {
  const cats = await fetchCats(10); // Obtém 10 gatos detalhados da API

  return (
    <>
    <Head>
        <link rel="icon" href="/favicon.ico" />
    </Head>
      <div className="h-full font-sans text-gray-2000 bg-[url('/fundo.png')] bg-cover bg-no-repeat bg-center m-0 min-h-screen">
        <h1 className='text-center font-bold text-xl'>Galeria de gatos</h1> {/* Título */}
        <Cardgatos cats={cats} /> {/* Componente para renderizar a lista */}
        
      </div>
    </>
  );
}
