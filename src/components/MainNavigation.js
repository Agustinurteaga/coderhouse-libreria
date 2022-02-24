import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./MainNavigation.css";

const mainNavigation = props => (
  <header className="main-navigation">
    <nav>
      <ul>
      
        <li>
          <NavLink to="/">Libreria</NavLink>
        </li>
        <li>
          <NavLink to="/Informacion">Informacion</NavLink>
        </li>
        <li>
          <NavLink to="/Contacto">Contacto</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Carrito ({props.cartItemNumber})</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default mainNavigation;
