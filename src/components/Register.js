import React from "react";

export const Register = () => {
  return (
    <div className="container">
      <h2> Faça o seu cadastro</h2>
      <form className="form">
        <div>
          <label>Nome completo:</label>
          <input
            type="text"
            name="nome"
            placeholder="Nome completo"
            required
          ></input>
        </div>
        <div>
          <label>Data de nascimento:</label>
          <input
            type="date"
            name="data"
            placeholder="data nascimento "
            required
          ></input>
        </div>
        <div>
          <label>e-mail:</label>
          <input
            type="email"
            name="email"
            placeholder="Informe o seu e-mail"
            required
          ></input>
        </div>
        <div>
          <label>Informe uma senha:</label>
          <input
            type="password"
            name="password"
            placeholder="informe a sua senha"
            required
          ></input>
        </div>
        <div>
          <label>Confirme a senha:</label>
          <input
            type="password"
            name="confirm-password"
            placeholder="confirme a sua senha"
            required
          ></input>
        </div>

        <button type="submit">Cadastrar</button>

        <p className="link">
          Já tem acesso? <a href="/login">Faça o login</a>
        </p>
      </form>
    </div>
  );
};
