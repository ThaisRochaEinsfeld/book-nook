import React from "react";
import { useNavigate } from "react-router-dom";

interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  description: string;
  status: string;
}

interface Props {
  books: Book[];
}

const BookList: React.FC<Props> = ({ books }) => {
  const navigate = useNavigate();

  return (
    <div className="book-list">
      {books.map((book) => (
        <div 
          key={book.id} 
          className="book-item" 
          onClick={() => navigate(`/book/${book.id}`)} 
        >
          <img src={book.image} alt={book.title} className="book-image" />
          <div className="book-info">
            <div>
              <div className="book-title">{book.title}</div>
            </div>
          </div>
          <span className="book-arrow">›</span>
        </div>
      ))}
    </div>
  );
};

export default BookList;
