import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <div className="dropdown">
      <span>Filmes</span>
      <div className="dropdown-content">
        <Link to="/filmes/aventura">Aventura</Link>
        <Link to="/filmes/infantil">Infantil</Link>
        <Link to="/filmes/comedia">Comédia</Link>
        <Link to="/filmes/terror">Terror</Link>
      </div>
    </div>
    <Link to="/cadastro">Cadastro</Link>
    <Link to="/login">Login</Link>
  </nav>
);

export default Navbar;
