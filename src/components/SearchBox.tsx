import React from "react";
import "../styles/SearchBox.css";
import { FaSearch } from "react-icons/fa";

const SearchBox: React.FC = () => {
  return (
    <div className="search-box">
      <FaSearch />
      <span className="search-text">Search</span>
    </div>
  );
};

export default SearchBox;
