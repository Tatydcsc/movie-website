import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";
import ExpandableRow from "./components/ExpandableRow";
import MovieList from "./components/MovieList";

import furiosaImg from "./assets/images/furiosa.jpg";
import monicaImg from "./assets/images/turmadamonica.jpg";
import branquelasImg from "./assets/images/branquelas.jpg";
import americaImg from "./assets/images/captaoamerica.jpg";
import coragemImg from "./assets/images/homensdecoragem.jpg";

const filmesExemplo = [
  {
    id: 1,
    title: "Furiosa",
    image: furiosaImg,
  },
  {
    id: 2,
    title: "Turma da Mônica: Laços",
    image: monicaImg,
  },
  {
    id: 3,
    title: "As branquelas",
    image: branquelasImg,
  },
  {
    id: 4,
    title: "Capitão America",
    image: americaImg,
  },
  {
    id: 5,
    title: "Homens de Coragem",
    image: coragemImg,
  },
];

function CadastroLogin() {
  const rows = useSelector((state) => state.auth.rows);
  return (
    <div>
      <h2>Cadastro/Login</h2>
      {rows.map((row) => (
        <ExpandableRow key={row.id} row={row} />
      ))}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList filmes={filmesExemplo} />} />
          <Route path="/filmes/:genre" element={<h1>Filmes por Gênero</h1>} />
          <Route path="/cadastro" element={<CadastroLogin />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
