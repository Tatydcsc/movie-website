import React from "react";

export const Login = () => {
  return (
    <div className="container">
      <h2>Login</h2>
      <form className="form">
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" required></input>
        </div>
        <div>
          <label>e-mail:</label>
          <input type="email" name="email" required></input>
        </div>
        <div>
          <label>senha:</label>
          <input type="password" name="password" required></input>
        </div>

        <button type="submit">Entrar</button>
        <p className="link">
          Ainda não tem conta? <a href="/cadastro">Cadastre-se</a>
        </p>
      </form>
    </div>
  );
};
