import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav className="navbar">
    <div className="links">
      <Link to="/" className="active">
        Home
      </Link>
      <Link to="/cadastro">Cadastro</Link>
      <Link to="/login">Login</Link>
    </div>
  </nav>
);
