import React from "react";
import { Link } from "react-router-dom";

interface BookCardProps {
  id: string;
  image: string;
  title: string;
  status: "Concluído" | "Não lido" | "Em progresso";
  onRemove?: (id: string) => void; 
}

const BookCard: React.FC<BookCardProps> = ({
  id,
  image,
  title,
  status,
  onRemove
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: "160px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        cursor: "pointer",
        fontFamily: "Arial, sans-serif",
        borderRadius: "8px",
        padding: "8px",
        transition: "background-color 0.2s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f0f0f0")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
    >
       {onRemove && (
        <div
          onClick={() => onRemove(id)}
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            backgroundColor: "#e0e0e0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 1
          }}
        >
          <span style={{ color: "#ff3333", fontWeight: "bold", fontSize: "16px", lineHeight: "1" }}>×</span>
        </div>
      )}
      <Link to={`/book/${id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", borderRadius: "8px" }}
        />
        <div>
          <h3 style={{ fontSize: "16px", marginBottom: "4px" }}>{title}</h3>
          <p style={{ fontSize: "14px", color: "#666" }}>{status}</p>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
