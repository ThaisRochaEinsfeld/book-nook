import React, { useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import Layout from "../components/Layout";
import dunaImage from "../assets/duna.png";
import neuromancer from "../assets/neuromancer.png";
import fundacao from "../assets/fundacao.png";
import robo from "../assets/robo.png";
import admiravel from "../assets/admiravel.png";
import infancia from "../assets/infancia.png";
import solaris from "../assets/solaris.png";
import escuridao from "../assets/escuridao.png";
import { useShelf, Book } from "../context/ShelfContext";
import Toast from "../components/Toast";

const books = [
  {
    id: "1",
    title: "Duna",
    author: "Frank Herbert",
    image: dunaImage,
    description:
      "No deserto do planeta Arrakis, intrigas políticas e batalhas épicas se desenrolam em busca do controle da especiaria.",
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
    description:
      "Uma sociedade futurista moldada por engenharia genética e condicionamento psicológico.",
    status: "Em progresso" as "Em progresso",
  },
  {
    id: "6",
    title: "O Fim da Infância",
    author: "Arthur C. Clarke",
    image: infancia,
    description:
      "A chegada de alienígenas benevolentes transforma a civilização humana para sempre.",
    status: "Em progresso" as "Em progresso",
  },
  {
    id: "7",
    title: "Solaris",
    author: "Stanisław Lem",
    image: solaris,
    description:
      "Cientistas tentam compreender o misterioso oceano pensante do planeta Solaris.",
    status: "Em progresso" as "Em progresso",
  },
  {
    id: "8",
    title: "A Mão Esquerda da Escuridão",
    author: "Ursula K. Le Guin",
    image: escuridao,
    description:
      "Explora temas de gênero e cultura em um planeta onde os habitantes não possuem sexo fixo.",
    status: "Em progresso" as "Em progresso",
  },
];

const statusOptions: Book["status"][] = ["Não lido", "Em progresso", "Concluído"];

const BookDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const fromShelf = location.state?.from === "shelf";
  const [toastMessage, setToastMessage] = useState("");

  const book = books.find((b) => b.id === id);
  const { shelf, addToShelf, updateBookStatus } = useShelf();

  if (!book) return <div>Livro não encontrado</div>;

  const isInShelf = shelf.find((b) => b.id === book.id);
  const currentStatus = isInShelf?.status || book.status;


  const showToast = (message: string) => {
    setToastMessage(message);
  };

  const closeToast = () => {
    setToastMessage("");
  };

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
              style={{ width: "380px", borderRadius: "12px", marginBottom: "12px" }}
            />

            {!isInShelf && (
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#0e7490",
                  cursor: "pointer",
                  fontWeight: 500,
                  backgroundColor: "#e0f2f1",
                  padding: "8px 12px",
                  borderRadius: "8px",
                }}
                onClick={() => {
                  addToShelf(book);
                  showToast(`${book.title} foi adicionado à Shelf!`);
                }}
              >
                <span>Adicionar na Shelf</span>
              </div>
            )}
            {isInShelf && fromShelf && (
              <div style={{ marginTop: "24px" }}>
                <p><strong>Status</strong></p>
                <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
                  {statusOptions.map((status) => (
                    <button
                      key={status}
                      onClick={() => updateBookStatus(book.id, status)}
                      style={{
                        padding: "8px 16px",
                        borderRadius: "999px",
                        border: currentStatus === status ? "2px solid #00B5D8" : "1px solid #ccc",
                        backgroundColor: currentStatus === status ? "#E6F7FB" : "#fff",
                        color: "#333",
                        cursor: "pointer",
                      }}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ textTransform: "uppercase", color: "#0e7490", fontWeight: 500 }}>{book.author}</p>
            <h1 style={{ fontSize: "32px" }}>{book.title}</h1>
            <p style={{ color: "#555", maxWidth: "600px", lineHeight: 1.5 }}>{book.description}</p>

          </div>
        </div>
      </div>
      {toastMessage && (
        <Toast onClose={closeToast} />
      )}

    </Layout>
  );
};

export default BookDetails;
