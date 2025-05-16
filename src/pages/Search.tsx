import React, { useState } from "react";
import Layout from "../components/Layout";
import SearchInput from "../components/SearchInput";
import BookList from "../components/BookList"; 
import dunaImage from '../assets/duna.png';
import neuromancer from '../assets/neuromancer.png';
import fundacao from '../assets/fundacao.png';
import robo from '../assets/robo.png';
import admiravel from '../assets/admiravel.png';
import infancia from '../assets/infancia.png';
import solaris from '../assets/solaris.png';
import escuridao from '../assets/escuridao.png';


const books = [
  {
    id: "1",
    title: "Duna",
    author: "Frank Herbert",
    image: dunaImage,
    description: "Uma das maiores obras de ficção científica já escritas.",
    status: "Concluído" as "Concluído", 
  },
  {
    id: "2",
    title: "Fundação",
    author: "Isaac Asimov",
    image: fundacao,
    description: "A saga galáctica de Asimov.",
    status: "Não lido" as "Não lido", 
  },
  {
    id: "3",
    title: "Neuromancer",
    author: "William Gibson",
    image: neuromancer,
    description: "Cyberpunk puro.",
    status: "Em progresso" as "Em progresso",  
  },
  {
    id: "4",
    title: "Eu, Robô",
    author: "Isaac Asimov",
    image: robo,
    description: "Coleção de contos sobre robôs.",
    status: "Em progresso" as "Em progresso",  
  },
  {
    id: "5",
    title: "Admirável Mundo Novo",
    author: "Aldous Huxley",
    image: admiravel,
    description: "Uma sociedade futurista moldada por engenharia genética e condicionamento psicológico.",
    status: "Em progresso" as "Em progresso",  
  },
  {
    id: "6",
    title: "O Fim da Infância",
    author: "Arthur C. Clarke",
    image: infancia,
    description: "A chegada de alienígenas benevolentes transforma a civilização humana para sempre.",
    status: "Em progresso" as "Em progresso",  
  },
  {
    id: "7",
    title: "Solaris",
    author: "Stanisław Lem",
    image: solaris,
    description: "Cientistas tentam compreender o misterioso oceano pensante do planeta Solaris.",
    status: "Em progresso" as "Em progresso",  
  },
  {
    id: "8",
    title: "A Mão Esquerda da Escuridão",
    author: "Ursula K. Le Guin",
    image: escuridao,
    description: "Explora temas de gênero e cultura em um planeta onde os habitantes não possuem sexo fixo.",
    status: "Em progresso" as "Em progresso",  
  },
];


const Search: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author}`.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <Layout>
      <div className="search-page-header">
        <h1 className="search-title">Search</h1>

        <SearchInput
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>

      <BookList books={filteredBooks} />
    </Layout>
  );
};

export default Search;
