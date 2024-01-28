import { useState } from "react";
import Museos from "./Components/Museos";
import Home from "./Components/Home";
import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Museo from "./Components/Museo";

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
        <Route path="/museos" element={<Museos museos={museos} />}>
          <Route path="museo/:id" element={<Museo museos={museos} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
