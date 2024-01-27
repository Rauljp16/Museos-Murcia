import { useState } from "react";
import Museos from "./Components/Museos";
import Home from "./Components/Home";
import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Header from "./Components/Header";

function App() {
  const [museos, setMuseos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:3001/museos"
        //"https://nexo.carm.es/nexo/archivos/recursos/opendata/json/Museos.json"
      )
      .then((response) => {
        setMuseos(response.data);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Museos" element={<Museos museos={museos} />} />
      </Routes>
    </>
  );
}

export default App;
