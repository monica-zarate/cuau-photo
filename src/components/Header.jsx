import React from "react";
import "./styles/main.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to={`/`} className="header__title-link">
        <h1 className="header__title">Cuau</h1>
        <span className="header__subtitle">Fotografía</span>
      </Link>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__li">
            <Link to={`/galeria`} className="header__nav-links">
              Galería
            </Link>
          </li>
          <li className="header__li">
            <Link to={`/contacto`} className="header__nav-links">
              Contacto
            </Link>
          </li>
          <li className="header__li">
            <Link to={`/acerca-de`} className="header__nav-links">
              Bio
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
