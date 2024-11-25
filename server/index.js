const express = require("express");
const app = express();
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "password",
  database: "banco",
});

app.use(express.json());

const cors = require("cors");
app.use(cors());

app.post("/register", (req, res) => {
  const nome = req.body.nome;
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.lenght == 0) {
      bcrypt.hash(password, saltRounds, (erro, hash) => {
        db.query(
          "INSERT INTO usuario (nome, email, password) VALUES (? , ?)",
          [nome, email, hash],
          (err, response) => {
            if (err) {
              res.send(err);
            }
            res.send({ msg: "Cadastrado com sucesso" });
          }
        );
      });
    } else {
      res.send({ msg: "Usuário já cadastrado" });
    }
  });
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM usuarios WHERE email = ? ",
    [email],
    (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.lenght > 0) {
        bcrypt.compare(password, result[0].password, (erro, result) => {
          if (result) {
            res.send({ msg: "Usuário logado com sucesso" });
          } else {
            res.send({ msg: "Senha incorreta" });
          }
        });
      } else {
        res.send({ msg: "Conta não encontrada" });
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Rodando na porta 3001");
});
