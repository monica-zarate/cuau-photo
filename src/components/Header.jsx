import React from "react";
import "./styles/main.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__title-wrapper">
        <Link to={`/`} className="header__title-link">
          <h1 className="header__title">Cuau Fotografía</h1>
        </Link>
      </div>
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
              Acerca de
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
