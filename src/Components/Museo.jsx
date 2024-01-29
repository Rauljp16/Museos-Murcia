/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";

function Museo({ museos }) {
  const { id } = useParams();
  console.log(useParams());
  const detallesMuseo = museos.find((museo) => museo.id === id);
  console.log(detallesMuseo);

  return (
    <div className="absolute bottom-1/2 ">
      <p>prueba museo componente{id}</p>
      <p>este es el nombre{detallesMuseo.Nombre}</p>
    </div>
  );
}

export default Museo;
