import { useParams } from "react-router-dom";

function Museo({ museos }) {
  const { id } = useParams();
  console.log(useParams());

  return (
    <div className=" p-72">
      <p>prueba museo componente{id}</p>
    </div>
  );
}

export default Museo;
