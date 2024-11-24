import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Navbar } from "./components/Navbar/index";

import MovieList from "./components/ListMovie";
import { Register } from "./components/Navbar/Register";
import { Login } from "./components/Navbar/Login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<MovieList />} />

          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
