import Museos from "./Components/Museos";
import Home from "./Components/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Museo from "./Components/Museo";
import Footer from "./Components/footer";
import { datosMuseos } from "./db";
// import './App.css';

function App() {
  const museos = datosMuseos;

  //Esta seria la llamada a la api con axios pero por problemas con la api finalmente lo tuve que dejar en local en el archivo 'db.json'

  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://nexo.carm.es/nexo/archivos/recursos/opendata/json/Museos.json"
  //     )
  //     .then((response) => {
  //       setMuseos(response.data);
  //     })
  //     .catch((e) => {
  //       alert(e);
  //     });
  // }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="museos" element={<Museos museos={museos} />} />
        <Route path="museos/:id" element={<Museo museos={museos} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
