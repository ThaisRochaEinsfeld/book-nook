import React from "react";
import logo from "../assets/logo.png";
import NavButton from "./navButton";
const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" className="icon" />
        <h1>Book Nook</h1>
      </div>
      <nav>
        <ul className="flex gap-4 items-center">
          <li><NavButton label="Search" href="/search" active/></li>
          <li><NavButton label="Shelf" href="/shelf" /></li>
          <li><NavButton label="Profile" href="/profile" /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
