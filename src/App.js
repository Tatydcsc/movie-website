import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
import Navbar from "./components/Navbar";

import MovieList from "./components/MovieList";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import furiosaImg from "./assets/images/furiosa.jpg";
import monicaImg from "./assets/images/turmadamonica.jpg";
import branquelasImg from "./assets/images/branquelas.jpg";
import americaImg from "./assets/images/captaoamerica.jpg";
import coragemImg from "./assets/images/homensdecoragem.jpg";
import { Movie } from "./components/Movie";

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

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList filmes={filmesExemplo} />} />
          <Route path="/filmes" element={<Movie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
