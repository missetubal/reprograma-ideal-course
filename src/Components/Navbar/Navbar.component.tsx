import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/logo-reprograma.png";

export const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="hidden"></div>

      <div className="center">
        <nav>
          <div className="nav_menu">
            <ul className="nav_options">
              <li className="nav_item">
                <a href="" className="nav_link">
                  Inicio
                </a>
              </li>
              <li className="nav_item">
                <a href="" className="nav_link">
                  Sobre a Reprograma
                </a>
              </li>
              <li className="nav_item">
                <a href="" className="nav_link">
                  Contato
                </a>
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
