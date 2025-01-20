import { fetchCats } from './services/catApi'; // Importa a função para buscar gatos
import Cardgatos from './components/cardgatos'; // Componente para exibir a galeria

export default async function Home() {
  const cats = await fetchCats(10); // Obtém 10 gatos detalhados da API

  return (
    <>
      <div id="home">
        <h1 id="title">Galeria de gatos</h1> {/* Título */}
        <Cardgatos cats={cats} /> {/* Componente para renderizar a lista */}
      </div>
    </>
  );
}
