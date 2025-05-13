import React from "react";
import "../styles/NavButton.css";

type NavButtonProps = {
  label: string;
  href: string;
  active?: boolean;
};

const NavButton: React.FC<NavButtonProps> = ({ label, href, active = false }) => {
  return (
    <a
      href={href}
      className={`nav-button ${active ? "active" : ""}`}
    >
      {label}
    </a>
  );
};

export default NavButton;
