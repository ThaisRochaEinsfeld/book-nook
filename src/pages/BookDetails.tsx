import React from "react";
import { useParams } from "react-router-dom";  
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

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();  
  const book = books.find((b) => b.id === id); 

  if (!book) {
    return <div>Livro não encontrado</div>;
  }

  return (
    <div className="book-details">
      <div className="book-details-image">
        <img src={book.image} alt={book.title} width={300} height={300} />
      </div>
      <div className="book-details-info">
        <h2>{book.title}</h2>
        <p><strong>Autor:</strong> {book.author}</p>
        <p><strong>Descrição:</strong> {book.description}</p>
      </div>
    </div>
  );
};

export default BookDetails;
