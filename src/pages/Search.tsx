import React, { useState } from "react";
import Layout from "../components/Layout";
import SearchInput from "../components/SearchInput";
import BookList from "../components/BookList"; 
import dunaImage from '../assets/duna.png';

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
    image: dunaImage,
    description: "A saga galáctica de Asimov.",
    status: "Não lido" as "Não lido", 
  },
  {
    id: "3",
    title: "Neuromancer",
    author: "William Gibson",
    image: dunaImage,
    description: "Cyberpunk puro.",
    status: "Em progresso" as "Em progresso",  
  },
  {
    id: "4",
    title: "Eu, Robô",
    author: "Isaac Asimov",
    image: dunaImage,
    description: "Coleção de contos sobre robôs.",
    status: "Em progresso" as "Em progresso",  
  },
  {
    id: "5",
    title: "Eu, Robô",
    author: "Isaac Asimov",
    image: dunaImage,
    description: "Coleção de contos sobre robôs.",
    status: "Em progresso" as "Em progresso",  
  },
  {
    id: "6",
    title: "Eu, Robô",
    author: "Isaac Asimov",
    image: dunaImage,
    description: "Coleção de contos sobre robôs.",
    status: "Em progresso" as "Em progresso",  
  },
  {
    id: "7",
    title: "Eu, Robô",
    author: "Isaac Asimov",
    image: dunaImage,
    description: "Coleção de contos sobre robôs.",
    status: "Em progresso" as "Em progresso",  
  },
  {
    id: "8",
    title: "Eu, Robô",
    author: "Isaac Asimov",
    image: dunaImage,
    description: "Coleção de contos sobre robôs.",
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
