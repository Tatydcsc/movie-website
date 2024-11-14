import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar">
    <Link to="/">Home</Link>
    <Link to="/filmes">Filmes</Link>
    <Link to="/cadastro">Cadastro</Link>
    <Link to="/login">Login</Link>
  </nav>
);
