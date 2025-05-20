import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "../components/Layout";
import dunaImage from "../assets/duna.png";
import neuromancer from "../assets/neuromancer.png";
import fundacao from "../assets/fundacao.png";
import robo from "../assets/robo.png";
import admiravel from "../assets/admiravel.png";
import infancia from "../assets/infancia.png";
import solaris from "../assets/solaris.png";
import escuridao from "../assets/escuridao.png";
import { FiPlusCircle } from "react-icons/fi";


const books = [
  {
    id: "1",
    title: "Duna",
    author: "Frank Herbert",
    image: dunaImage,
    description: "No deserto do planeta Arrakis, intrigas políticas e batalhas épicas se desenrolam em busca do controle da especiaria.",
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

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const book = books.find((b) => b.id === id);

  if (!book) return <div>Livro não encontrado</div>;

  return (
    <Layout>
      <div style={{ padding: "20px", fontFamily: "Arial, Helvetica, sans-serif" }}>
        
        <div style={{ fontSize: "14px", marginBottom: "12px", color: "#555" }}>
          <Link to="/search" style={{ color: "#555", textDecoration: "none" }}>Search</Link>
          {" "}›{" "}
          <span style={{ color: "black", fontWeight: 500 }}>{book.title}</span>
        </div>

        <div style={{ display: "flex", gap: "24px", marginTop: "24px" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <img
              src={book.image}
              alt={book.title}
              className="book-image"
              style={{
                width: "380px",
                height: "auto",
                borderRadius: "12px",
                marginBottom: "12px"
              }}
            />
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                color: "#0e7490",
                cursor: "pointer",
                fontFamily: "Arial, Helvetica, sans-serif",
                fontWeight: 500,
                backgroundColor: "#e0f2f1",
                padding: "8px 12px",
                borderRadius: "8px",
                transition: "background-color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#b2dfdb";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#e0f2f1";
              }}
            >
              {/* <FiPlusCircle size={18} /> */}
              <span>Adicionar shelf</span>
            </div>
          </div>

          <div className="book-info" style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "8px" }}>
            <p className="book-author" style={{ textTransform: "uppercase", color: "#0e7490", fontWeight: 500, fontSize: "14px" }}>
              {book.author}
            </p>
            <h1 className="book-title" style={{ fontSize: "32px", margin: 0 }}>
              {book.title}
            </h1>
            <p className="book-status" style={{ fontSize: "16px", color: "#555", maxWidth: "600px", lineHeight: 1.5 }}>
              {book.description}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BookDetails;
