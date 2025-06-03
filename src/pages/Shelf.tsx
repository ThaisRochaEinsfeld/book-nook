import { useState } from "react";
import { useShelf } from "../context/ShelfContext";
import Layout from "../components/Layout";
import SearchInput from "../components/SearchInput";
import BookCard from "../components/BookCard";

const Shelf: React.FC = () => {
  const { shelf, removeFromShelf } = useShelf();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = shelf.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="search-page-header">
        <h1 className="search-title">Shelf</h1>
        <SearchInput
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div style={{ padding: "0 16px", marginTop: "24px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
          {filteredBooks.length === 0 ? (
            <p>Nenhum livro encontrado na shelf.</p>
          ) : (
            filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                image={book.image}
                title={book.title}
                status={book.status}
                onRemove={removeFromShelf} 
              />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Shelf;
