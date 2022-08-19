import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/logo-reprograma.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="hidden"></div>

      <div className="center">
        <nav>
          <div className="nav_menu">
            <ul className="nav_options">
              <li className="nav_item">
                <Link to="/" className="nav_link">
                  Inicio
                </Link>
              </li>
              <li className="nav_item">
                <Link to="" className="nav_link">
                  Sobre a Reprograma
                </Link>
              </li>
              <li className="nav_item">
                <Link to="" className="nav_link">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <a href="#home">
        <img src={Logo} alt="" />
      </a>
    </div>
  );
};
