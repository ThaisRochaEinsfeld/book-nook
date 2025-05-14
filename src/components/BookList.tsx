import React from "react";

type Book = {
  id: string;
  title: string;
  author: string;
  image: string;
  description: string;
  status: "Não lido" | "Em progresso" | "Concluído";
};

type Props = {
  books: Book[];
  onBookClick?: (book: Book) => void;
};

const BookList: React.FC<Props> = ({ books, onBookClick }) => {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div
          key={book.id}
          className="book-item"
          onClick={() => onBookClick?.(book)}
        >
          <img src={book.image} className="book-image" />
          <div className="book-info">
            <div className="book-title">{book.title}</div>
          </div>
          <span className="book-arrow">›</span>
        </div>
      ))}
    </div>
  );
};

const formatStatus = (status: Book["status"]) => {
  switch (status) {
    case "Em progresso":
      return "Em progresso";
    case "Concluído":
      return "Concluído";
    case "Não lido":
      return "Não lido";
    default:
      return "";
  }
};

export default BookList;
